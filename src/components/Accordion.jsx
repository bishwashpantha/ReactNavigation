import React, { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({items}) =>{
    const [activeIndex, setActiveIndex] = useState(-1)

    const handleClick = (nextIndex) => {
        setActiveIndex((currentActiveIndex) => {
            if (currentActiveIndex === nextIndex){
                return -1;
            }
            else{
                return nextIndex;
            }
        })
    }

    const renderedItems = items.map((item,index)=>{
        const isExpanded = index === activeIndex;

        const icon = <span className='text-xl'>
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return <React.Fragment key={item.title}>
            <div>
                    <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={()=> handleClick(index)}>                       
                        {item.title}
                        {icon}
                    </div>
                    {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        </React.Fragment>
    })

  return (
    <div className='border-x border-t rounded'>
        {renderedItems}
    </div>
  )
}

export default Accordion;