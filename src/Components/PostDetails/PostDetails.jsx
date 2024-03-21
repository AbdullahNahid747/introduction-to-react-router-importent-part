import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;

    const postStyle ={
        border:  '2px solid yellow',
        padding:'10px',
        margin :'10px',
        borderRadius: '20px',
        
    }
    return (
        <div  style={postStyle}>
            <h3 className="text-2xl font-medium">Post Id: {id}</h3>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="py-3">{body}</p>
        </div>
    );
};

export default PostDetails;