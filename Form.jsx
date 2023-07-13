import { useState } from "react"
import "./Form.css"

const intial={
    name:"",
    age:"",
    gender:"Male",
}
function Form ({editInfo,disProp})
{
    const[addInfo,setAddinfo]=useState(intial)
    const[edit,setEdit]=useState({name:"",age:"",id:""})

    function submit(e)
    {
        e.preventDefault()
        
        if(editInfo.id!=="")
        disProp({type:"update",payload:addInfo})
        else
        disProp({type:"add",payload:addInfo})
        

        setAddinfo(intial)
    }

    function handleChange(e)
    {
        setAddinfo({...addInfo,
            [e.target.name]:e.target.value})
    }
    if(editInfo.id!==edit.id)
    {
        setAddinfo(editInfo);
        setEdit(editInfo)
    }

    return (
        <>
        <form method="post">
            <input placeholder="name" name="name" type="text" value={addInfo.name} onChange={handleChange} required/>
            <input placeholder="age" name="age" type="text" value={addInfo.age} onChange={handleChange}/>
            <button onClick={submit}>{editInfo.id?"Edit":"Add"}</button>
        </form>
        </>
    )
}
export default Form