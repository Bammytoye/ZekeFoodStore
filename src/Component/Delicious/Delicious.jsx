import delicious from '/src/assets/img/delicious.png'

const Delicious = () => {
    return (
        <div className="px-5 sm:px-24 md:px-32 h-[640px] bg-gray-100">
            <div className="flex items-center justify-evenly">
                <div className="flex flex-col space-y-3 sm:w-[450px]">
                    <h2 className="text-red-700 text-xl sm:text-3xl font-bold">Explore Varieties</h2>
                    <h2 className="text-2xl sm:text-4xl">Shop for your favorites meal as e dey hot</h2>
                    <p className="sm:text-2xl text-gray-600">Shop for your favorites meals or drinks sand enjoy while doing it</p>
                </div>
                
                <div className="hidden md:block">
                    <img src={delicious} alt="" className="w-[550px]" />
                </div>
            </div>
        </div>
    )
}

export default Delicious