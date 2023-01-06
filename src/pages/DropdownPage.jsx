import React, {useState} from 'react';
import Dropdown from '../components/Dropdown';


const DropdownPage = () => {
  const options = [
    {
      label: 'Red',
      value: 'red'
    },
    {
      label: 'Green',
      value: 'green'
    },
    {
      label: 'Blue',
      value: 'blue'
    }
  ]

  const [selection, setSelection] = useState(null)

  const handleSelection = (option) => {
    setSelection(option)
  }

  return (
    <div className='flex'>      
        <Dropdown 
          value = {selection}
          onChange = {handleSelection}
          options = {options}
        />
    </div>
  )
}
 
export default DropdownPage;
