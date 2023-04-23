import '../../assets/styles/Field.css'
const Field=({label_name,input_type,placeholder})=>{
    const invalue = (e) => {
        console.log(e.target.value)
    }
    return(
        <div className="field"  onChange={(e)=>invalue(e)}>
        <label className="label">{label_name}</label>
        <div className="control">
            <input className="input" type={input_type} placeholder={placeholder} />
        </div>
    </div>
    )
}

export default Field