/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Post = ({post}) => {
    // eslint-disable-next-line no-unused-vars
    const {id, title, body} = post;

    const postStyle ={
        border:  '2px solid yellow',
        padding:'10px',
        margin :'10px',
        borderRadius: '20px',
        
    }

    return (
        <div style={postStyle}>
            <h4 className="text-2xl font-semibold my-5">Post of ID: {id}</h4>
            <Link className=" text-green-500" to={`/post/${id}`} >Post Details</Link>
        </div>
    );
};

export default Post;