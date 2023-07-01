/*
import propTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

  return (
    <button onClick={onClick}
            style={{backgroundColor: color}}
           className='btn'>
           {text}
           </button>
  )
}
Button.defalutProps = {
    color: 'blue'
}
Button.propTypes = {
    text: propTypes.string, 
    color: propTypes.string,
    onClick: propTypes.func,
}

export default Button
*/

//todo again



import PropTypes from 'prop-types'
const Button = ({ color, text, onClick}) => {
  
  return (
     <button 
     onClick={onClick} 
     style={{backgroundColor: color}}
     className='btn'>
      {text}
      </button>   
    
  )
}
Button.defaultProps = {
  color: 'steelblue'
}
Button.PropTypes = {
  color:PropTypes.string,
  text: PropTypes.string,
  onclick: PropTypes.func,
}

export default Button

