import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 my-7 text-center">
                This is Friends Page
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-14 mx-6 md:mx-52">
                {friends.map((friend) => (
                    <Friend key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default Friends;
