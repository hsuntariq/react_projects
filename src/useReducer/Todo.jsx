import {useReducer, useState} from 'react'

const Todo = () => {
    const [name,setName] = useState('');
    // define the reducer
    const reducer = (state,action) => {
      // console.log(state,action)
      if (action.type === 'EMPTY') {
        return {
          ...state,
          message: 'please add a todo',
          alert:true
        }
      }
      if (action.type === 'RESET') {
        return {
          ...state,
          alert: false,
          message:''
        }
      }

      if (action.type === 'ADD_TODO') {
        return {
          ...state,
          alert: true,
          message: 'Todo added successfully',
          todos: [...state.todos,action.payload]
        }
      }

      return state;
    }
    // define initial State
    const initialState = {
      todos:[],
      message: '',
      alert:false,
    }

    
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleClick = (e) => {
      e.preventDefault();
      if (!name) { 
        dispatch({ type:'EMPTY'})
      } else {
        dispatch({ type: 'ADD_TODO', payload: name });
      }
      setTimeout(() => {
        dispatch({type:'RESET'})
      }, 3000);
    }
  return (
    <>
        <form className='border md:w-1/2 m-auto p-3'>
          {state.alert && <p className='text-green-500 fw-bolder text-center'>{state.message}</p>}
        <h1 className='text-3xl text-center'>UseReducer Todo</h1>
            <label>Todo</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} type='text' className='w-full rounded-full block p-2' placeholder='Todo...'/>
            <button onClick={handleClick} className='w-1/2 m-auto block rounded font-bold my-2 bg-blue-500 p-2'>
                Add Todo
            </button>
        </form>
      {state.todos.map((todo,index) => {
        return <h1 key={index}>{todo}</h1>
        })}
    </>
  )
}

export default Todo
