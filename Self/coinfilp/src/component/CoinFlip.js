import Coin from "./Coin"
import {useState} from 'react'
function CoinFlip() {
    const defaultProps = { 
        coins: [ 
            // Sides of the coin 
            { 
                side: 'head',  
                imgSrc: 
'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'
            }, 
            { 
                side: 'tail',  
                imgSrc: 
'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
            } 
        ] 
    } 
    const [coin,setCoin]=useState(0)
    const handleClick=()=>{
        let randomVal=Math.round(Math.random()*2);
        console.log(randomVal);
        setCoin(randomVal);
    }
    return (
        <div>
            <Coin img={defaultProps.coins[coin]?.imgSrc}/>
            <button onClick={handleClick}>Flip the coin</button>
        </div>
    )
}

export default CoinFlip
