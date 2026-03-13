const Button = ({ text, redirect }) => {
    return (
        <a className="sharp-image mc-button-bg bg-no-repeat bg-contain bg-center text-white text-shadow-black text-shadow-md flex text-6xl pl-100 pr-100 pt-5 pb-5 mt-3 justify-center" href={redirect}>
            { text }
        </a>
    )
}

export default Button