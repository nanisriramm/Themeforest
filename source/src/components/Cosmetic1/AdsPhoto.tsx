import React from 'react'
import Image from 'next/image'

const AdsPhoto = () => {
    return (
        <>
            <div className="ads-photo-block md:pt-[60px] pt-8">
                <div className="main-content grid md:grid-cols-2 xl:h-[440px] md:h-[260px]">
                    <div className="before relative h-full">
                        <Image
                            src={'/images/banner/960x440.png'}
                            width={2000}
                            height={1000}
                            alt='before'
                            className='w-full h-full object-cover'
                        />
                        <div className="tag absolute top-5 left-5 heading5 px-6 py-3 rounded-[30px] bg-surface2 text-white">Before</div>
                    </div>
                    <div className="after relative h-full">
                        <Image
                            src={'/images/banner/960x440.png'}
                            width={2000}
                            height={1000}
                            alt='after'
                            className='w-full h-full object-cover'
                        />
                        <div className="tag absolute top-5 right-5 heading5 px-6 py-3 rounded-[30px] bg-surface2 text-white">After</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdsPhoto