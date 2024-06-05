import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie-player';
import globe from '../utils/lottie/globe.json'
import { GlobalOutlined, PhoneOutlined, SafetyCertificateOutlined, UsergroupDeleteOutlined } from '@ant-design/icons'

const Home = () => {


    return (
        <>
            <section>
                <div className="relative pt-10 mb-0 flex flex-col items-center justify-center h-screen bg-white">
                    {/* Background animation */}
                    <Lottie
                        loop
                        animationData={globe}
                        play
                        style={{
                            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.3, width: '100%', height: '100%'
                        }}
                    />
                    <div className="relative z-10 max-w-4xl font-medium mx-auto text-center text-6xl">
                        <div>Structured Trade Finance Simplified</div>

                        <p className="max-w-3xl leading-9 mx-auto text-center mt-10 text-xl font-light">
                            Oramsys is structured to provide a comprehensive solution tailored to the specific needs of participants in global trade, including exporters, importers, banks, and other financial institutions.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col pt-[30px] justify-center w-full text-xl text-white space-y-10 md:space-x-8 md:space-y-0 md:flex-row">
                            <div>
                                <Link to='/signup' className="shadow-sm rounded-md py-3 px-6 bg-[#6c63ff] text-white hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">Register</Link>
                            </div>

                            <div>
                                <Link to='/signin' className="border-2 shadow-sm rounded-md py-3 px-6 bg-[#d3d3d3] text-gray-900 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">Try Demo</Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ********BORDER  ************** */}
                <hr class="my-6 max-w-6xl bg-white border-gray-300 sm:mx-auto lg:my-3" />
            </section>



            <div className="max-w-6xl flex flex-col items-center justify-between mx-auto space-y-10 md:flex-row md:space-y-0 md:mb-[40px] md:mt-10 md:space-x-6">
                <div class="flex flex-col items-center space-y-5 md:flex-row md:space-x-4 md:space-y-0">
                    <UsergroupDeleteOutlined className='text-2xl' />
                    <h5 className='text-lg'>1000+ active users</h5>
                </div>
                <div class="flex flex-col items-center space-y-5 md:flex-row md:space-x-4 md:space-y-0">
                    <GlobalOutlined className='text-2xl' />
                    <h5 className='text-lg'>Multi-national partners</h5>
                </div>
                <div class="flex flex-col items-center space-y-5 md:flex-row md:space-x-4 md:space-y-0">
                    <PhoneOutlined className='text-2xl' />
                    <h5 className='text-lg'>24/7 Customer Support</h5>
                </div>
                <div class="flex flex-col items-center space-y-5 md:flex-row md:space-x-4 md:space-y-0">
                    <SafetyCertificateOutlined className='text-2xl' />
                    <h5 className='text-lg'>Certified</h5>
                </div>
            </div>

            {/* Third section */}

            <div className="bg-[#070E20]">
                <h2 className='flex flex-col items-center  py-10 text-white font-medium text-4xl'> Transform your trade views</h2>

                <div className='flex flex-col justify-between items-center max-w-7xl mx-auto space-y-10 md:space-y-0  text-white md:flex-row'>
                    <div className="flex flex-col space-y-5 md">
                        hello
                    </div>
                    <div className="">
                        hello
                    </div>
                    <div className="">
                        hello
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home