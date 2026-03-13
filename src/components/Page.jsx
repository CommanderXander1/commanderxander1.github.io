import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Content from "./Content"
import img from '../assets/unpacked.png'

const Page = ({ content }) => {
    const [visibleContent, setVisibleContent] = useState(content)
    return (
        <div className="endstone-bg sharp-image">
            <Header content={content} setVisibleContent={setVisibleContent}/>
            <Content visibleContent={visibleContent}/>
            <Footer/>
        </div>
    )
}

export default Page