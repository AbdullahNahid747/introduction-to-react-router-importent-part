/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const User = ({user}) => {

    // eslint-disable-next-line no-unused-vars
    const {id, name, email, phone} = user;

    const useStyle ={
        border:  '2px solid yellow',
        padding:'10px',
        margin :'5px',
        borderRadius: '20px',
        
    }

    return (
        <div style={useStyle} className="">
            <h2 className="text-2xl font-semibold my-5">{name}</h2>
            <p>email: {email}</p>
            <p className="py-3">phone: {phone}</p>
            <Link className=" text-green-500" to={`/user/${id}`}>Show Details</Link>
            <Link className="" to={`/user/${id}`}>
                <button className="btn ml-2 bg-slate-300 rounded-lg">Details</button>
            </Link>
        </div>
    );
};

export default User;