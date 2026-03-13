const splashes = [
    "Programmer!",
    "Designer!",
    "Creator!",
    "Developer!",
    "Engineer!",
    "Maker!",
    "Inventor!"
]

const Splash = () => {
    const current_splash = splashes[Math.floor(Math.random() * splashes.length)]
    return <p className="text-yellow-300 text-6xl outlined-text drop-shadow-lg pop absolute left-240 bottom-5 rotate-340 text-shadow-md"> {current_splash} </p>
}

export default Splash