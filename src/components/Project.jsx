import SlideShow from "./SlideShow"

const Project = ({ content }) => {
    return (
        <div>
            <SlideShow images={ content.images }/>
            <br></br>
            <h1 className="text-2xl">Team</h1>
            <ol className="list-disc list-inside">
                { content.team.map((c, i) => <li key={i}>{c}</li>) }
            </ol>

            <br></br>
            <h1 className="text-2xl">Languages</h1>
            <ol className="list-disc list-inside">
                { content.languages.map((c, i) => <li key={i}>{c}</li>) }
            </ol>

            <br></br>
            <h1 className="text-2xl">Frameworks</h1>
            <ol className="list-disc list-inside">
                { content.frameworks.map((c, i) => <li key={i}>{c}</li>) }
            </ol>
            
            <br></br>
            <h1 className="text-2xl">Info</h1>
            <p>{ content.info }</p>
            <br></br>
            <a className="underline decoration-blue-700 underline-offset-3 " href={ content.link }>Github</a>

        </div>
    )
} 

export default Project