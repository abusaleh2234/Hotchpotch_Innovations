import LOGO from '../../assets/logoHPI.png';
import Container from '../Container/Container';
const Navbar = () => {
    const Nav_Item = <>
        <li><a>Demos</a></li>
        <li><a>About</a></li>
        <li><a>Blog</a></li>
        <li><a>Pages</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className='bg-[#12141D] inter-font font-medium'>
            <Container>
                <div className="navbar justify-between py-2 sm:py-4 min-h-0 text-[#FFFFFF]">
                    <div className="navbar-start w-auto">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm text-white bg-[#282A37] text-base dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                                {Nav_Item}
                            </ul>
                        </div>
                        <a className="">
                            <img src={LOGO} className='w-14 p-2' alt="" />
                        </a>
                        <div className="navbar-center pl-4 w-auto hidden lg:flex">
                            <ul className="menu text-base menu-horizontal px-1 space-x-2">
                                {Nav_Item}
                            </ul>
                        </div>
                    </div>

                    <div className="space-x-1 sm:space-x-3">
                        <button className='px-2 sm:px-5 py-3 rounded-md text-sm font-light md:text-base sm:font-medium btn-outline text-[#ffffff]  bg-[#12141D] border-[1px] border-[#B7B8BB] hover:bg-gradient-to-r from-blue-600 to-purple-700'>Sign in</button>
                        <button className='px-2 sm:px-5 py-3 rounded-md text-sm font-light md:text-base sm:font-medium bg-gradient-to-r from-blue-600 to-purple-700 border-[1px] border-[#12141D] hover:bg-none hover:border-[1px] hover:border-[#B7B8BB]'>Get Started Free</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;