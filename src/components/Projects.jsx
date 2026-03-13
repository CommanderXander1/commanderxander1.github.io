import Page from "./Page"

const content = [
        {
            title: "Skillsets", 
            subtitle: "General programming skillsets", 
            content: 
                <>
                    <h1 className="text-2xl">Web development</h1>
                    <ol className="list-disc list-inside">
                        <li>Backend</li>
                        <li>Frontend</li>
                        <li>Databases</li>
                    </ol>

                    <h1 className="text-2xl">Machine Learning</h1>
                    <ol className="list-disc list-inside">
                        <li>Neural networks</li>
                        <li>Regression</li>
                    </ol>

                    <h1 className="text-2xl">Scripting and app development</h1>
                    <ol className="list-disc list-inside">
                        <li>Data management</li>
                        <li>Web scraping</li>
                        <li>Automation</li>
                        <li>GUIs and user experience</li>
                    </ol>

                    <h1 className="text-2xl">Integrated systems</h1>
                    <ol className="list-disc list-inside">
                        <li>FRC</li>
                        <li>Arduino</li>
                        <li>Raspberry PI</li>
                    </ol>
                </>
        }
]

const Projects = () => {
    return (
        <Page content={content}/>
    )
}

export default Projects