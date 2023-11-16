import React from 'react'

const SingleTodo = ({todo}) => {
  return (
    <div className='my-2 bg-purple-600 p-4 rounded-2xl m-auto'>
        <h1>
            {todo}
        </h1>
    </div>
  )
}

export default SingleTodo
