import Aitools from "../Component/AiTools/Aitools";
import Banner from "../Component/Banner/Banner";
import Build from "../Component/Build/Build";
import Customers from "../Component/Customers/Customers";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import PaidPlan from "../Component/PaidPlan/PaidPlan";
import Testimonial from "../Component/Testimonial/Testimonial";
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
            <Testimonial></Testimonial>
            <div className="border border-[#1d202c]"></div>
            <PaidPlan></PaidPlan>
            <Footer></Footer>
        </div>
    );
};

export default Home;