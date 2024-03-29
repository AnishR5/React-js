import { useEffect, useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem=(id)=>{
    setItems((items)=>
    items.map((item)=>
    item.id===id?{...item, packed: !item.packed}
    :item))
  }

  const clearAllItems=()=>{
    const confirm=window.confirm("Are you sure you want to delete all items")
    if(confirm)
    setItems([])
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackagingList items={items} onDeleteItem={handleDeleteItem} packItem={handleToggleItem} clearAllItems={clearAllItems}/>
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🛅Far Away💼</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackagingList({ items, onDeleteItem,packItem,clearAllItems }) {

  const [sortBy,setSortBy]=useState('input')
  let sortedItems;

  if(sortBy==='input') sortedItems=items;

  if(sortBy==='description') sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description));

  if(sortBy==='packed') sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} packItem={packItem}/>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed items</option>
        </select>
        <button onClick={clearAllItems}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, key, onDeleteItem,packItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={()=>{packItem(item.id)}} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        🧩
      </button>
    </li>
  );
}

function Stats({items}) {
  if(!items.length)
  return(
    <p className="stats">
      <em>Start adding items into your packing list</em>
    </p>
)
  const numItems=items.length;
  const numPacked=items.filter((item)=> item.packed).length
  const percentage=(Math.round((numPacked/numItems)*100))
  return (
    <footer className="stats">
      <em>
      {percentage===100? "You got everything packed" :
      `
      You have ${numItems} items on your list, and you have packed ${numPacked}(${percentage}%)`
  }
      </em>
    </footer>
  );
}
