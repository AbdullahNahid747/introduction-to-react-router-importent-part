/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    // eslint-disable-next-line no-unused-vars
    const {id, title, body} = post;

    const navigate = useNavigate();

    const postStyle ={
        border:  '2px solid yellow',
        padding:'10px',
        margin :'10px',
        borderRadius: '20px',    
    }

    const handleShowDetails = () => {
        navigate( `/post/${id}`);
    }


    return (
        <div style={postStyle}>
            <h4 className="text-2xl font-semibold my-5">Post of ID: {id}</h4>
            <Link className=" text-green-500" to={`/post/${id}`} >
                <button className="btn ml-2 bg-slate-300 rounded-lg">Details</button>   
            </Link>
            <br />
            <button className=" btn my-5" onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;