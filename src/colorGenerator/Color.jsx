import React, { useState } from 'react'
import Values from 'values.js';
import SingleColor from './SingleColor';
const Color = () => {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [data,setData] = useState([])
    const generateColor = (e) => {
        e.preventDefault();
        try {
            const colors = new Values(color).all(10)
            setData(colors)
            console.log(colors)
        } catch (error) {
            setError(true)
        }
    }
  return (
    <>
          <div className="container border p-4 w-1/2 m-auto bg-pink-700 text-white">
              <form>
                  <h1 className="text-center text-3xl">
                      Color
                  </h1>
                  <input type="text" className='text-black w-full focus:border-amber-400 focus:outline-none focus:p-3 rounded my-3' value={color} onChange={(e) => setColor(e.target.value)} />
                  <button onClick={generateColor} className='block w-full btn bg-pink-500 '>
                      Generate
                  </button>
              </form>
          </div>
          <div className="container m-auto mt-4 p-6">
          <div className="grid grid-cols-5 gap-4">

              {data.map((color,index) => {
                  return <SingleColor key={index} {...color} />
              })}
              </div>
              </div>
    </>
  )
}

export default Color
