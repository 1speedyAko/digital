import React from 'react'

function ListHover({items}) {
  return (
    <div >
        {items && items.map((item, index)=>(
          <div className="group p-4" key={index}>
            <h2 className="cursor-pointer text-2xl font-bold heading" >
                {item.text}
            </h2>
            <p className="hidden group-hover:block mt-2 text-neutral-100 font-bold primary" >
               {item.description}
            </p>
          </div> 
        ))}
        
    </div>
  )
}

export default ListHover