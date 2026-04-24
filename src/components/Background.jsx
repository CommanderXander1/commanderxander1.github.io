import background from '../assets/background.mp4'

const Background = () => {
    return (
        // darken background
        <div className="fixed inset-0 -z-10">
            <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover">
                <source src={background} type="video/mp4" />
            </video>

        <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
    )
}

export default Background