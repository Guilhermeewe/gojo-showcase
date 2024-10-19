import MainText from "./MainText";
import Image from "next/image";
import About from "./About";
import GojoA from '../../images/GojoA.jpg'
import GojoB from '../../images/GojoB.webp'

function Main() {
    return (
        <>
            <main className="h-screen">
                <div className="w-full h-[570px] absolute flex justify-center backdrop-brightness-75 shadow-xl">
                    <Image src={GojoA}
                        alt="Sukuna Background"
                        quality={80}
                        placeholder="blur"
                        className="rounded-full opacity-90 drop-shadow-2xl "
                    />
                </div>
                <MainText />
                <div className="h-full backdrop-brightness-75 flex justify-center">
                    <aside className="p-5 m-5 flex items-center rounded-full shadow-2xl">
                        <Image src={GojoB} alt="GojoB" quality={100} className="opacity-80"></Image>
                    </aside>
                    <About />
                </div>
            </main>
        </>
    );
}

export default Main;