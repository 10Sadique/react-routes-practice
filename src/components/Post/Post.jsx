import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`post/${id}`);
    };

    return (
        <div className="p-4 bg-indigo-50 rounded-lg shadow-lg text-gray-700 flex flex-col gap-5">
            <h1 className="font-bold text-xl text-gray-800" title={title}>
                {title.slice(0, 30) + '...'}
            </h1>
            <p className="text-gray-600 flex-1">{body}</p>
            <div className="font-medium text-indigo-600 flex gap-1 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                </svg>
                <Link to={`/post/${id}`}>View Details</Link>
            </div>
            {/* <button onClick={handleNavigate}>Button 2</button> */}
        </div>
    );
};

export default Post;
