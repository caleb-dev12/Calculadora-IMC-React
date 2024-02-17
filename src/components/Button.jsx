import './Button.css'

// irá receber um id e um text
const Button = ({ id, text, action }) => {
    // informo que irá receber uma props(action) e acessa o evento dela
    const handleAction = (e) => {
        action(e);
    }

  return <button id={id} onClick={handleAction} >{text}</button>
}

export default Button