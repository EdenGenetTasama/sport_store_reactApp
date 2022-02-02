const pantsUrl = "https://localhost:44333/api/Pants";

export const GetPantsApi = async () => {
  try {
    return await fetch(pantsUrl)
      .then((respond) => respond.json())
      .catch((error) => console.log(error));
  } catch {
    console.log("error");
  }
};
