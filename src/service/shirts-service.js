const basicApiShirt = "https://localhost:44333/api/Shirts";

export const shirtsCallApi = async () => {
  try {
    return await fetch(basicApiShirt)
      .then((respond) => respond.json())
      .catch(() => console.log("error"));
  } catch {
    console.log("error");
  }
};
