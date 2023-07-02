import { useState } from "react";
import "./CRUD.css";
import { Task } from "./Task";
import Navbar3 from "./Navbar3";
const CRUD = () =>{
    const [todoList,settodoList] = useState([]);
    const [newtask,setnewtask]=useState("");
    const handlechange = (event)=>{
        setnewtask(event.target.value);
    };
    const addtask = () =>{
        const task = {
            id: todoList.length==0 ? 1 : todoList[todoList.length-1].id+1,
            taskname: newtask,
            completed:false,
        }
        //can't just do arr.push
        //const newtodolist=[...todoList,newtask]
        // this will make a new array which is equal to todolist and the newtask element
        settodoList([...todoList,task]);
    }
    const deltask = (id)=>{
        const newtodolist=todoList.filter((task)=>{
            return task.id != id
        })
        //to delete we need filter function where for the elements we need to keep will return true and the elements we don't false
        settodoList(newtodolist)

        // settodoList(todoList.filter((task)=> task!=tas ))
        
        // this does the same thing in one line
    }
    const donetask = (id)=>{
        const newtodolist=todoList.map((task)=>{
            if(task.id==id){
                return {...task,completed:true};
            }
            else{
                return task;
            }
        })
        settodoList(newtodolist)
    }
    return (
        <>
        <Navbar3></Navbar3>
        <div className="Main">
             Events :-
            <div className="addtask">
                <input className="myinput" onChange={handlechange}></input>
                <button className="button1" onClick={addtask}>Add Event</button>
            </div>
            <div className="list">
                {/* {newtask} */}
                {todoList.map((ele)=>{
                    return (
                        <Task taskname={ele.taskname} id={ele.id} deltask={deltask}
                        donetask={donetask}
                        completed={ele.completed}></Task>
                    );
                })}
            </div>
        </div>
        </>
    );
}
export default CRUD;