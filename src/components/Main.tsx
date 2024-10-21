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
            <main className="h-screen animate-fade-right animate-delay-[1500ms]">
                <div className="w-full h-[570px] absolute flex justify-center shadow-2xl bg-opacity-0">
                    <Image src={GojoA}
                        alt="Sukuna Background"
                        quality={80}
                        placeholder="blur"
                        className="rounded-full opacity-100 drop-shadow-2xl"
                    />
                </div>
                <MainText />
                <div className="h-full flex justify-center shadow-2xl bg-slate-100">
                    <aside className="p-5 m-5 flex items-center rounded-full shadow-2xl">
                        <Image src={GojoB} alt="GojoB" layout="responsive" quality={100}></Image>
                    </aside>
                    <About />
                </div>
                <div className="h-full flex flex-row-reverse justify-center shadow-2xl ">
                    <aside className="p-5 m-5 flex items-center">
                        <Image src={GojoC} alt="GojoB" quality={100} height={990} className="rounded-full shadow-2xl"></Image>
                    </aside>
                    <About />
                </div>

                <div className="h-full flex flex-row-reverse justify-center  ">
                    <div className="p-5 m-5">
                        <CapesGallery />
                    </div>

                </div>
            </main>
        </>
    );
}

export default Main;