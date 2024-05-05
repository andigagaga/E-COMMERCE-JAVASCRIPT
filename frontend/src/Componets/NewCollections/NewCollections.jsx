import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./NewCollections.css";

export default function NewCollections() {
  const [new_collections, setNew_Collections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((res) => res.json())
      .then((data) => setNew_Collections(data));
  }, []);

  return (
    <div className="new-collections">
      <h2>NEW COLLECTIONS</h2>
      <hr />
      <div className="collections">
        {new_collections.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}
