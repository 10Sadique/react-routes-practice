import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, username, email, phone, company } = friend;
    return (
        <div className="bg-indigo-50/80 rounded-lg shadow-lg w-full p-4">
            <div>
                <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
                <div className="font-medium text-indigo-600 flex gap-1 items-center my-3">
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
                    <Link to={`/friend/${id}`}>{username}</Link>
                </div>
                <div className="space-y-1">
                    <p className="font-medium text-sm text-gray-600">
                        Email: {email}
                    </p>
                    <p className="font-medium text-sm text-gray-600">
                        Phone: {phone}
                    </p>
                    <p className="font-medium text-sm text-gray-600">
                        Profession: {company.catchPhrase}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Friend;
