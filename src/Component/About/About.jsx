import asas from '/src/assets/img/ASAS.png'

const About = () => {
    return (
        <div className="lg:bg-hero bg-gray-200 h-[600px] bg-cover bg-no-repeat bg-center">
            <div className="pt-48 lg:text-white flex flex-col justify-center items-center space-y-5">
                <h1 className="lg:text-7xl md:text-5xl text-4xl text-gray800">
                    Food App
                </h1>
                <img src={asas} className="lg:block hidden absolute lg:top-[191px] lg:right-[231px] lg:h-[22px] lg:w-[700px]" alt="" />


                <p className="lg:w-[750px] md:text-5xl px-4 text-4xl text-center font-semibold">
                    Why stay hungry when you can order from Zeke Food for little amount...
                </p>

                <span className="text-white md:px-6 md:py-2 px-2 py-1 text-[16px] sm:text-lg border border-yellow-400 bg-gray-700 hover:bg-gray-900 rounded-lg cursor-pointer">
                    Download the zeke food app from playStore now
                </span>

                <div className="lg:space-x-12 text-[20px] text-white flex md:flex-row flex-col space-y-4">
                    <button className="sm:px-6 px-9 py-1 sm:py-2 rounded-xl border bg-amber-900 ">PlayStore</button>
                    <button className="sm:px-6 px-9 py-1 sm:py-2 rounded-xl border border-amber-900 bg-white text-amber-900 lg:text-white lg:bg-transparent ">AppStore</button>
                </div>
            </div>
        </div>
    )
}

export default About