import React from 'react'

export default function Error() {
  return (
    <div className='flex items-center justify-center w-[100%] h-[70vh]'>
        <div className="center flex flex-col items-center gap-[20px]">
            <img src="err.png" alt="" width='100' />
           <span className='md:text-[30px] text-[20px] font-[700] text-[red]'> Page Not Found </span>
        </div>
    </div>
  )
}
