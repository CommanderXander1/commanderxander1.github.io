import Page from './Page.jsx'
import about_img from "../assets/project_photos/about.png"
import coursework_img from "../assets/project_photos/coursework.png"
import achievements_img from "../assets/project_photos/achievements.png"
import work_img from "../assets/project_photos/work.png"

const content = [
        {
            title: "About me", 
            image: about_img,
            subtitle: "",
            content: 
                <>
                    <p>I'm a prospective Electrical Engineering/Computer Science student from Georgia. My interest in coding was initially sparked by Minecraft minigames that me and my friends made using the ingame code-like command system, which taught me the logic behind programming. Later, my good childhood friend introduced me to real coding languages by showing me a Javascript course that she had recently completed. After learning Javascript, I taught myself Python, Java, C, and HTML/CSS. I used these new skills to make passion projects and learn more about Computer Science! I'm mostly self taught and a lot of what I've learned has been through projects like this website.</p>
                </>
        },
        {
            title: "Achievements",
            image: achievements_img,
            subtitle: "",
            content: 
                <>
                    <ol className="list-disc list-inside">
                        <li>1st place at KSU High School Fintech Hackathon 2026</li>
                        <li>Moonshot (highest) award from Project Invent National Hackathon</li>
                    </ol>
                </>
        },
        {
            title: "Work Experience",
            image: work_img,
            subtitle: "",
            content:
                <>
                    <ol className="list-disc list-inside">
                        <li>Internship at Status70 Startup</li>
                        <li>Internship at Tilt Startup</li>
                        <li>Program sold to my High School</li>
                    </ol>
                </>
        },
        {
            title: "Relevant coursework",
            image: coursework_img,
            subtitle: "",
            content:
                <>
                    <ol className="list-disc list-inside">
                        <li>Fullstackopen web development certificate from University of Helsinki</li>
                        <li>Honors Python programming at Georgia Tech</li>
                        <li>Independent Study in Computer Science</li>
                        <li>AP Computer Science A (5)</li>
                        <li>AP Computer Science Principles (5)</li>
                        <li>AP Calculus BC (5)</li>
                        <li>AP Calculus AB (5)</li>
                        <li>AP Statistics</li>
                        <li>AP Physics C: E&M</li>
                        <li>AP Physics C: Mechanics</li>
                        <li>AP Physics 1 (5)</li>
                        <li>Advanced Robotics</li>
                    </ol>
                </>
        }
]

const About = () => {
    return <Page content={content} name={"about me"}/>
}

export default About