function BillInput({bill,setBill}) {
    return (
        <div>
            <span>How much was the Bill? </span>
            <span><input type="text" placeholder="Enter Bill" onChange={(e)=>setBill(Number(e.target.value))}/></span>
        </div>
    )
}

export default BillInput
