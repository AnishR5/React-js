function SelectPercentage({bill,friend,tip,children}) {
    const handleChange=(event)=>{
            tip(event.target.value*bill*0.01)
    }
    return (
        <div>
            {children}
            <select onChange={handleChange}>
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutly amazing (20%)</option>
            </select>
        </div>
    )
}

export default SelectPercentage
