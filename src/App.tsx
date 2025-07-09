
import { useState } from 'react'
import Spreadsheet from './Components/SpreadSheet'

const App = () => {
  const [name,setName] =useState("Untitled Spreadsheet");
  return (
    <>
    <div className='h-screen w-full'>
      <div className='w-full h-3/15 px-5 py-2 '>
        <div className='w-full h-2/5 flex justify-between items-center border-b-[0.05rem] border-zinc-400 '>
          <div className='text-xl font-bold'><input className='focus:outline-1 px-2' type="text" value={name} onChange={(e)=>{setName(e.target.name)}}/></div>
          <div>
            <button className='px-2 py-1 bg-zinc-300'>🔍︎</button>
            <input className='px-2 py-1 bg-zinc-300 outline-none' type="search" name="" />
          </div>
        </div>
        <div className='w-full h-max  flex justify-between items-center py-2'>
          <div className='w-max h-2/5 text-base text-light flex justify-start items-center gap-5'>
            <div className='border-r-2 border-zinc-300 pr-5'>Tool Bar</div>
            <div >Hide Fields</div>
            <div>Sort</div>
            <div>Filter</div>
            <div>Filter</div>
            <div>Cell View</div>
          </div>
          <div className='w-max h-2/5 text-base text-medium flex justify-start items-center gap-5'>
            <button className='border-1 active:scale-95 border-zinc-300 rounded-md px-2 py-1'>Import</button>
            <button className='border-1 active:scale-95 border-zinc-300 rounded-md px-2 py-1'>Export</button>
            <button className='border-1 active:scale-95 border-zinc-300 rounded-md px-2 py-1'>Share</button>
            <button className='active:scale-95 bg-green-800 rounded-md px-2 py-1 text-white'>New Action</button>
          </div>
        </div>
          <div className='bg-zinc-300 h-1/5 w-full'></div>


      </div>
      <div className='w-full h-11/15 '>
        <Spreadsheet/>
      </div>
      <div className='w-full h-1/15 sticky bottom-0 border-[0.05rem] border-zinc-400 px-5'>
        <button className='hover:bg-green-200 hover:border-t-2 border-0 hover:border-green-800 mr-3 text-center py-2 font-medium text-lg'>Sheet 1</button>
        <button className='hover:bg-green-200 hover:border-t-2 border-0 hover:border-green-800 mr-3 text-center py-2 font-medium text-lg'>Sheet 2</button>
        <button className='hover:bg-green-200 hover:border-t-2 border-0 hover:border-green-800 mr-3 text-center py-2 font-medium text-xl w-10'>✚</button>
      </div>
    </div>
    </>
    
  )
}

export default App
