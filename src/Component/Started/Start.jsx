import foodEveryone from '/src/assets/img/foodeveryone.png'

const Start = () => {
    return (
        <div className="h-80vh bg-gray-100">
            <div className="flex flex-col items-center">
                <div>
                    <img src={foodEveryone} alt="" className="w-[200px] sm:w-[300px] md:w-[400px] border-gray-700 border-b-2"/>
                </div>

                <div className="pt=10 md:pt-20 text-gray-900 text-xl sm:text-2xl md:text-4xl pb-7 lg:pb-4">
                    <p>How the app works</p>
                </div>
            </div>
        </div>
    )
}

export default Start