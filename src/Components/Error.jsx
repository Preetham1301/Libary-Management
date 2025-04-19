import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate ()

  return (
    <>
        <div className='flex justify-center mt-3 '>
        <button onClick={() => navigate("/BrowserBooks")} className=' rounded-full font-bold text-white hover:scale-95 transition-all duration-100  px-5 py-4 border-fuchsia-900 font-sans bg-orange-400 hover:bg-orange-600 '>Go Back </button>
        </div>
       <div className="flex flex-col justify-center items-center h-[100vh]">
           
            <h1 className="text-5xl font-bold text-white animate-pulse transition-all duration-300">Error Page not Found, 404</h1>
           
          </div>
    </>
  )
}

export default Error