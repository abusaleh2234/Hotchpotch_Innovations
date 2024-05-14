import Container from "../Container/Container";
import tools1 from '../../assets/tools_1.png';
import tools2 from '../../assets/tools-2.png';
import tools3 from '../../assets/tools_3.png';
import tools4 from '../../assets/tools_5.png';
const Tools = () => {
    return (
        <div className="bg-[#12141D] pb-20">
            <Container>
                <div className="">
                    <div className="text-center pb-14 space-y-6">
                        <h2 className="outfit_font text-[42px] font-semibold text-[#FFFFFF]">54 exciting writing tools</h2>
                        <p className="inter-font text-lg font-normal text-[#B7B8BB]">AI engines take information from various sources and read <br /> them like a human would do.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                        <div className="flex gap-4 p-5 rounded-lg bg-[#282A37]">
                            <img src={tools1} className="w-9 h-9" alt="" />
                            <div className="space-y-2">
                                <h4 className="text-base font-semibold text-[#FFFFFF] ">Blog Headlines</h4>
                                <p className="text-sm font-normal text-[#B7B8BB]">Write a better blog title with <br /> our A.I tool.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-lg bg-[#282A37]">
                            <img src={tools2} className="w-9 h-9" alt="" />
                            <div className="space-y-2">
                                <h4 className="text-base font-semibold text-[#FFFFFF] ">Blog Intros</h4>
                                <p className="text-sm font-normal text-[#B7B8BB]">Generate a paragraph of blog content using Blog Intros tool</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-lg bg-[#282A37]">
                            <img src={tools3} className="w-9 h-9" alt="" />
                            <div className="space-y-2">
                                <h4 className="text-base font-semibold text-[#FFFFFF] ">Blog Outline</h4>
                                <p className="text-sm font-normal text-[#B7B8BB]">Need an attention-grabbing headline for your article?</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-lg bg-[#282A37]">
                            <img src={tools1} className="w-9 h-9" alt="" />
                            <div className="space-y-2">
                                <h4 className="text-base font-semibold text-[#FFFFFF] ">Blog Conclusions</h4>
                                <p className="text-sm font-normal text-[#B7B8BB]">Write a better conclusions with AI writing tool.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-lg bg-[#282A37]">
                            <img src={tools4} className="w-9 h-9" alt="" />
                            <div className="space-y-2">
                                <h4 className="text-base font-semibold text-[#FFFFFF] ">Content Rewriter</h4>
                                <p className="text-sm font-normal text-[#B7B8BB]">Get AI writer to rewrite your sentence in a different way.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-lg bg-[#282A37]">
                            <img src={tools2} className="w-9 h-9" alt="" />
                            <div className="space-y-2">
                                <h4 className="text-base font-semibold text-[#FFFFFF] ">Product Description</h4>
                                <p className="text-sm font-normal text-[#B7B8BB]">Need an attention-grabbing headline for your article?</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-lg bg-[#282A37]">
                            <img src={tools3} className="w-9 h-9" alt="" />
                            <div className="space-y-2">
                                <h4 className="text-base font-semibold text-[#FFFFFF] ">PAS Copywriting Formula</h4>
                                <p className="text-sm font-normal text-[#B7B8BB]">Get AI writer to rewrite your sentence in a different way.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-lg bg-[#282A37]">
                            <img src={tools1} className="w-9 h-9" alt="" />
                            <div className="space-y-2">
                                <h4 className="text-base font-semibold text-[#FFFFFF] ">Company About Us</h4>
                                <p className="text-sm font-normal text-[#B7B8BB]">Write a better blog title with our AI tool.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center pt-14">
                        <button className="px-9 py-2 border-[1px] text-base font-semibold rounded-md border-[#12141D] text-[#ffffff]">See all 54 available tools</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Tools;