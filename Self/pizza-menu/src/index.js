import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css'
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
function App()
{
    return <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div> 
}

function Header() {
//  const style={color:'red', fontSize:'48px',textTransform:'uppercase'}
  const style={}

  return (
    <header className="header">
        <h1 style={style}>FastFood Chain.Co.</h1>
    </header>
  )
}

function Menu(){
  return(
  <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
      {pizzaData.map((pizza)=> (
        <Pizza key={pizza.name} name={pizza.name} ingredients={pizza.ingredients} photoLink={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut}/>
      ))}
      </ul>
      
  </main>)
}
function Pizza(props){
  return <li className={`pizza ${props.soldOut?'sold-out':''}`} >
      <img src={props.photoLink} alt={props.name}/>
      <h2>{props.name}</h2>
      <p>{props.ingredients}</p>
      <span>{props.soldOut?"SOLD OUT":   props.price}</span>
  </li> 
}


function Footer(){
  const hours=new Date().getHours();
  const open=10;
  const close=22;
  const isOpen=hours>=10 && hours<=22;
  console.log(isOpen)
  // return (<footer className="footer"> {new Date().toLocaleTimeString()} We are currently open!!</footer>)
  return(
    <footer className="footer">
      {isOpen ? (
        <Order close={close}/>
        
      ):(
        <div className="order">
          <p>
          We are open between {open}:00 and {close}:00. Come visit us or order online
          </p>
        </div>
      )}
    </footer>
  )
}

function Order(props){
  const {close}=props;
  return (
    <div className="order">
          <p>
          We are open until {close}:00. Come visit us or order online
          </p>
          <button className="btn">Order</button>
        </div>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>);