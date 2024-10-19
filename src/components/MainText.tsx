import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function MainText() {
    return (
        <>
            <div className="flex justify-center items-center h-[570px] relative">
                <h1>
                    <TypewriterEffectSmooth words={[{
                        text: 'Satoru Gojo',
                        className: 'dark:text-sky-500'
                    }]} />
                </h1>
            </div>
        </>
    );
}

export default MainText;