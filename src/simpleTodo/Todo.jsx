import { useState } from "react";
import SingleTodo from "./SingleTodo";

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo('');
    }
  return (
    <>
          <div className="container w-3/4 mx-auto mt-5 text-center md:w-1/2 border-orange-700 bg-purple-700 text-white p-4 rounded-3xl font-bold underline-offset">
              <h2 className="text-5xl my-4">
                  Todo
              </h2>
              <form>
                  <div className="text-left bg-purple-300 text-black p-3 shadow flex flex-col rounded-lg">
                    <label htmlFor="">Todo</label>
                      <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="Enter Todo..." className="text-dark p-[0.2rem] rounded 900" />
                      <button onClick={addTodo} className="bg-purple-700 text-white w-1/2 block m-auto rounded-full my-4 600 px-4 py-1">
                          Enter
                      </button>
                  </div>
              </form>
          </div> 
          <div className="w-100 h-[200px] overflow-y-scroll  p-10 md:w-3/4  m-auto my-3 border-purple-500 shadow-lg bg-purple-950">
            <h4 className="text-center text-3xl">
                Your Todos
            </h4>
              {todos.map((todo,index) => {
                  return <SingleTodo key={index} todo={todo}/>
              })} 
          </div>
    </>
  )
}

export default Todo
