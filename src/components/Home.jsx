import Background from './Background'
import Title from './Title'
import Buttons from './Buttons'

const Home = () => {
    return (
        <>
            <Background/>
            <div className="flex flex-col items-center justify-center">
                <div className="origin-top mx-auto md:scale-80 sm:scale-70 scale-90">
                    <Title/>
                    <Buttons/>
                </div>
            </div>
        </>
    )
}

export default Home