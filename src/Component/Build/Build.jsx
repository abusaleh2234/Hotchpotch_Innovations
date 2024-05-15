import Container from "../Container/Container";

const Build = () => {
    return (
        <div className="bg-[#12141D] pt-8 md:pt-20 px-2 lg:px-0">
            <Container>
                <div className="">
                    <h2 className="outfit_font text-[24px] md:text-[42px] font-semibold text-center text-[#FFFFFF] max-w-[430px] mx-auto">Mixland helps you 
                        build beautiful website</h2>
                    <div className="lg:flex md:gap-12 gap-8 justify-center pt-8 md:pt-20 pb-8 md:pb-28 space-y-6 md:space-y-0">
                        <div className="min-w-[302px] space-y-[10px]">
                            <h3 className="py-4 pl-5 rounded-lg font-semibold text-[#FFFFFF] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">Blog Headlines</h3>
                            <button className="block w-full px-5 py-3 rounded-lg btn-outline font-semibold text-[#ffffff] text-left  bg-[#12141D] border-[1px] border-[#20222d] hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">Blog Intros</button>
                            <button className="block w-full px-5 py-3 rounded-lg btn-outline font-semibold text-[#ffffff] text-left bg-[#12141D] border-[1px] border-[#20222d] hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">Content Rewriter</button>
                            <button className="block w-full px-5 py-3 rounded-lg btn-outline font-semibold text-[#ffffff] text-left bg-[#12141D] border-[1px] border-[#20222d] hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">Facebook Ads</button>
                            <button className="block w-full px-5 py-3 rounded-lg btn-outline font-semibold text-[#ffffff] text-left bg-[#12141D] border-[1px] border-[#20222d] hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">Product Description</button>
                            <button className="block w-full px-5 py-3 rounded-lg btn-outline font-semibold text-[#ffffff] text-left bg-[#12141D] border-[1px] border-[#20222d] hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">PAS Copywriting Formula</button>
                        </div>
                        <div className="bg-[#282a37] pt-4 pl-5 pr-8 rounded-xl">
                            <div className="flex space-x-2 pb-4">
                                <div className="w-2 h-2 bg-[#F23936] rounded-full"></div>
                                <div className="w-2 h-2 bg-[#FABB18] rounded-full"></div>
                                <div className="w-2 h-2 bg-[#45C646] rounded-full"></div>
                            </div>
                            <div className="pl-3 lg:min-w-[650px] md:w-full">
                                <ul>
                                    <li className="py-5 text-base font-semibold text-[#B7B8BB] border-b-[1px] border-[#313342]">4 Blog Headlines Generated</li>
                                    <li className="py-5 text-base font-semibold text-[#FFFFFF] border-b-[1px] border-[#313342]">Create original content that ranks for SEO</li>
                                    <li className="py-5 text-base font-semibold text-[#FFFFFF] border-b-[1px] border-[#313342]">Any mechanical keyboard enthusiasts in design?</li>
                                    <li className="py-5 text-base font-semibold text-[#FFFFFF] border-b-[1px] border-[#313342]">The More Important the Work, the More Important the Rest</li>
                                    <li className="py-5 text-base font-semibold text-[#FFFFFF] border-b-[1px] border-[#313342]">How to design a product that can grow itself 10x in year</li>
                                    <li className="py-5 text-base font-semibold text-[#FFFFFF] border-b-[1px] border-[#313342]">Any mechanical keyboard enthusiasts in design?</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Build;