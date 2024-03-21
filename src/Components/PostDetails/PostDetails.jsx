import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const {id, title, body} = post;
    const navigate = useNavigate();

    console.log(postId);

    const postStyle ={
        border:  '2px solid yellow',
        padding:'10px',
        margin :'10px',
        borderRadius: '20px',   
    }

    const handleGoBack = () => {
        navigate(-1);
    }


    return (
        <div  style={postStyle}>
            <h3 className="text-2xl font-medium">Post Id: {id}</h3>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="py-3">{body}</p>
            <button className="btn" onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;