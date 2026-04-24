import title from "../assets/title.png"
import Splash from "./Splash"

const Title = () => {
    return (
        <div className="grid overflow-visible">
            <div className="pt-[90px] place-self-center relative">
                <img className="scale-[1.6] drop-shadow-2xl sharp-image" src={title}/>
                <Splash/>
            </div>
        </div>
    )
}

export default Title