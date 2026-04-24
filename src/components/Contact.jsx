import Page from "./Page"
import email from "../assets/project_photos/email.png"
import github from "../assets/project_photos/github.png"


const content = [
        {
            title: "Email", 
            image: email,
            subtitle: <a className="underline decoration-blue-700 underline-offset-3" href="mailto:xanderdshotz@gmail.com">xanderdshotz@gmail.com</a>
        },
        {
            title: "Github",
            image: github,
            subtitle: <a className="underline decoration-blue-700 underline-offset-3" href="https://github.com/CommanderXander1">https://github.com/CommanderXander1</a>
        }
]

const Contact = () => {
    return (
        <Page content={content} name={"contact"}/>
    )
}

export default Contact