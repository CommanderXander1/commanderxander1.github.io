import ExpandCard from "./ExpandCard"

const Content = ({ visibleContent }) => {
    let content = null;
    if(visibleContent != null) {
        content = visibleContent.map((c, i) => {
            return (
                <ExpandCard key = {i} c={c}/>
            )
        })
    }
    

    return (
        <div className="overflow-y-auto w-1/3 h-2/3 grid grid-cols-1 auto-rows-min place-self-center absolute top-40 gap-3">
            { content }
        </div>
    )
}

export default Content