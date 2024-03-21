import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="my-5 text-xl font-semibold">This is the Home Components</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;