import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar fixed top-0 w-full bg-white shadow-sm z-50'>
                <div className="mx-auto px-[40px] py-5">
                    <div className="flex items-center justify-between font-base text-lg">
                        {/* logo & Menu */}
                        <div className="flex items-center md:space-x-6">
                            <Link to='/' className="">
                                <img src="/assets/images/lgo-red.png" className='h-12' alt="" />
                            </Link>

                            <div className="hidden text-lg font-normal md:flex md:space-x-8">
                                <div className="group">
                                    <Link to='/'> About Us</Link>
                                    <div class="mx-2 group-hover:border-b group-hover:border-gray-800"> </div>
                                </div>
                                <div className="group">
                                    <Link to='/'> Partners</Link>
                                    <div class="mx-2 group-hover:border-b group-hover:border-gray-800"> </div>
                                </div>
                                <div className="group">
                                    <Link to='/'> Registered Entities</Link>
                                    <div class="mx-2 group-hover:border-b group-hover:border-gray-800"> </div>
                                </div>
                                <div className="group">
                                    <Link to='/'> Contact us</Link>
                                    <div class="mx-2 group-hover:border-b group-hover:border-gray-800"> </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden font-poppins md:flex md:space-x-8">
                            <Link to='/signup' className="shadow-sm rounded-md py-3 px-6 bg-[#C32822] text-white hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">Register</Link>
                            <Link to='/signin' className="border-2 shadow-sm rounded-md py-3 px-6 bg-[#d3d3d3] text-dark hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Header