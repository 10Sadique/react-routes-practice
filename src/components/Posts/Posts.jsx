import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();

    return (
        <div>
            <p className="my-10 text-center font-bold text-2xl text-gray-700">
                This is Posts
            </p>
            <div className="mx-5 md:mx-52 grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
