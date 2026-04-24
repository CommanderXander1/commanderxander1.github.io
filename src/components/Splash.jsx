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
    return (
    <p className="absolute left-[98%] top-[80%] text-yellow-300 text-6xl outlined-text drop-shadow-lg pop rotate-[340deg] text-shadow-md">
        {current_splash}
    </p>
)
}

export default Splash