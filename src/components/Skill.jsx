const Skill = ({ content }) => {
    return (
        <div>
            <br></br>
            <h1 className="text-2xl">{ content.title }</h1>
            <ol className="list-disc list-inside">
                { content.list.map((s, i) => <li key={i}>{s}</li>) }
            </ol>
        </div>
    )
}

export default Skill