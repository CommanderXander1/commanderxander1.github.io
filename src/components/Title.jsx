import title from "../assets/title.png"
import Splash from "./Splash"

const Title = () => {
    return (
        <div className="place-self-center pt-35 relative">
            <img className="scale-140 drop-shadow-2xl sharp-image" src={title}/>
            <Splash/>
        </div>
    )
}

export default Title