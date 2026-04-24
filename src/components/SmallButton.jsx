const SmallButton = ({ text, redirect, pos }) => {
    return (
            <a href={redirect} className="sharp-image mc-small-button-bg bg-no-repeat bg-contain bg-center text-white text-shadow-black text-shadow-md text-6xl pr-30 pl-30 pt-5 pb-5 place-self-center">
                {text}
            </a>
    )
}

export default SmallButton