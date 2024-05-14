import Container from "../Container/Container";

const PaidPlan = () => {
    return (
        <div className="bg-[#252835] pt-[88px] pb-12">
            <Container>
                <div className="">
                    <div className="text-center pb-14 space-y-5">
                        <h2 className="outfit_font text-[42px] font-semibold text-[#FFFFFF]">Make the wise decision <br /> for your business</h2>
                        <p className="inter-font text-lg font-normal text-[#B7B8BB]">Choose from our affordable 3 packages</p>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="py-[30px] pl-[30px] pr-[50px] bg-[#282a37] rounded-2xl">
                            <h5 className="text-[#FFFFFF]">Starter Plan</h5>
                            <div className="text-[#FFFFFF] pt-7 pb-3">
                                <h3 className=""><span className="text-[42px] font-semibold">$29</span><span className="text-lg">/month</span></h3>
                            </div>
                            <p className="text-sm text-[#B7B8BB]">This package is suitable for teams 1-15 people.</p>
                            <h4 className="pt-10 pb-4 text-[#FFFFFF]">What’s included:</h4>
                            <ul className="text-[#B7B8BB] space-y-2 pb-7">
                                <li>10 GB Dedicated Hosting Free</li>
                                <li>Best for Developers, Freelancers</li>
                                <li>1 Year Support </li>
                            </ul>
                            <button className="block w-full px-5 py-3 rounded-lg btn-outline font-semibold text-[#ffffff] text-left  border-2 border-[#1d1f2a] hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">PAS Copywriting Formula</button>
                        </div>
                        <div className="py-[30px] pl-[30px] pr-[50px] bg-[#282a37] rounded-2xl">
                            <h5 className="text-[#FFFFFF]">Basic Plan</h5>
                            <div className="text-[#FFFFFF] pt-7 pb-3">
                                <h3 className=""><span className="text-[42px] font-semibold">$79</span><span className="text-lg">/month</span></h3>
                            </div>
                            <p className="text-sm text-[#B7B8BB]">This package is suitable for teams 1-50 people.</p>
                            <h4 className="pt-10 pb-4 text-[#FFFFFF]">What’s included:</h4>
                            <ul className="text-[#B7B8BB] space-y-2 pb-7">
                                <li>15 GB Dedicated Hosting Free</li>
                                <li>Best for Developers, Freelancers</li>
                                <li>5 Year Support</li>
                                <li>Free Custom Domain</li>
                                <li>Basic Statistics</li>
                            </ul>
                            <button className="block w-full px-5 py-3 rounded-lg btn-outline font-semibold text-[#ffffff] text-left  border-2 border-[#1d1f2a] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:bg-[#12141D]">PAS Copywriting Formula</button>
                        </div>
                        <div className="py-[30px] pl-[30px] pr-[50px] bg-[#282a37] rounded-2xl">
                            <h5 className="text-[#FFFFFF]">Premium Plan</h5>
                            <div className="text-[#FFFFFF] pt-7 pb-3">
                                <h3 className=""><span className="text-[42px] font-semibold">$129</span><span className="text-lg">/month</span></h3>
                            </div>
                            <p className="text-sm text-[#B7B8BB]">This package is suitable for teams 1-100 people.</p>
                            <h4 className="pt-10 pb-4 text-[#FFFFFF]">What’s included:</h4>
                            <ul className="text-[#B7B8BB] space-y-2 pb-7">
                                <li>20 GB Dedicated Hosting Free</li>
                                <li>Best for Developers, Freelancers</li>
                                <li>Unlimited Support</li>
                                <li>Free Custom Domain</li>
                                <li>Full Statistics</li>
                            </ul>
                            <button className="block w-full px-5 py-3 rounded-lg btn-outline font-semibold text-[#ffffff] text-left  border-2 border-[#1d1f2a] hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">PAS Copywriting Formula</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PaidPlan;