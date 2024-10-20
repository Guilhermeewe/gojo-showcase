import MainText from "./MainText";
import Image from "next/image";
import About from "./About";
import GojoA from '../../public/images/GojoA.jpg'
import GojoB from '../../public/images/GojoB.webp'
import GojoC from '../../public/images/GojoC.png'
import CapesGallery from "./CapesGallery";

function Main() {
    return (
        <>
            <main className="h-screen">
                <div className="w-full h-[570px] absolute flex justify-center backdrop-brightness-75 shadow-xl">
                    <Image src={GojoA}
                        alt="Sukuna Background"
                        quality={80}
                        placeholder="blur"
                        className="rounded-full opacity-90 drop-shadow-2xl"
                    />
                </div>
                <MainText />
                <div className="h-full backdrop-brightness-75 flex justify-center shadow-2xl">
                    <aside className="p-5 m-5 flex items-center rounded-full shadow-2xl animate-fadeinup">
                        <Image src={GojoB} alt="GojoB" layout="responsive" quality={100} className="opacity-80"></Image>
                    </aside>
                    <About />
                </div>
                <div className="h-full backdrop-brightness-75 flex flex-row-reverse justify-center shadow-2xl ">
                    <aside className="p-5 m-5 flex items-center">
                        <Image src={GojoC} alt="GojoB" quality={100} height={990} className="opacity-90 rounded-full shadow-2xl"></Image>
                    </aside>
                    <About />
                </div>

                <div className="h-full backdrop-brightness-75 flex flex-row-reverse justify-center  ">
                    <div className="p-5 m-5">
                        <CapesGallery />
                    </div>

                </div>
            </main>
        </>
    );
}

export default Main;