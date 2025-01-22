import path from "path";
import url from "url";

export function getDirname(importMetaUrl) {
  const __filename = url.fileURLToPath(importMetaUrl);
  return path.dirname(__filename);
}

export function pathToFileURL(filePath) {
  return url.pathToFileURL(filePath);
}
