import { useState } from "react"

const Header = ({ content, setVisibleContent, name }) => {
    const [search, updateSearch] = useState("")

    return (
        <div className="dirt-bg top-0 border-gray-500 border-b-3 w-full p-8 text-white flex justify-center">
            <input 
                className="text-2xl p-2 pl-23 pr-23 text-center bg-black border-2 border-gray-400" 
                type="text"
                value={search} 
                onChange={(e) => {
                    updateSearch(e.target.value)
                    setVisibleContent(content.filter(c => {return c.title.toLowerCase().includes(e.target.value.toLowerCase())}))
                }}
                placeholder={ "Search " + name }>
            </input>
        </div>
    )
}

export default Header