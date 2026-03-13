const SmallFooterButton = ({ text, redirect }) => {
    return (
        <a href={redirect} className="sharp-image w-full mc-small-button-bg bg-no-repeat bg-contain bg-center text-white text-shadow-black text-shadow-md pl-30 pr-30 pt-5 pb-5 text-3xl flex items-center justify-center">
            {text}
        </a>
    )
}

export default SmallFooterButton