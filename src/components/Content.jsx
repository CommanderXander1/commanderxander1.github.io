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
        <div className="min-h-1/2 flex justify-center pt-2 pb-2 px-4">
            <div className="no-scrollbar overflow-y-auto w-full max-w-xl grid grid-cols-1 auto-rows-min gap-3 max-h-[70vh]">
                {content}
            </div>
        </div>
    )
}

export default Content