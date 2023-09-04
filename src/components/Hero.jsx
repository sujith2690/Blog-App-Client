import React from 'react'

const Hero = () => {

    const randomImageURL = 'https://picsum.photos/1920/1080';
    return (
        <>

            <div className='max-w-[1640px] mx-auto'>
                <div className='max-h-[500px] relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/10 flex flex-col justify-center'>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' style={{ WebkitTextStroke: '2px black' }}>The <span className='text-yellow-400'>Blogs</span></h1>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' style={{ WebkitTextStroke: '2px black' }}>
                            <span className='text-yellow-400'>That</span> You Need...
                        </h1>
                    </div>
                    <img className='w-full max-h-[500px] object-cover'
                        src={randomImageURL} />
                </div>
            </div>
        </>
    )
}

export default Hero