import { existsSync } from "fs";
import path from "path";

export default function (
  fileName: string | undefined,
  width: string | undefined,
  height: string | undefined
) {
  const result: any = {};
  if (!fileName) {
    result.error = "Invalid request. Image name was not provided";
  } else if (Number(width) < 0 || Number(height) < 0)
    result.error = "Invalid resolution provided";
  else {
    const originalPath = path.resolve(__dirname, `../assets/${fileName}.jpg`);
    const thumbnailPath = path.resolve(
      __dirname,
      `../assets/thumbnails/${fileName}_${width}x${height}.jpg`
    );

    if (!existsSync(originalPath)) {
      result.error = "Image not found";
      return result;
    }

    const isThumbnail = width && height;
    result.path = isThumbnail ? thumbnailPath : originalPath;

    if (
      (isThumbnail && existsSync(thumbnailPath)) ||
      (!isThumbnail && existsSync(originalPath))
    )
      result.isAvailable = true;

    return result;
  }
}
