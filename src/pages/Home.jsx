import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie-player';
import globe from '../utils/lottie/globe.json'

const Home = () => {


    return (
        <>
            {/* navbar */}
            
            {/* end of nav */}

            <section>
                <div className="relative pt-10 mb-0 flex flex-col items-center justify-center h-screen bg-gray-100">
                    {/* Background animation */}
                    <Lottie className=''
                        loop
                        animationData={globe}
                        play
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            opacity: 0.3,
                            width: '100%',
                            height: '100%'
                        }}
                    />
                    <div className="relative z-10 max-w-4xl font-medium mx-auto text-center text-6xl">
                        <div>Structured Trade Finance Simplified</div>

                        <p className="max-w-3xl leading-9 mx-auto text-center mt-10 text-xl font-light">
                            Oramsys is structured to provide a comprehensive solution tailored to the specific needs of participants in global trade, including exporters, importers, banks, and other financial institutions.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col pt-[30px] justify-center w-full text-xl text-white space-y-5 md:space-x-8 md:space-y-0 md:flex-row">
                            <div>
                                <Link to='/signup' className="shadow-sm rounded-md py-3 px-6 bg-[#C32822] text-white hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">Register</Link>
                            </div>

                            <div>
                                <Link to='/signin' className="border-2 shadow-sm rounded-md py-3 px-6 bg-[#d3d3d3] text-gray-900 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">Try Demo</Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="max-w-6xl mx-auto border-b border-b-gray-300"></div>
            </section>

            {/* ********BORDER  ************** */}


            <div className="max-w-6xl flex flex-col items-center md:flex-row ">
                {/* <div className="font-bold">
                    hello
                </div>
                <div className="font-bold">
                    hello
                </div>
                <div className="font-bold">
                    hello
                </div> */}
            </div>

        </>
    )
}

export default Home