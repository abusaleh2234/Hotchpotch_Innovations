import Container from "../Container/Container";

const Footer = () => {
    return (
        <div className="bg-[#252835]  pb-20">
            <Container>
                <div className="">
                    <div className="pl-12 pt-7 pb-7 pr-10 rounded-xl flex justify-between items-center bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">
                        <h3 className="text-[32px] font-semibold text-[#FFFFFF]">It will help you improve your writing <br /> & bring ideas more c learly.</h3>
                        <div className="">
                        <button className='block px-5 py-3 rounded-md  bg-[#FFFF] hover:bg-none font-semibold'>Get Started Free</button>
                        </div>
                    </div>
                    <div className="pt-24 text-[#FFFFFF] grid grid-cols-4 justify-evenly">
                        <div className="">
                            <h4 className="font-semibold ">Company</h4>
                            <ul className="pt-4 text-sm font-normal space-y-2">
                                <li>About</li>
                                <li>Features</li>
                                <li>Works</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="font-semibold ">Help</h4>
                            <ul className="pt-4 text-sm font-normal space-y-2">
                                <li>Customer Support</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="font-semibold ">Resources</h4>
                            <ul className="pt-4 text-sm font-normal space-y-2">
                                <li>Free eBooks</li>
                                <li>Development Tutorial</li>
                                <li>How to - Blog</li>
                                <li>Youtube Playlist</li>
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="font-semibold ">Links</h4>
                            <ul className="pt-4 text-sm font-normal space-y-2">
                                <li>Free eBooks</li>
                                <li>Development Tutorial</li>
                                <li>How to - Blog</li>
                                <li>Youtube Playlist</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;