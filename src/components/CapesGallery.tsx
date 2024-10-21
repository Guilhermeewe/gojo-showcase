import Image from "next/image";

const images = [
    { src: '/images/capas/Capa1.webp', alt: '' },
    { src: '/images/capas/Capa3.webp', alt: '' },
    { src: '/images/capas/Capa4.webp', alt: '' },
    { src: '/images/capas/Capa5.webp', alt: '' },
    { src: '/images/capas/Capa6.webp', alt: '' },
    { src: '/images/capas/Capa7.webp', alt: '' },
    { src: '/images/capas/Capa8.webp', alt: '' },
    { src: '/images/capas/Capa2.webp', alt: '' },
    { src: '/images/capas/Capa9.webp', alt: '' },
    { src: '/images/capas/Capa10.webp', alt: '' },
    { src: '/images/capas/Capa11.webp', alt: '' },
    { src: '/images/capas/Capa12.webp', alt: '' },
    { src: '/images/capas/Capa13.webp', alt: '' },
];

function CapesGallery() {
    return (
        <>
            <h2 className="flex justify-center text-7xl text-sky-900 font-bold">Album Covers</h2>
            <div className="flex flex-wrap justify-center gap-5 p-10 m-5 shadow-2xl rounded-2xl bg-gradient-to-r from-slate-300 to-gray-300">
                {images.map((image, index) => (
                    <div key={index} className="m-4">
                        <Image
                            src={image.src}
                            alt={image.alt + 1}
                            width={150}
                            height={150}
                            quality={100}
                            className="rounded-t-2xl hover:scale-150 duration-500 rounded-b-2xl shadow-2xl"
                        />
                    </div>
                ))}
            </div>

        </>
    );
}

export default CapesGallery;