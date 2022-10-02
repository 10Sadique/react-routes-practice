import React, { useId } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body, userId } = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/friend/${userId}`);
    };

    return (
        <div>
            <h1 className="text-center font-bold text-3xl text-gray-700 my-10">
                Details About Post {id}
            </h1>
            <div className="mx-5 md:mx-52 p-5 bg-indigo-50 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-700">
                    {title}
                </h1>
                <p className="text-gray-500 mt-5">{body}</p>
                <button
                    onClick={handleNavigate}
                    className="mt-3 px-5 py-2 bg-indigo-600 rounded-lg shadow-md shadow-indigo-600/50 text-white font-semibold"
                >
                    Get the User
                </button>
            </div>
        </div>
    );
};

export default PostDetails;
