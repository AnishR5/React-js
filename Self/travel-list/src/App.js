import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {

  const [items,setItems]=useState([])

  return (
    <div className="App">
      <Logo/>
      <Form/>
      <PackagingList/>
      <Stats/>
    </div>
  );
}

function Logo(){
  return(
    <h1>🛅Far Away💼</h1>
  )
}

function Form(){
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const [description,setDescription]=useState('')
  const [quantity,setQuantity]=useState(5)
  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your trip</h3>
    <select value={quantity} onChange={(e)=>{setQuantity(Number(e.target.value))}}>
      {Array.from({length:20},(_,i)=>i+1).map(num=><option value={num} key={num}>{num}</option>)}
    </select>
    <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}></input>
    <button>Add</button>
  </form>
}

function PackagingList(){
  return <div className="list"> 
  <ul>
  {initialItems.map((item)=>(<Item item={item} key={item.id}/>))}
  </ul>
  </div>
}

function Item({item,id}){
  return <li>
    <span style={item.packed?{textDecoration:'line-through'}:{}}>
    {item.quantity}  {item.description}
    </span>
    <button>🧩</button>
    </li>
}

function Stats(){
  return <footer className="stats">
    You have x items on your list, and you have packed x(x%)
  </footer>
}