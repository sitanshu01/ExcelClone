
import {  useState, type ReactElement } from 'react'
import Spreadsheet from './Components/SpreadSheet'

const App = () => {
  const [search, setSearch] = useState<string>("");

  interface Sheet{
    id: number,
    name : string,
    content: ReactElement;
  }

  const [sheets, setSheets] = useState<Sheet[]>( [
    {id: 1, name: "Sheet1", content: <Spreadsheet/>}
  ] );
  const [activeSheet, setActiveSheet] = useState<number>(1);

  const addSheet = ()=>{
    const newId= sheets.length +1;
    const newSheet: Sheet={
      id: newId,
      name : `Sheet ${newId}`,
      content : <Spreadsheet/>
    }
    setSheets((prev)=> [...prev, newSheet]);
    setActiveSheet(newSheet.id);
  }

  const searchBtn = () => {
    console.log(`searched : ${search}`);
    setSearch("");
  };

  return (
    <>
    <div className='h-screen w-full'>
      <div className='w-full h-3/15 px-5 py-2 '>
        <div className='w-full h-2/5 text-xl font-bold flex justify-between items-center border-b-[0.05rem] border-zinc-400 '>
            {sheets.find((s) => s.id === activeSheet)?.name || "Untitled"}
          <div>
            <button onClick={searchBtn} className='px-2 py-1 bg-zinc-300'>🔍︎</button>
            <input className='px-2 py-1 bg-zinc-300 outline-none' type="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} name="search" />
          </div>
        </div>
        <div className='w-full h-max  flex justify-between items-center py-2'>
          <div className='w-max h-2/5 text-base text-light flex justify-start items-center gap-5'>
            <div className='border-r-2 border-zinc-300 pr-5'>Tool Bar</div>
            <div onClick={()=>{console.log("Hide Fields Clicked")}}>Hide Fields</div>
            <div onClick={()=>{console.log("Sort Clicked")}}>Sort</div>
            <div onClick={()=>{console.log("Filter Clicked")}}>Filter</div>
            <div onClick={()=>{console.log("Filter Clicked")}}>Filter</div>
            <div onClick={()=>{console.log("Cell View Clicked")}}>Cell View</div>
          </div>
          <div className='w-max h-2/5 text-base text-medium flex justify-start items-center gap-5'>
          
            <button onClick={()=>{console.log("Import Clicked")}} className='active:scale-95 border-1 border-zinc-300 rounded-md px-2 py-1 '>Import</button>
            <button onClick={()=>{console.log("Export Clicked")}} className='active:scale-95 border-1 border-zinc-300 rounded-md px-2 py-1 '>Export</button>
            <button onClick={()=>{console.log("Share Clicked")}} className='active:scale-95 border-1 border-zinc-300 rounded-md px-2 py-1'>Share</button>
            <button onClick={()=>{console.log("New Action Clicked")}} className='active:scale-95 bg-green-800 rounded-md px-2 py-1 text-white'>New Action</button>
          </div>
        </div>
          <div className='bg-zinc-300 h-1/5 w-full'></div>


      </div>
      <div className='w-full h-11/15 '>
        {sheets.find((s)=>s.id === activeSheet)?.content};
      </div>
      <div className='w-full h-1/15 sticky bottom-0 border-[0.05rem] border-zinc-400 px-5'>
        {sheets.map((sheet)=>(
          <button key={sheet.id} onClick={()=>{setActiveSheet(sheet.id)}} className='hover:bg-green-200 hover:border-t-2 border-0 hover:border-green-800 mr-3 text-center py-2 font-medium text-lg'>{sheet.name}</button>
        ))}
        <button onClick={addSheet} className='hover:bg-green-200 hover:border-t-2 border-0 hover:border-green-800 mr-3 text-center py-2 font-medium text-xl w-10'>✚</button>
      </div>
    </div>
    </>
    
  )
}

export default App
