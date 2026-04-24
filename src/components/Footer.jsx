import SmallFooterButton from "./SmallFooterButton"
import FooterButton from "./FooterButton"

const Footer = () => {
    return (
        <div className="sharp-image dirt-bg mt-auto border-gray-500 border-t-3 w-full p-3 grid">
            <div className="relative grid grid-cols-4 max-w-xl w-full mx-auto gap-1">
                <FooterButton text="Home" redirect="/"/>
                <FooterButton text="About" redirect="/about"/>
                <SmallFooterButton text="Skills" redirect="/skills"/>
                <SmallFooterButton text="Projects" redirect="/projects"/>
                <SmallFooterButton text="Contact" redirect="/contact"/>
                <SmallFooterButton text="More" redirect="/more"/>
            </div>
        </div>
    )
}

export default Footer