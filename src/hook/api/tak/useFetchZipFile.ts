import { UseMutationOptions, useMutation } from "react-query";

interface FileData {
  title: string;
  filename: string;
  data: string;
}

interface FilesResponse {
  files: {
    tak: FileData[];
  };
}

async function fetchZipFile(): Promise<{ blob: Blob; filename: string }> {
  const res = await fetch("/api/v1/instructions/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch files");
  }

  const data = (await res.json()) as FilesResponse;
  const fileData = data.files.tak[0]; // Assuming you want the first file in the 'tak' array

  const byteCharacters = atob(fileData.data.split("base64,")[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "application/zip" });

  return { blob, filename: fileData.filename };
}

type UseFetchZipFileOptions = UseMutationOptions<
  { blob: Blob; filename: string },
  Error,
  void,
  unknown
>;

export function useFetchZipFile(options?: UseFetchZipFileOptions) {
  const fetchZipFileWrapped = async () => {
    try {
      return await fetchZipFile();
    } catch (error) {
      console.error("Error fetching zip file:", error);
      throw error;
    }
  };

  return useMutation(fetchZipFileWrapped, {
    ...options,
  });
}
