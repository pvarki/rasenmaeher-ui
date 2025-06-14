import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "node:path";

export default async ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  await prepareAssetSet();

  return defineConfig({
    plugins: [react()],

    server: {
      watch: {
        ignored: ["**/.env*"],
      },
      host: process.env.SERVER_DOMAIN || "localhost",

      allowedHosts: [
        "mtls." + process.env.SERVER_DOMAIN,
        process.env.SERVER_DOMAIN, // Dynamically allow the current domain
        "localhost", // Always allow localhost for local dev
        "0.0.0.0", // Allow any network access (useful in Docker)
        "mtls.localmaeher.dev.pvarki.fi",
        "localmaeher.dev.pvarki.fi",
      ].filter(Boolean), // Remove undefined values
      proxy: {
        "/api": {
          target: "http://rmapi:8000",
          secure: false,
        },
      },
    },
  });
};

const DEFAULT_ASSET_SET = "neutral";

const ASSET_SET_STORE_PATH = "assetSetStore";
const ASSET_SET_PATH = "src/assets/set";
const SET_NAME_FILE = "setName.txt";

async function prepareAssetSet() {
  const targetSet = process.env.VITE_ASSET_SET ?? DEFAULT_ASSET_SET;
  if (process.env.VITE_ASSET_SET === undefined)
    console.log("No VITE_ASSET_SET set, using default:", DEFAULT_ASSET_SET);

  // Ensure the ASSET_SET_PATH directory exists
  await fs.promises.mkdir(ASSET_SET_PATH, { recursive: true });

  const currentSet = await fs.promises
    .readFile(path.join(ASSET_SET_PATH, SET_NAME_FILE), "utf-8")
    .then((data) => data.trim())
    .catch(() => null); // Handle the case where the setName.txt file does not exist

  if (targetSet === currentSet) return;

  console.log("Changing to asset set:", targetSet);
  await checkForAssetSet(targetSet);
  await clearAssetSet();
  await copyAssetSet(targetSet);
}

async function checkForAssetSet(setName: string) {
  await fs.promises
    .access(path.join(ASSET_SET_STORE_PATH, setName))
    .catch(() => {
      throw new Error(`VITE_ASSET_SET: ${setName}, does not exist in assets`);
    });
}

async function clearAssetSet() {
  const entries = await fs.promises.readdir(ASSET_SET_PATH, {
    withFileTypes: true,
  });
  const unlinkPromises = entries.map((entry) => {
    const fullPath = path.join(ASSET_SET_PATH, entry.name);
    return entry.isDirectory()
      ? deleteRecursively(fullPath)
      : fs.promises.unlink(fullPath);
  });
  await Promise.all(unlinkPromises);
}

async function deleteRecursively(dirPath: string) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
  const unlinkPromises = entries.map((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    return entry.isDirectory()
      ? deleteRecursively(fullPath)
      : fs.promises.unlink(fullPath);
  });
  await Promise.all(unlinkPromises);
  await fs.promises.rmdir(dirPath);
}

async function copyAssetSet(setName: string) {
  await fs.promises.cp(
    path.join(ASSET_SET_STORE_PATH, setName),
    path.join(ASSET_SET_PATH),
    { recursive: true, force: true },
  );
  // Ensure setName.txt is created after copying the assets
  await fs.promises.writeFile(
    path.join(ASSET_SET_PATH, SET_NAME_FILE),
    setName,
  );
}
