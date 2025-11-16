const getData = () => {
  return fetch(
    "https://glo-academy-db-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => response.json());
};

export default getData;
