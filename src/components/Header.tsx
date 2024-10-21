import Logo from '../../public/images/Logo.png'
import Image from "next/image";

function Header() {
    return (
        <div className="
        h-20
        relative flex items-center justify-between
        shadow-2xl
        text-black animate-fade-down animate-delay-500
        ">
            <div className="flex">
                <Image
                    src={Logo}
                    alt="Logo"
                    className='h-16'
                    layout='responsive'
                    loading="lazy" />

            </div>
            <span className='p-10'>WIP</span>
        </div>
    );
}

export default Header;