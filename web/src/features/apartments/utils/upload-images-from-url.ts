import { uploadImage } from "@/actions/upload-image";

export async function uploadImagesFromUrl(urls: string[]): Promise<string[]> {
  const imagesUrl: string[] = await Promise.all(
    urls.map(async (url) => {
      if (url.startsWith("blob")) {
        const response = await fetch(url);
        const blob = await response.blob();
        const file = new File([blob], url, {
          type: "image/png",
        });
        const imageUrl = await uploadImage(file);
        return imageUrl as string;
      } else {
        return url;
      }
    })
  );
  return imagesUrl;
}
