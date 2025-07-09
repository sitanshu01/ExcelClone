import React, { useRef, useState } from 'react'

const SpreadSheet: React.FC = () => {
  const cols:number = 26;
  const rows :number =15;
  const [editable, setEditable] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className='h-full w-full overflow-auto'>
      <div 
        className={`grid w-max h-max text-zinc-500 relative`}
        style={{
          gridTemplateColumns: `32px repeat(${cols}, 124px)`
        }}
        >
        
        {Array.from({length: cols+1}).map((_,i)=>(
          i ===0? (
            <div key={i} className='w-[32px] h-[32px] sticky top-0 bg-zinc-100 border-[0.01rem] border-zinc-400 text-center text-2xl'>#</div>
          ):(
            <div onDoubleClick={()=>{setEditable(true)}} contentEditable= {editable} onBlur={()=>{setEditable(false)}} key={i} className='w-[124px] h-[32px] px-5 py-1 sticky top-0 bg-zinc-100 border-[0.01rem] border-zinc-400 text-center font-medium'>{String.fromCharCode(64+i)}</div>
          )
        ))}

        {Array.from({ length: rows }).map((_, row) => (
          Array.from({ length: cols +1}).map((_, col) =>
            col === 0 ? (
              <div
                key={`row-${row}`}
                className="flex sticky left-0 items-center justify-center border-[0.01rem] border-zinc-400 bg-zinc-100 text-sm font-medium"
                style={{ width: '32px', height: '32px' }}
              >
                {row + 1}
              </div>
            ) : (
              <input
                key={`${row}-${col}`}
                type="text"
                name="data"
                className=" text-black focus:border-2 focus:border-green-700 outline-none focus:shadow-md border-[0.01rem] border-zinc-400 px-2"
                style={{
                  height: '32px',
                  width: '124px'
                }}
              />
            )
          )
        ))}

      </div>

    </div>
  )
}

export default SpreadSheet
