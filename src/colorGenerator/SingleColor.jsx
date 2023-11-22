import React from 'react'

const SingleColor = ({rgb}) => {
    console.log(rgb)
  return (
    <>
          <div className='h-[200px] border' style={{
                background:`rgb(${rgb})`
            }}></div>
    </>
  )
}

export default SingleColor
