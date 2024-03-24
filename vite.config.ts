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
      proxy: {
        "/api": {
          target: "http://rmapi:8000",
          secure: false,
        },
      },
    },
  });
};

const DEFAULT_ASSET_SET = "pv";

const ASSET_SET_STORE_PATH = "assetSetStore";
const ASSET_SET_PATH = "src/assets/set";
const SET_NAME_FILE = "setName.txt";

async function prepareAssetSet() {
  const targetSet = process.env.VITE_ASSET_SET ?? DEFAULT_ASSET_SET;
  if (process.env.VITE_ASSET_SET === undefined)
    console.log("No VITE_ASSET_SET set, using default:", DEFAULT_ASSET_SET);

  const currentSet = await fs.promises
    .readFile(path.join(ASSET_SET_PATH, SET_NAME_FILE), "utf-8")
    .then((data) => data.trim())
    .catch(() => console.log("No current asset set"));

  if (targetSet === currentSet) return;

  console.log("Chancing to asset set:", targetSet);
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
  for (const file of fs.readdirSync(ASSET_SET_PATH)) {
    fs.unlinkSync(path.join(ASSET_SET_PATH, file));
  }
}

async function copyAssetSet(setName: string) {
  await fs.promises.writeFile(
    path.join(ASSET_SET_PATH, SET_NAME_FILE),
    setName,
  );
  await fs.promises.cp(
    path.join(ASSET_SET_STORE_PATH, setName),
    path.join(ASSET_SET_PATH),
    { recursive: true, force: true },
  );
}
