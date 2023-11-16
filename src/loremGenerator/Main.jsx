import { useState } from 'react'
import {data} from './data'
import { useEffect } from 'react';
const Main = () => {
  const [lorem,setLorem] = useState([])
  const [count, setCount] = useState();
  useEffect(() => {
    if (count == '') {
    setLorem([])
  }
  },[count])
  const generate = (e) => {
    e.preventDefault();
    const newData = data.slice(0, count);
    setLorem(newData)
  } 
  
  return (
      <>
        <div className="container text-center border w-100 md:w-1/2 mt-10 mx-auto border-blue-500 p-10 ">
              <form className="flex flex-col">
                  <h3 className="text-2xl text-center ">
                      Lorem Generator
                  </h3>
            <input value={count} onChange={(e)=>setCount(e.target.value)} className='w-100 md:w-1/2 mx-auto py-0.5 px-2 mt-3 focus:border-0 placeholder-gray-900 text-sm rounded-sm' type="number" placeholder='Enter number of lorem'/>
            <button onClick={generate} className="px-4 py-0.5 w-max block mt-5 mx-auto rounded-full text  bg-blue-400 text-sm text-white">
              Generate
            </button>
          </form> 
      </div>
      
      <div className="mt-3 border-blue-300 w-1/2 mx-auto p-3 overflow-y-scroll  container h-[300px]">
        {lorem.map((lor) => {
          return (
            <>
              <h4 className="text-1xl mb-4 text-gray-500">
                {lor}
              </h4>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Main
