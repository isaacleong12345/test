import { useState } from "react";

function ListGroup() {
  const items = [
    { name: "Banana", calories: 105 },
    { name: "Cherry", calories: 50 },
    { name: "Donut", calories: 195 },
    { name: "Apple", calories: 95 },
  ];

  const [selectedIndex, setselectedIndex] = useState(-1);

  items.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order
  //items.sort((a, b) => b.name.localeCompare(a.name)); Reverse alphabetical order
  // items.sort((a, b) => a.calories - b.calories); // Ascending order based on calories
  //items.sort((a, b) => b.calories - a.calories); // Descending order based on calories

  return (
    <>
      <h1> List </h1>
      {items.length === 0 && <p> No items found </p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item.name}
            onClick={() => {
              setselectedIndex(index);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            <b>
              {item.name}: &nbsp; {item.calories}
            </b>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
