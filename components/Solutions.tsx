import React from 'react'
import mvp_design from '../public/img/MVP_Design.png'
import Product_Redesign from '../public/img/Product_Redesign.png'
import Image from 'next/image'
const Solutions = () => {
    return (
        <div className='w-[60%] mx-auto flex justify-center py-10'>
            <div>
                <div className='text-center my-10'>
                    <h1 className='text-2xl font-bold my-3'>Solutions</h1>
                    <p className='max-w-2xl mx-auto'>We help you to design your first MVP to get funding, redesign your product to improve metrics, get a remote designer to grow faster or design a single time project.</p>
                </div>
                <div className='grid grid-cols-12 gap-6'>
                    <div className='bg-[#F8F8F8] col-span-6 p-4 rounded-md text-center'>
                        <h1 className='font-bold my-3'>MVP Design</h1>
                        <p className='text-gray'>Create a digital product, attract investors and new clients.</p>
                        <Image src={mvp_design} alt="MVP Design" width={400} />
                    </div>
                    <div className='bg-[#F8F8F8] col-span-6 p-4 rounded-md text-center'>
                        <h1 className='font-bold my-3'>Product Redesign</h1>
                        <p className='text-gray'>Get a fresh look, improved user experience, or enhanced functionality</p>
                        <Image src={Product_Redesign} alt="Product Redesign" width={400} />
                    </div>
                    <div className='bg-[#F8F8F8] col-span-4 p-4 rounded-md text-center'>
                        <h1 className='font-bold my-3'>Product Redesign</h1>
                        <p className='text-gray'>Get a fresh look, improved user experience, or enhanced functionality</p>
                        <Image src={Product_Redesign} alt="Product Redesign" width={400} />
                    </div>
                    <div className='bg-[#F8F8F8] col-span-4 p-4 rounded-md text-center'>
                        <h1 className='font-bold my-3'>Product Redesign</h1>
                        <p className='text-gray'>Get a fresh look, improved user experience, or enhanced functionality</p>
                        <Image src={Product_Redesign} alt="Product Redesign" width={400} />
                    </div>
                    <div className='bg-[#F8F8F8] col-span-4 p-4 rounded-md text-center'>
                        <h1 className='font-bold my-3'>Product Redesign</h1>
                        <p className='text-gray'>Get a fresh look, improved user experience, or enhanced functionality</p>
                        <Image src={Product_Redesign} alt="Product Redesign" width={400} />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Solutions