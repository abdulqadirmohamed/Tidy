'use client'
import { ArrowUpRight, RefreshCcw } from 'lucide-react'
import React from 'react'
import logo1 from '../public/img/logo-1.png'
import logo2 from '../public/img/logo-2.png'
import logo3 from '../public/img/logo-3.png'
import logo4 from '../public/img/logo-4.png'
import logo5 from '../public/img/logo-5.png'
import Image from 'next/image'




const HomePage = () => {
    const logos = [
        { id: 1, logo: logo1 },
        { id: 2, logo: logo2 },
        { id: 3, logo: logo3 },
        { id: 4, logo: logo4 },
        { id: 5, logo: logo5 },

    ]
    return (
        <div className='bg-primary'>
            <div className='min-h-[500px] flex justify-center items-center text-center'>
                <div>
                    <div className='w-fit mx-auto text-white flex gap-2 items-center justify-center px-4 py-2 border-[1px] border-[#29433D] rounded-full'>
                        <RefreshCcw size={15} />
                        <h5 className='text-sm'>Subscription. Pause or cancel anytime</h5>
                    </div>
                    <div className='my-4 text-white'>
                        <h1 className='max-w-3xl text-[60px] leading-[65px] font-bold'>Product design partner in growing your business</h1>
                        <p className='text-gray mt-5'>Partnering with world-class designers and take your project to the next level.</p>
                    </div>
                    <div className='flex gap-4 justify-center mt-10'>
                        <button className='bg-[#29433D] text-white px-4 py-2 rounded-md capitalize'>Subscribe $4,000/m</button>
                        <button className='bg-secondary text-black px-4 py-2 rounded-md capitalize flex gap-2 items-center'>Book a Call <ArrowUpRight size={20} /></button>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <h4 className='text-[#29433D] text-center'>Awesome companies we've helped</h4>
                <div className=''>
                    <div className="w-full inline-flex flex-nowrap ">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            {logos.map((item) => (
                                <li className='grayscale'>
                                    <Image width={100} src={item.logo} alt="Facebook" />
                                </li>
                            ))}
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {logos.map((item) => (
                                <li>
                                    <Image width={100} src={item.logo} alt="Facebook" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage