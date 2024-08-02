import Image from 'next/image'
import React from 'react'
import logo from '../public/img/KWIP7qb5TcfoG5MVlSntUadDyTM.svg'
import Link from 'next/link'

const Header = () => {
    const navLinks = [
        { id: 1, title: 'solutions' },
        { id: 2, title: 'process' },
        { id: 3, title: 'works' },
        { id: 4, title: 'services' },
        { id: 5, title: 'benefits' },
        { id: 6, title: 'pricing' },
        { id: 7, title: 'faqs' },
    ]
    return (
        <div className='bg-primary text-white'>
            <div className='w-[85%] mx-auto py-4 flex items-center justify-between'>
                <div>
                    <Image src={logo} alt='logo' />
                </div>
                <div className='flex gap-4 capitalize'>
                    {navLinks.map((item => (
                        <Link href={item.title} className='hover:bg-secondary hover:text-black px-4 py-2 rounded-md'>{item.title}</Link>
                    )))}
                </div>
                <div>
                    <button className='bg-secondary text-black px-4 py-2 rounded-md capitalize'>view plans</button>
                </div>
            </div>
        </div>
    )
}

export default Header