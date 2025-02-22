"use client"
import React,{useState} from 'react'
import { TextFade } from './TextFade'
import ListHover from './ListHover'


  
  
  
function Faqs({title="FAQS", faqs=[]}) {
  return (
    <div className='mt-0 theme '>
        {/* <TextFade direction='up' staggerChildren={0.4}> */}
        <TextFade>              
            <h2 className='text-4xl font-bold text-center heading pt-2'>{title}</h2>                   
        </TextFade>
        
        <div className>
            <ListHover items={faqs} />
        </div>
        {/* </TextFade> */}
    </div>
  )
}

export default Faqs