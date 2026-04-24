import Button from './Button'
import SmallButton from './SmallButton'

const Buttons = () => {
    return (
        <div className="grid pb-8">
            <div className='place-self-center pt-35 relative'>
                <Button text="About me" redirect="about"/>
                <Button text="Skills" redirect="skills"/>
                <Button text="Projects" redirect="projects"/>
            </div>
            <div className='grid grid-cols-2 relative mt-23 place-self-center'>
                    <SmallButton text="Contact" redirect="contact"/>
                    <SmallButton text="More" redirect="more"/>
            </div>
        </div>
    )
}

export default Buttons