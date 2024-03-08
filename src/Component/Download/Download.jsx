
const Download = () => {
    return (
        <div className="lg:bg-download bg-gray-200 h-[450px] bg-cover bg-no-repeat bg-center mt-96 sm:mt-80 md:mt-96 lg:mt-56">
            <div className="pt-32 lg:text-white flex flex-col justify-center mx-auto items-center space-y-5">
                <h1 className="text-2xl sm:text-4xl ">
                    Download the app now
                </h1>

                <p className="md:w-[750px] text-2xl sm:text-3xl text-center">
                    Available on your favorite store. Start your premium experience now!!!
                </p>
                
                <div className="space-x-12">
                    <button className="sm:px-6 px-2 py-1 sm:py-2 rounded-xl border bg-pink-600 hover:bg-transparent hover:border-pink-700">PlayStore</button>
                    <button className="sm:px-6 px-2 py-1 sm:py-2 rounded-xl border bg-yellow-600 hover:bg-transparent hover:border-yellow-700">AppStore</button>
                </div>
            </div>
        </div>
    )
}

export default Download