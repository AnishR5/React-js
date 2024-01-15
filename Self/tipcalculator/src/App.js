import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BillInput from './Components/BillInput';
import SelectPercentage from './Components/SelectPercentage';
import Output from './Components/Output';

function App() {
  const [bill,setBill]=useState(0);
  const [tip1,setTip1]=useState(0);
  const [tip2,setTip2]=useState(0);
  const [finalBill,setFinalBill]=useState(0);

  const handleReset=()=>{
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  useEffect(()=>{
    let fBill=bill+(tip1+tip2)/2;
    setFinalBill(fBill)
  },[bill,tip1,tip2])
  return (
    <div className="App">
        <BillInput bill={bill} setBill={setBill}/>
        <SelectPercentage bill={bill} friend={'f1'} tip={setTip1}>
            <span>How did you like the service?</span>
        </SelectPercentage>
        <SelectPercentage bill={bill} friend={'f2'} tip={setTip2}>
          <span>How did your friend like the service?</span>
        </SelectPercentage>
        <Output finalBill={finalBill} bill={bill} totalTip={tip1+tip2}/>
        <div><button onClick={handleReset}>Reset</button></div>
    </div>
  );
}

export default App;
