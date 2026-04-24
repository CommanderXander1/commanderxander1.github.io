import Page from "./Page"
import Skill from "./Skill"
import skillsets from "../assets/icons/skillsets.png"
import languages from "../assets/icons/languages.png"
import frameworks from "../assets/icons/frameworks.png"

const content = [
        {
            title: "Skillsets", 
            image: skillsets,
            subtitle: "General programming skillsets", 
            content: 
                <>
                    <Skill content={{title: "Web development", list: ["Backend", "Frontend", "Databases"]}}/>
                    <Skill content={{title: "Machine learning", list: ["Neural networks", "Regression"]}}/>
                    <Skill content={{title: "Scripting and app development", list: ["Data management", "Web scraping", "Automation", "GUIs and user experience"]}}/>
                    <Skill content={{title: "Integrated systems", list: ["Arduino", "FRC", "Raspberry PI"]}}/>
                </>
        },
        { 
            title: "Languages", 
            image: languages,
            subtitle: "Programming languages I am experienced in", 
            content: 
                <>
                    <Skill content={{title: "Fluent", list: ["Python", "Java", "Javascript", "HTML/CSS", "SQL"]}}/>
                    <Skill content={{title: "Learning", list: ["C", "C++"]}}/>
                </>
        },
        { 
            title: "Frameworks",
            image: frameworks,
            subtitle: "Programming frameworks I am experienced in", 
            content:
            <>
                <Skill content={{title: "Python", list: ["Flask", "Tensorflow", "Keras", "Scikit-learn"]}}/>
                <Skill content={{title: "Javascript", list: ["React", "React Native"]}}/>
                <Skill content={{title: "Java", list: ["WPILib", "MCP"]}}/>
                <Skill content={{title: "C++", list: ["Arduino", "JNI"]}}/>
            </>
        },
]

const Skills = () => {
    return (
        <Page content={content}/>
    )
}

export default Skills