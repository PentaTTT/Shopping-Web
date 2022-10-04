import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-light my-2 py-2'>
            <div class="container">
                <div class="footer-heading fw-bold mb-3">
                    <h2>Ready to make something amazing?</h2>
                </div>
                <div className="footer-content row">
                    <div class="footer-contact col-md-6 text-center">
                        <NavLink to="tel:901234567">
                            <i className="fa fa-phone text-black"></i>
                            <p className='text-black'>90-123-4567</p>
                        </NavLink>
                        <NavLink to="mailto:duytan0220@gmail.com">
                            <i class="fa fa-envelope text-black"></i>
                            <p className='text-black text-decoration-none'>duytan0220@gmai.com</p>
                        </NavLink>
                    </div>

                    <div class="banner__socials col-md-6 d-flex justify-content-center align-items-center
                     ">
                        <NavLink to='/'><i className="fa fa-facebook mx-3 fs-3 text-black"></i></NavLink>
                        <NavLink to="/"><i class="fa fa-github mx-3 fs-3 text-black"></i></NavLink>
                        <NavLink to="/"><i class="fa fa-twitter mx-3 fs-3 text-black"></i></NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
