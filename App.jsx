import Form from "./components/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Listt from "./components/Listt";
import allInfo from "./components/data";
import { useState } from "react";

function App() {

  const[crudInfo,setCrudinfo]=useState(allInfo)
  const[editInfo,setEditinfo]=useState({name:"",age:"",id:""});

  function addCrud(info)
  {
    console.log(info)
    setCrudinfo([...crudInfo,
      {...info,id:crudInfo.length+101}])
  }
  function delCrud(delId)
  {
    setCrudinfo(crudInfo.filter(del=>del.id!=delId))
  }
  function editCrud(editId)
  {
    setEditinfo(crudInfo.find(ed=>ed.id==editId))
  }
  function updateCrud(updId)
  {
    const index=crudInfo.findIndex(u=>u.id==updId.id)
  const newInfo=[...crudInfo]
  newInfo.splice(index,1,updId)
  setCrudinfo(newInfo)
  setEditinfo({name:"",age:"",id:""})
  }
  return (
    <>
    <Form addCrud={addCrud} editInfo={editInfo} updateCrud={updateCrud}></Form>
    <Listt crudInfo={crudInfo} delCrud={delCrud} editCrud={editCrud}></Listt>
    </>
  )
}

export default App
