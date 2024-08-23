'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import Product from '../Product/Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation'

interface Props {
    data: Array<ProductType>;
}

const LookBook: React.FC<Props> = ({ data }) => {
    const router = useRouter()

    const handleDetailProduct = (productId: string) => {
        // redirect to shop with category selected
        router.push(`/product/default?id=${productId}`);
    };

    // Truy cập thông tin của sản phẩm thứ 38 trong mảng data
    const productMain = data[38];


    return (
        <>
            <div className="lookbook bg-surface xl:h-[780px] lg:h-[600px] md:h-[500px] relative">
                <div className="container h-full">
                    <div className="left hide-product-sold  md:w-1/2 py-10 h-full flex flex-col items-center justify-center">
                        <div className="heading3 md:pb-10 pb-5">The Summer Look book</div>
                        <div className="w-1/2">
                            {data.slice(38, 39).map((product, index) => (
                                <Product key={index} data={product} type='grid' />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right list-img h-full md:w-1/2 md:absolute top-0 right-0 bottom-0">
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                        }}
                        className='h-full relative dots-white'
                    >
                        <SwiperSlide>
                            <div className="item h-full">
                                <Image
                                    src={'/images/banner/945x780.png'}
                                    width={2000}
                                    height={1000}
                                    alt='/images/banner/15.png'
                                    className='h-full w-full object-cover'
                                />
                                <div className="dots absolute top-[40%] left-[60%] cursor-pointer">
                                    <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct(productMain.id)}>
                                        <div className="text-title name">{productMain.name}</div>
                                        <div className="price text-center">${productMain.price}.00</div>
                                    </div>
                                </div>
                                <div className="dots bottom-dot absolute bottom-[13%] left-[54%] cursor-pointer">
                                    <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct(productMain.id)}>
                                        <div className="text-title name">{productMain.name}</div>
                                        <div className="price text-center">${productMain.price}.00</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item h-full">
                                <Image
                                    src={'/images/banner/945x780.png'}
                                    width={2000}
                                    height={1000}
                                    alt='/images/banner/16.png'
                                    className='h-full w-full object-cover'
                                />
                                <div className="dots absolute top-[38%] left-[45%] cursor-pointer">
                                    <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct(productMain.id)}>
                                        <div className="text-title name">{productMain.name}</div>
                                        <div className="price text-center">${productMain.price}.00</div>
                                    </div>
                                </div>
                                <div className="dots bottom-dot absolute bottom-[10%] left-[20%] cursor-pointer">
                                    <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct(productMain.id)}>
                                        <div className="text-title name">{productMain.name}</div>
                                        <div className="price text-center">${productMain.price}.00</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item h-full">
                                <Image
                                    src={'/images/banner/945x780.png'}
                                    width={2000}
                                    height={1000}
                                    alt='/images/banner/17.png'
                                    className='h-full w-full object-cover'
                                />
                                <div className="dots absolute top-[42%] left-[50%] cursor-pointer">
                                    <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct(productMain.id)}>
                                        <div className="text-title name">{productMain.name}</div>
                                        <div className="price text-center">${productMain.price}.00</div>
                                    </div>
                                </div>
                                <div className="dots bottom-dot absolute bottom-[12%] left-[62%] cursor-pointer">
                                    <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct(productMain.id)}>
                                        <div className="text-title name">{productMain.name}</div>
                                        <div className="price text-center">${productMain.price}.00</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default LookBook