import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Content from "./Content"

const Page = ({ content, name }) => {
    const [visibleContent, setVisibleContent] = useState(content)
    return (
        <div className="endstone-bg sharp-image min-h-screen flex flex-col">
            <Header content={content} setVisibleContent={setVisibleContent} name={name}/>
            <Content visibleContent={visibleContent}/>
            <Footer/>
        </div>
    )
}

export default Page