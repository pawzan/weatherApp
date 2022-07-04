const getLocalFavorite = () => {
  let list = localStorage.getItem("myData");

  if (list) {
    return JSON.parse(localStorage.getItem("myData"));
  } else {
    return [];
  }
};

export default getLocalFavorite;
