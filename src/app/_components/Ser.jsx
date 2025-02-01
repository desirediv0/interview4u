import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'

export default function Ser() {
    return (
        <>
            <div className='w-full'>
                <Wrapper>
                    <div className='grid grid-cols-1 md:grid-cols-2 py-12 gap-12' >
                        <section className='flex flex-col items-start gap-2 '>
                            <h1 className='text-[var(--color)] md:text-5xl text-4xl font-bold '>1. Interview </h1>
                            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </section>
                        <section>
                            <Image alt='about img' className='rounded-2xl' width={600} height={300} src="/abs.webp" />
                        </section>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 py-12 gap-12' >
                        <section>
                            <Image alt='about img' className='rounded-2xl' width={600} height={300} src="/abs.webp" />
                        </section>
                        <section className='flex flex-col items-start gap-2 '>
                            <h1 className='text-[var(--color)] md:text-5xl text-4xl font-bold'>2. Customized Hiring </h1>
                            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </section>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 py-12 gap-12' >
                        <section className='flex flex-col items-start gap-2 '>
                            <h1 className='text-[var(--color)] md:text-5xl text-4xl font-bold'>3. Contract Employment </h1>
                            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </section>
                        <section>
                            <Image alt='about img' className='rounded-2xl' width={600} height={300} src="/abs.webp" />
                        </section>
                    </div>
                </Wrapper>
            </div>
        </>
    )
}
