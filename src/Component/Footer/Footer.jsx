import { FaXTwitter, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-gray-100 px-5 sm:px-8 md:px-16 lg:px-32">
            <div className="flex justify-between items-center">
                <div className="">
                    <img src="/src/assets/img/zeke logo.png" alt="Zeke Food App Logo" className="w-[30px] sm:w-[50px] md:w-[90px] pt-3" />
                </div>

                <div className="flex sm:space-x-2 md:space-x-12">
                    <a href="#" className="hover:text-yellow-600"><FaXTwitter /></a>
                    <a href="#" className="hover:text-yellow-600"><FaFacebookF /></a>
                    <a href="#" className="hover:text-yellow-600"><FaInstagram /></a>
                    <a href="#" className="hover:text-yellow-600"><FaWhatsapp /></a>
                </div>

                <div>
                    <a href="#" className="cursor-pointer text-[9px] sm:text-[12px] md:text-[16px]">bamigbalatoyese@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer