import { FaCirclePlay } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className="min-h-[90vh] bg-[#12141D] flex justify-center ">
            <div className="content-center text-center space-y-9">
                <div className="">
                    <h1 className="text-6xl font-medium text-white max-w-[500px]">Write better
                        content for your </h1>
                    <h1 className="text-6xl font-medium bg-gradient-to-l from-yellow-400 to-red-600 text-transparent bg-clip-text"><span className="">Facebook Ads</span></h1>
                </div>
                <p className="text-[#B7B8BB] text-lg">Artificial intelligence writting tool helps you create blogs,<br /> social media websites and much more.</p>
                <div className="text-[#FAFAFA] space-y-2">
                    <button className='px-[20px] py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600'>Start 14 Days Free Trial</button><br />
                    <button className="px-9 py-2 border-[1px] rounded-md border-[#12141D]"><FaCirclePlay className="inline-block text-lg mr-2"/>Watch A Demo</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;