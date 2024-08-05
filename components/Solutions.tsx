import React from 'react'
import mvp_design from '../public/img/solutions/MVP_Design.png'
import Product_Redesign from '../public/img/solutions/Product_Redesign.png'
import team_extension from '../public/img/solutions/team-extension.png'
import contract_design_partner from '../public/img/solutions/contract_design_partner.png'
import one_time_projects from '../public/img/solutions/one_time_projects.png'
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
                        <h1 className='font-bold text-lg my-2'>MVP Design</h1>
                        <p className='text-gray'>Create a digital product, attract investors and new clients.</p>
                        <div className='flex justify-center'>
                            <Image src={mvp_design} alt="MVP Design" width={400} />
                        </div>
                    </div>
                    <div className='bg-[#F8F8F8] col-span-6 p-4 rounded-md text-center'>
                        <h1 className='font-bold text-lg my-2'>Product Redesign</h1>
                        <p className='text-gray'>Get a fresh look, improved user experience, or enhanced functionality</p>
                        <div className='flex justify-center'>
                            <Image src={Product_Redesign} alt="Product Redesign" width={400} />
                        </div>
                    </div>
                    <div className='bg-[#F8F8F8] col-span-4 p-4 rounded-md text-center'>
                        <h1 className='font-bold text-lg my-2'>Team Extension</h1>
                        <p className='text-gray'>Expand your team with our dedicated and talented design experts.</p>
                        <div className='flex justify-center'>
                            <Image src={team_extension} alt="Product Redesign" width={400} />
                        </div>
                    </div>
                    <div className='bg-[#F8F8F8] col-span-4 p-4 rounded-md text-center'>
                        <h1 className='font-bold text-lg my-2'>Contract Design Partner</h1>
                        <p className='text-gray'>Solve design requests in your product on long term collaboration.</p>
                        <div className='flex justify-center'>
                            <Image src={contract_design_partner} alt="Product Redesign" width={400} />
                        </div>
                    </div>
                    <div className='bg-[#F8F8F8] col-span-4 p-4 rounded-md text-center'>
                        <h1 className='font-bold text-lg my-2'>One-time projects</h1>
                        <p className='text-gray'>Designs single time project, landing page, website or app design.</p>
                        <div className='flex justify-center'>
                            <Image src={one_time_projects} alt="Product Redesign" width={400} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions