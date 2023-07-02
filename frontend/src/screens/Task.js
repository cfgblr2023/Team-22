import "./CRUD.css";
export const Task = (ele) => {
    //pasting the deltask function here wont work because we don't have acces to the state of todolist in that page

    //thus we pass the function to delete also as a prop , we can pass anything as a prop
    return (
        <div style={{background : ele.completed ? "lightgreen" : "lightblue" }}>
        <h4>{ele.taskname}</h4>
        <button style={{backgroundColor:"whitesmoke" , padding:"2%"}} onClick={()=>ele.donetask(ele.id)}>Done</button>
        <button style={{backgroundColor:"whitesmoke" , padding:"2%",marginLeft:"2%"}} class name="button2" onClick={()=>ele.deltask(ele.id)}>X</button>
        </div>
    );
}