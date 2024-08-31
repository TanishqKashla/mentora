import React from 'react'

const Navbar = () => {
    const loggedin = false;
    return (
        <div className='flex justify-between font-semibold p-4'>
            <div>LOGO</div>
            <div className='flex gap-10 items-center'>

                <div>
                    <ul className='flex gap-10 items-center'>
                        <li className='text-blue-700'>Home</li>
                        <li>Services</li>
                        <li>Library</li>
                        <li>Get Appointment</li>
                        <li className='rounded-full bg-blue-700 p-3 py-2 text-white'>Emergency</li>
                    </ul>
                </div>
                {loggedin ? <div>img dropdown</div> : <div>Login/Signup</div>}
            </div>
        </div>
    )
}

export default Navbar