import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    // const navigate = useNavigate();
    // const handleGoBackHomePage = () =>{
    //     navigate(-1);
    // }

    return (
        <div>
            <h2 className="text-5xl">Ooops!!!!!</h2>
            <Link to={'/'}>            
            <button className="btn my-20" >Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;