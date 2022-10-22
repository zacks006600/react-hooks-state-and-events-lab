import React, { useState } from "react";
import Item from "./Item";
function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(items)
  const onSelect = (e) => {

    let newData = items.filter(({ category }) => category == e)
    setSelectedCategory(newData)

  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={e => onSelect(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items" id="m">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;