import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const user = useLoaderData();

    const { name, email, phone, website } = user;

    return (
        <div>
            <h1 className="text-3xl text-gray-700 font-bold text-center my-10">
                Info of {name}
            </h1>
            <div className="bg-indigo-100 p-4 rounded-lg shadow-lg mx-5 md:mx-52 space-y-1 text-gray-700">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
            </div>
        </div>
    );
};

export default FriendDetails;
