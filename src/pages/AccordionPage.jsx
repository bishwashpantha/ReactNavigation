import React from 'react';
import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a front end javascript framework'
    },
    {
      title: 'Why use React?',
      content: 'React is a favorite javascript framework among engineers'
    },
    {
      title: 'How do you use React?',
      content: 'We use React by creating components'
    },
  
  ]

  return (
    <Accordion items = {items}/>
  )
}
 
export default AccordionPage;
