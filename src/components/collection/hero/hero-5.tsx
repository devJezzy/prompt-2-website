"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
 
export default function HeroSection() {
return (
    <>
        
        <main>
            <section className="relative pt-20 lg:pt-24 pb-20 bg-blue-50 dark:bg-gray-900">
                <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                    <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl dark:from-[#0c1cac] dark:invisible dark:opacity-40">
                    </div>
                    <div className="h-20 w-3/5 bg-gradient-to-r from-[#488ad4] opacity-40 blur-2xl dark:from-[#0c1cac] dark:opacity-40">
                    </div>
                </div>
                <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
                    <div aria-hidden="true" className="absolute inset-y-0 w-44 left-0 hidden dark:flex">
                        <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#0c1cac] dark:opacity-20">
                        </div>
                    </div>
                    <div className="mx-auto space-y-8 text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
                        <h1 className="text-blue-950 dark:text-white text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-[3.50rem]/tight font-bold">
                            We are providing best and affordable health care.
                        </h1>
                        <p className=" text-gray-700 dark:text-gray-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit! Laborum quo maxime
                            at sapiente
                            quasi
                        </p>
                        <form action="#" className="flex max-w-[34rem] mx-auto lg:mx-0 w-full lg:max-w-none relative  bg-gray-100 dark:bg-gray-950/60 border border-blue-100 dark:border-gray-950 overflow-hidden p-0.5 rounded-3xl before:absolute before:inset-1 before:bg-blue-50 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                            <input type="text" placeholder="johndoe@gmail.com" className="peer relative w-full bg-white dark:bg-gray-950 px-5 py-3 rounded-full outline-none text-gray-600 dark:text-gray-300" />
                            <button className="absolute inset-y-1.5 right-1.5 bg-blue-600 text-white p-3 sm:px-6 flex items-center rounded-full">
                                <span className="hidden sm:flex">Get Started</span>
                                <span className="flex sm:hidden relative z-[5]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </span>
                            </button>
                        </form>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[34rem] mx-auto lg:mx-0 w-full">
                            <div className="relative text-center bg-white dark:bg-gray-950/60 border border-blue-100 dark:border-gray-950 p-5 rounded-3xl before:absolute before:inset-1 before:bg-blue-50 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                                <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                                    450+
                                </span>
                                <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">Diagnostic Weekly</h2>
                            </div>
                            <div className="relative text-center bg-white dark:bg-gray-950/60 border border-blue-100 dark:border-gray-950 p-5 rounded-3xl before:absolute before:inset-1 before:bg-blue-50 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                                <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                                    450+
                                </span>
                                <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">Diagnostic Weekly</h2>
                            </div>
                            <div className="relative text-center bg-white dark:bg-gray-950/60 border border-blue-100 dark:border-gray-950 p-5 rounded-3xl before:absolute before:inset-1 before:bg-blue-50 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                                <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                                    450+
                                </span>
                                <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">Diagnostic Weekly</h2>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
                        <div className="lg:absolute lg:right-0 md:w-5/6 md:h-auto lg:w-full lg:h-full bg-blue-100 overflow-hidden rounded-b-[24px]">
                            <Image src="/images/medecine-team.webp" alt="happy team" width={1850} height={1150} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
 
    </>
)
}