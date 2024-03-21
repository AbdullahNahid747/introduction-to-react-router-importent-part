/* eslint-disable react/no-unknown-property */
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <h2 className="my-5 text-xl font-semibold">This is the Home Components</h2>
            {
                navigation.state === 'loading' ? <p><span class="loading loading-spinner loading-lg"></span></p> :
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;