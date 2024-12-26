import React from 'react'

const items = [
    {text:'  Custom Web Design', description:'This is about custom web design'},
    {text:' Custom Web Redesign', description:'This is about custom web redesign'},
    {text:'ecommerce web design', description:'this is about ecommerce webdesign'}
]

function ListHover() {
  return (
    <div >
        {items.map((item, index)=>(
          <div className="group p-4">
            <h2 className="cursor-pointer text-2xl font-bold" key={index}>
                {item.text}
            </h2>
            <p className="hidden group-hover:block mt-2 text-neutral-100 font-bold">
               {item.description}
            </p>
          </div> 
        ))}
        
    </div>
  )
}

export default ListHover