import React from 'react'

function OverlappingButtons({ title, style }) {
  return (
    <>
      <div style={style} className='w-[12rem] h-[3rem] p border-[1px] border-white rounded-3xl relative flex items-center justify-center'>
        <div className='w-[10rem] h-[3rem] p border-[1px] border-white rounded-3xl relative flex items-center justify-center'>
          {title}
        </div>
      </div>
    </>
  )
}

export default OverlappingButtons