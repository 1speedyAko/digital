import React from 'react'
import { TextFade } from './TextFade'

function ListHover({items}) {
  return (
    <div >
        {items && items.map((item, index)=>(
          <div className="group p-4" key={index}>
          <TextFade>
            <h2 className="cursor-pointer text-2xl border font-bold heading p-2">
              {item.text}
            </h2>
          </TextFade>
          <p className="mt-2 text-neutral-100 font-bold primary transition-all ease-out duration-400 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[100px]">
            {item.description}
          </p>
        </div>
        
        ))}
        
    </div>
  )
}

export default ListHover