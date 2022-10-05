import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-dark py-2'>
            <div class="container">
                <div class="footer-heading text-secondary fw-bold mb-3">
                    <h2>A few clicks is all it takes</h2>
                </div>
                <div className="row">
                    <div className="col-6">
                        {/* <div className='text-white text-center mb-3'>
                            Contacts
                        </div> */}
                        <div class="text-center">
                            <NavLink to="tel:901234567" className="text-decoration-none">
                                <i className="fa fa-phone text-white"></i>
                                <p className='text-white'>90-123-4567</p>
                            </NavLink>
                            <NavLink to="mailto:duytan0220@gmail.com" className="text-decoration-none">
                                <i class="fa fa-envelope text-white"></i>
                                <p className='text-white'>duytan0220@gmai.com</p>
                            </NavLink>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className='text-white text-center mb-4'>
                            Social Media
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <NavLink to='/'><i className="fa fa-facebook mx-3 fs-3 text-white"></i></NavLink>
                            <NavLink to="/"><i className="fa fa-github mx-3 fs-3 text-white"></i></NavLink>
                            <NavLink to="/"><i className="fa fa-twitter mx-3 fs-3 text-white"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
