import ItemData from "./ItemData";
import Card from './Card';
import { useState } from "react";
import './itemfilter.css';

const ItemFilter = () => {
  // const [items, setItems] = useState(ItemData);
  const items = [...ItemData];
  const [category, setCategory] = useState("all");
  const handleClick = (cat: string) => {
    setCategory(cat);
  };

  return (
    <>
      <header>
        <h1>Our Menu</h1>
        <article className="filter-options">
          <button
            className="category-all"
            onClick={() => {
              handleClick("all");
            }}
          >
            All
          </button>
          <button
            className="category-breakfast"
            onClick={() => {
              handleClick("breakfast");
            }}
          >
            Breakfast
          </button>
          <button
            className="category-lunch"
            onClick={() => {
              handleClick("lunch");
            }}
          >
            Lunch
          </button>
          <button
            className="category-shakes"
            onClick={() => {
              handleClick("shakes");
            }}
          >
            Shakes
          </button>
        </article>
      </header>
      <main>
        <section className="items-container">
          {items.map((item)=> (
            category === 'all' ?
            (<Card {...item} key={item.id}/>):
            (item.category === category && <Card {...item} key={item.id}/>)
          ))}
        </section>
      </main>
    </>
  );
};

export default ItemFilter;
