"use server";

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "nawy-preset");
  formData.append("api_key", "323689518331889");

  const options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  };

  return fetch(
    `https://api.cloudinary.com/v1_1/djheoe8dm/image/upload`,
    options
  )
    .then((res) => res.json())
    .then((data) => data.secure_url)
    .catch((e) => {
      console.log("Upload Image Error: ", e);
    });
}
