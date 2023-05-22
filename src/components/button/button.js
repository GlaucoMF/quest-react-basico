import React from "react";
import './button.css';

const sayHello = () => {
    alert('A label desse botão é clique aqui para baixar CV')
}

class Button extends React.Component {
    render() {
        return <button className="btn" onClick={sayHello}>{this.props.label}</button>
    }
}

export default Button