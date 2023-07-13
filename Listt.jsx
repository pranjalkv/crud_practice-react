import "./Listt.css";

function Listt({crudAr,disProp,editCrud})
{
    function deleter(e)
    {
        disProp({type:"delete",payload:e.target.id})
        console.log(crudInfo)
    }
    function editor(e)
    {
       editCrud(e.target.id)
    }
    return(
        <section id="students">
        {crudAr.map((ele,i)=><div id={ele.id} key={i}>
        <h1>{ele.name}</h1>
        <p>UID:{ele.id}</p>
        <p>Age:{ele.age}</p>
        <p>Gender:{ele.gender}</p>
        <p>Human</p>
        <button onClick={deleter} id={ele.id}>Remove</button>
        <button onClick={editor} id={ele.id}>Edit</button>
        </div>)}
        </section>
    )
} 
export default Listt;
