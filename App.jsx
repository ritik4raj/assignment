import React from "react";
import AddUser from "./AddUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [card, setCard] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    async function getCard() {
      const res = await fetch(" https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setCard(data);
    }
    getCard();
  }, []);
  const newArr = [];
  card.map((item) => {
    newArr.push({
      id: item.id,
      name: item.name,
      email: item.email,
      city: item.address.city,
    });
  });
  function handleClick() {
    setDisplay((prev) => !prev);
  }
  function handleDelete(id) {
    setCard((prevCards) => prevCards.filter((item) => item.id !== id));
  }

  let firstThreeCard = [];
  firstThreeCard = newArr.slice(0, 3);
  const displayThreeCard = firstThreeCard.map((item) => (
    <div className="card-container" key={item.id}>
      {firstThreeCard.length > 3 && (
        <FontAwesomeIcon
          icon={faXmark}
          className="icon"
          onClick={() => handleDelete(item.id)}
        />
      )}
      <h2>Name: {item.name}</h2>
      <h3>E-mail: {item.email}</h3>
      <h3>City: {item.city}</h3>
    </div>
  ));

  return (
    <div>
      <div>{displayThreeCard}</div>
      <button onClick={handleClick}>ADD NEW USER</button>
      {display && <AddUser />}
    </div>
  );
}
