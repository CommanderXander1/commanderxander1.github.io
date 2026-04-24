import Page from "./Page"
import Project from "./Project"
import python from "../assets/icons/python.png"
import stock_trader_icon from "../assets/project_photos/stock_trader/icon.png"
import maymester_icon from "../assets/project_photos/maymester/icon.png"
import matchmaker_icon from "../assets/project_photos/matchmaker/icon.png"
import fundraiser_icon from "../assets/project_photos/fundraiser/icon.png"
import mcp_client_icon from "../assets/project_photos/mcp-client/icon.png"
import jni_client_icon from "../assets/project_photos/jni-client/icon.png"

const content = [
        {
            title: "Stock trader",
            image: stock_trader_icon,
            subtitle: "LSTM Neural Network for stock analysis and future prediction",
            content: <Project content={{images: [python], team: ["Me"], languages: ["Python"], frameworks: ["Tensorflow", "Keras", "Scikit-learn", "Pandas", "YFinance"], info: "description", link: "https://github.com/CommanderXander1/stock-trader"}}/>
        },
        {
            title: "Maymester course registration site",
            image: maymester_icon,
            subtitle: "Live course registration website for my school's Maymester curriculum",
            content: <Project content={{images: [python], team: ["Me", "Avy Agrawal", "Avi Goldschmidt"], languages: ["Python", "Javascript", "HTML", "CSS", "SQL"], frameworks: ["Flask", "Docker"], info: "description", link: "https://github.com/WARAvy/WAMaymester"}}/>
        },
        {
            title: "Valentine's Day matchmaker survey",
            image: matchmaker_icon,
            subtitle: "Website for my school that matches students for Valentine's Day",
            content: <Project content={{images: [python], team: ["Me", "Avy Agrawal", "Avi Goldschmidt"], languages: ["Python", "Javascript", "HTML", "CSS"], frameworks: ["Flask", "Docker", "Pandas"], info: "description", link: "https://github.com/WARAvy/WAMatchmaker"}}/>
        },
        {
            title: "Fundraiser management site",
            image: fundraiser_icon,
            subtitle: "Website to help my school's faculty manage fundraisers and keep track of payment and rewards",
            content: <Project content={{images: [python], team: ["Me", "Avy Agrawal"], languages: ["Python", "Javascript", "HTML", "CSS", "SQL"], frameworks: ["Flask", "Docker"], info: "description", link: "https://github.com/qwertyuioopzxcvbnm/WAFundraising"}}/>
        },
        {
            title: "Minecraft MCP client",
            image: mcp_client_icon,
            subtitle: "Custom version of Minecraft made with Minecraft Coder Pack",
            content: <Project content={{images: [python], team: ["Me"], languages: ["Java"], frameworks: ["MCP"], info: "description", link: "https://github.com/CommanderXander1/minecraft-mcp-client"}}/>
        },
        {
            title: "Injectable Minecraft JNI client",
            image: jni_client_icon,
            subtitle: "DLL file Minecraft modification made with Java Native Interface",
            content: <Project content={{images: [python], team: ["Me"], languages: ["C++"], frameworks: ["JNI"], info: "description", link: "https://github.com/CommanderXander1/minecraft-jni-client"}}/>
        },
]

const Projects = () => {
    return (
        <Page content={content}/>
    )
}

export default Projects