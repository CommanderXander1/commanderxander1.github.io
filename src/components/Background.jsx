import background from '../assets/background.mp4'

const Background = () => {
    return (
        // darken background
        <div className='absolute inset-0 bg-black/35'>
            <video autoPlay muted loop id="background">
                <source src={background} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
        
    )
}

export default Background