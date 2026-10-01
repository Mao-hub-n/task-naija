function Button({ children, onClick, type = "button", className = ""}){
    return(
        <button
        type = {type}
        onClick={onClick}
        className={`custom-button ${className}`}>
            <span>{children}</span>
        </button>
    );
}
export default Button