import Form from "./components/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Listt from "./components/Listt";
import allInfo from "./components/data";
import { useReducer, useState } from "react";

function App() {

    
  const[editInfo,setEditinfo]=useState({name:"",age:"",id:""});


  function reducerFun(crudInfo,action)
  {
    switch(action.type)
    {
      case"add":
       return[...crudInfo,
      {...action.payload,id:crudInfo.length+101}]
      
      case "delete":
        return crudInfo.filter(del=>del.id!=action.payload)

        case "update":
           const index=crudInfo.findIndex(u=>u.id==action.payload.id)
           const newInfo=[...crudInfo]
           newInfo.splice(index,1,action.payload)
           setEditinfo({name:"",age:"",id:""})
           return newInfo;
        default:
        console.log("default")
    }
  }
const [crudInfo,dispatch]=useReducer(reducerFun ,allInfo)
    function editCrud(editId)
  {
    setEditinfo(crudInfo.find(ed=>ed.id==editId))
  }
  
  return (
    <>
    <Form disProp={dispatch} editInfo={editInfo} ></Form>
    <Listt  disProp={dispatch} editCrud={editCrud} crudAr={crudInfo}></Listt>
    </>
  )
}

export default App
