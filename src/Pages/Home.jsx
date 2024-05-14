import Aitools from "../Component/AiTools/Aitools";
import Banner from "../Component/Banner/Banner";
import Build from "../Component/Build/Build";
import Customers from "../Component/Customers/Customers";
import Navbar from "../Component/Navbar/Navbar";
import Tools from "../Component/Tools/Tools";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="border border-[#252835]"></div>
            <Customers></Customers>
            <Aitools></Aitools>
            <Tools></Tools>
            <div className="border border-[#252835]"></div>
            <Build></Build>
        </div>
    );
};

export default Home;