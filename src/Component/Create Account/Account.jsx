
const Account = () => {
    return (
        <div className="sm:px-24 md:px-32 px-5 h-[640px] bg-gray-100">
            <div className="flex items-center">
                <div>
                    <img src="/src/assets/img/login food.png" alt="" className="hidden md:block w-[550px]" />
                </div>
                <div className="pt-32 flex flex-col space-y-3 sm:w-[450px]">
                    <h2 className="text-red-700 text-2xl sm:text-3xl font-bold">Create an account</h2>
                    <h2 className="text-2xl sm:text-4xl">Create/Login to an existing account to get started</h2>
                    <p className="sm:text-2xl text-gray-600">An account is created with your email and your desired password</p>
                </div>
            </div>
        </div>
    )
}

export default Account