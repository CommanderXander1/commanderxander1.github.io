import SmallFooterButton from "./SmallFooterButton"
import FooterButton from "./FooterButton"

const Footer = () => {
    return (
        <div className="sharp-image dirt-bg absolute bottom-0 border-gray-500 border-t-3 w-full p-3">
            <div className="relative grid grid-cols-4 w-1/2 place-self-center gap-1">
                <FooterButton text="Home" redirect="/"/>
                <FooterButton text="About" redirect="/about"/>
                <SmallFooterButton text="Skills" redirect="/skills"/>
                <SmallFooterButton text="Projects" redirect="/projects"/>
                <SmallFooterButton text="Contact" redirect="/contact"/>
                <SmallFooterButton text="Credits" redirect="/credits"/>
            </div>
        </div>
    )
}

export default Footer