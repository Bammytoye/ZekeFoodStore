import foodEveryone from '/src/assets/img/foodeveryone.png'

const Start = () => {
    return (
        <div className="h-80vh">
            <div className="flex flex-col items-center">
                <div>
                    <img src={foodEveryone} alt="" className="w-[200px] sm:w-[300px] md:w-[400px] border-gray-700 border-b-2"/>
                </div>

                <div className="pt-10 text-gray-900 text-xl sm:text-2xl md:text-4xl ">
                    <p>How the app works</p>
                </div>
            </div>
        </div>
    )
}

export default Start