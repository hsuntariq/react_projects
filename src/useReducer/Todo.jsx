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
      dispatch({ type:'EMPTY'})
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
    </>
  )
}

export default Todo
