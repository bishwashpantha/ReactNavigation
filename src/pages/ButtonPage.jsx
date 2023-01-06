import Button from '../components/Button'
import {GoBell} from 'react-icons/go'

const ButtonPage = () => {
  const onClickHandle = () => { }

  return (
    <div>
      <div>
        <Button className = 'mb-5' primary rounded onClick = {onClickHandle}><GoBell/> Click </Button>
      </div>
      <div>
        <Button secondary outline>Me</Button>
      </div>
      <div>
        <Button warning>Boy</Button>
      </div>
      <div>
        <Button success>Ok</Button>
      </div>
      <div>
        <Button danger outline rounded>Tata</Button>
      </div>
    </div>
  )
} 

export default ButtonPage;
