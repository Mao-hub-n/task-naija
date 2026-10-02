function Buttons({ children, onClick, type = "button", className = ""}){
    return(
        <button
        type = {type}
        onClick={onClick}
        className={`cus-buttons ${className}`}>
            <span>{children}</span>
        </button>
    );
}
export default Buttons