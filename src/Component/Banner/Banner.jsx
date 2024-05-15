import { FaCirclePlay } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className="relative md:min-h-[90vh] bg-[#12141D] -z-50 flex justify-center py-7">
            <div className="absolute bg-[#F23690] right-0 bottom-0 h-36 w-36 z-0  rounded-full blur-[150px]"></div>
            <div className="absolute bg-[#FFCF73] left-0 top-1/3 h-36 w-36 z-0  rounded-full blur-[150px]"></div>
            <div className="relative content-center text-center space-y-4 md:space-y-9">
                <div className="absolute bg-[#9F36F2] left-1/3 h-48 w-48 z-0  rounded-full blur-[150px]"></div>
                
                <div className="z-50">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-[46px] sm:leading-[56px] md:leading-[66px] text-white max-w-[300px] sm:max-w-[360px] md:max-w-[500px]">Write  better
                        content for your </h1>
                    <h1 className="relative pb-3 block text-4xl sm:text-5xl md:text-6xl font-medium leading-[46px] sm:leading-[56px] md:leading-[66px] bg-gradient-to-l from-yellow-400 to-red-600 text-transparent bg-clip-text"><span className="">Facebook Ads</span>
                        <span className="absolute w-9/12 bottom-0 left-10 md:left-16 p-[3px] bg-gradient-to-l from-yellow-400 to-red-600"></span>
                    </h1>
                </div>
                <p className="z-20 text-[#B7B8BB] text-base sm:text-lg max-w-[300px] md:max-w-[500px] mx-auto">Artificial intelligence writting tool helps you create blogs, social media websites and much more.</p>
                <div className="text-[#FAFAFA] space-y-2">
                    {/* <button className='px-[20px] py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600'>Start 14 Days Free Trial</button> */}
                    <button className="px-5 sm:px-5 py-3 rounded-md text-sm md:text-base font-medium bg-gradient-to-r from-blue-600 to-purple-700 border-[1px] border-[#12141D] hover:bg-none hover:border-[1px] hover:border-[#B7B8BB]">Start 14 Days Free Trial</button><br />
                    <button className="px-9 py-2 border-[1px] hover:text-[ linear-gradient(94.25deg, #2B59FF 0%, #BB2BFF 100%)] rounded-md border-[#12141D]"><FaCirclePlay className="inline-block text-lg mr-2" />Watch A Demo</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;