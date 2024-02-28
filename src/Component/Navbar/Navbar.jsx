import { useState } from "react"
import close from '/src/assets/close menu.png'
import menu from '/src/assets/menu-60.png'


const Navbar = () => {
    const [toggle, setToggle] =useState(false)
    const handleClick = () => setToggle(!toggle)


    return (
        <div className="fixed w-full bg-gray-100 border-b h-15 sm:px-8 md:px-16 lg:px-32 px-5 shadow-lg z-50">
            <div className="flex justify-between items-center lg:max-w-[1020px]">
                <div className="flex items-center cursor-pointer justify-center">
                    <img src="/src/assets/img/zeke logo.png" alt="Zeke Food App Logo" className="w-[90px] pt-3"/>
                </div>

                <div className="hidden md:flex">
                    <ul className="flex items-center space-x-12 text-lg cursor-pointer">
                        <li>
                            <a href="#" className='hover:border-b-2 hover:border-yellow-300'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='hover:border-b-2 hover:border-yellow-300'>Product</a>
                        </li>
                        <li>
                            <a href="#" className='hover:border-b-2 hover:border-yellow-300'>FaQ</a>
                        </li>
                        <li>
                            <a href="#" className='hover:border-b-2 hover:border-yellow-300'>Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="sm:block md:hidden" onClick={handleClick}>
                    <img src={toggle?close:menu} alt="" className="w-[30px]"/>
                </div>
            </div>

            <div className={toggle? 'w-full flex justify-center items-center md:hidden cursor-pointer':'hidden'}>
                <ul>
                    <li className="p-2">
                        <a href="#" className='hover:border-b-2 hover:border-yellow-300'>Home</a>
                    </li>
                    <li className="p-2">
                        <a href="#" className='hover:border-b-2 hover:border-yellow-300'>Product</a>
                    </li>
                    <li className="p-2">
                        <a href="#" className='hover:border-b-2 hover:border-yellow-300'>FaQ</a>
                    </li>
                    <li className="p-2">
                        <a href="#" className='hover:border-b-2 hover:border-yellow-300'>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div> 
    )
}

export default Navbar