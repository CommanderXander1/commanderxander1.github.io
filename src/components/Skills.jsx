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
        },
        { 
            title: "Languages", 
            subtitle: "Programming languages I am experienced in", 
            content: 
                <>
                    <h1 className="text-2xl">Fluent</h1>
                    <ol className="list-disc list-inside">
                        <li>Python</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>HTML/CSS</li>
                        <li>SQL</li>
                    </ol>
                    <h1 className="text-2xl">Learning</h1>
                    <ol className="list-disc list-inside">
                        <li>C</li>
                        <li>C++</li>
                    </ol>
                </>
        },
        { 
            title: "Frameworks",
            subtitle: "Programming frameworks I am experienced in", 
            content:
            <>
                <h1 className="text-2xl">Python</h1>
                <ol className="list-disc list-inside">
                    <li>Flask (websites)</li>
                    <li>Tensorflow/Keras (machine learning)</li>
                    <li>Scikit-learn (machine learning)</li>
                </ol>
                
                <h1 className="text-2xl">Javascript</h1>
                <ol className="list-disc list-inside">
                    <li>React (websites)</li>
                    <li>React Native (native mobile OS development)</li>
                </ol>

                <h1 className="text-2xl">Java</h1>
                <ol className="list-disc list-inside">
                    <li>WPILib for FRC/FTC</li>
                </ol>

                <h1 className="text-2xl">C++</h1>
                <ol className="list-disc list-inside">
                    <li>Arduino</li>
                </ol>
            </>
        },
]

const Skills = () => {
    return (
        <Page content={content}/>
    )
}

export default Skills