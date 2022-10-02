const Button = ({text}) => {
    return <button className="button">{text}</button>
}

Button.defaultProps = {
    text: "Button"
}

export default Button