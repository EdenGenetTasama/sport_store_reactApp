const basicURL = "https://localhost:44333/api/";

export const GetShoesDetails = async () => {
  try {
    return await fetch(`${basicURL}Shoes`)
      .then((res) => res.json())
      .catch((error) => console.log(error));
        } 
  catch {
    console.log("error");
  }
};
