import React from 'react'

const Home = () => {
  
  return (
    <div>
        <div className=' p-8 justify-center text-center'>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Welcome to The Magic Morph <span className='text-gray-500 text-sm'>...a place to create imaginary things</span></h1>
        </div>

        <div>
          <div className='flex justify-center p-10 gap-8 '>
              <img src="/mg1.jpg" alt="stecth" className='w-[300px] h-[250px] rounded shadow-lg border transition-transform duration-500 ease-in-out hover:scale-110' />
               <img src="/mg2.jpg" alt="stecth" className='w-[300px] h-[250px] rounded shadow-lg border transition-transform duration-500 ease-in-out hover:scale-110' />
                <img src="/mg3.jpeg" alt="stecth" className='w-[300px] h-[250px] rounded shadow-lg border transition-transform duration-500 ease-in-out hover:scale-110'/>
          </div>
        </div>

        <div className='mt-10 justify-center text-center'>
          <h2 className='justify-center text-2xl font-bold bg-gradient-to-b'>lets draw something new</h2>
        </div>

       
          <button className='color-shower w-10  items-center justify-center text-center p-2 mr-5'>get Started</button>
        

    </div>
  )
}

export default Home