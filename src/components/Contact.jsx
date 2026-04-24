import Page from "./Page"

const content = [
        {
            title: "Email", 
            image: null,
            subtitle: "xanderdshotz@gmail.com",
        },
        {
            title: "Github",
            image: null,
            subtitle: ""
        }
]

const Contact = () => {
    return (
        <Page content={content}/>
    )
}

export default Contact