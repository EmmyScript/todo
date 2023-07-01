/*
import PropTypes from 'prop-types'
import Button from './button'

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='Header'>
        <h1>{title}</h1>


       <Button color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'close' : 'Add'} onClick ={onAdd}/>
    </header>
  )
}
Header.defaultProps = {
    title: ' task tracker'
}

Header.PropTypes = {
    title: PropTypes.string.isRequired,
}


export default Header

*/

// again todo


import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {
//const onClick = ()=>{
 // console.log('click')
//}



  return (
    <header className='Header'>
      <h1>{title}</h1>
      <Button  color= {showAdd ? 'red' : 'green'} text = {showAdd ? 'close' : 'add'} onClick={onAdd} />
    </header>
  )
} 
Header.defaultProps = {
  title: 'my task tracker'
}
Header.PropTypes = {
  title: PropTypes.string.isRequired,
}
export default Header