const postData = () => {
  return fetch(
    "https://glo-academy-db-default-rtdb.firebaseio.com/goods.json",
    {
      method: "POST",
      body: JSON.stringify({
        title: "Ведьмак 3",
        price: 1500,
        sale: false,
        img: "https://cdn1.ozone.ru/multimedia/c400/1015773076.jpg",
        category: "Игры и софт",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((response) => response.json());
};


export default postData;