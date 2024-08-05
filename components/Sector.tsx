import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Sector = () => {
    const sectors = ['Web3', 'Crypto', 'AI', 'SaaS', 'Fintech', 'Healthcare', 'Entertainment', 'Fitness', 'Education',
        'E-Commerce', 'Travel', 'Business', 'Productivity', 'Music', 'Social']
    return (
        <div className='w-[60%] mx-auto flex justify-center py-10'>
            <div>
                <h1 className='text-center text-lg'>We're working with startups & companies from many industries</h1>

                {/* Sectors list */}
                <div className='max-w-2xl mx-auto flex flex-wrap gap-2 justify-center mt-5'>
                    {sectors.map((tag, index) => (
                        <h5 key={index} className='bg-[#F8F8F8] text-gray-600 px-2 py-1 text-sm rounded-full'>{tag}</h5>
                    ))}
                </div>

                <div className='grid grid-cols-2 gap-4 my-16'>
                    <div>
                        <p>"What I love most about this service is the consistency in quality and the ability to surprise us with creative solutions. Vladimir become an essential part of our business growth"</p>
                        <div className='flex items-center gap-4 my-3'>
                            <Image width={50} height={50} src={'https://framerusercontent.com/images/UgXDVHFFnm8qUaWFbTIf4kSto.png'} alt='Noah Patel' />
                            <div>
                                <h4>Noah Patel</h4>
                                <p className='text-sm text-gray-600'>Gymmy, Co-Founder</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-4 justify-center mt-10'>
                            <button className='bg-[#29433D] text-white px-4 py-2 rounded-md capitalize'>Subscribe $4,000/m</button>
                            <button className='bg-secondary text-black px-4 py-2 rounded-md capitalize flex gap-2 items-center'>Book a Call <ArrowUpRight size={20} /></button>
                        </div>

                    </div>
                </div>
                <div className='my-16'>
                    <hr />
                </div>

            </div>
        </div>
    )
}

export default Sector