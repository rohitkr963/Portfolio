import React from 'react';
import Image from 'next/image';

const ProfileCard = ({
    avatarUrl,
    name,
    className = ''
}) => {
    return (
        <div className={`relative w-full aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-800 max-w-sm mx-auto transition-transform duration-500 hover:scale-105 ${className}`}>
            <Image
                src={`${avatarUrl || "/rohit-photo.jpg"}?v=${new Date().getTime()}`}
                alt={name || "Profile Image"}
                fill
                className="object-cover"
                priority
            />
            {/* Optional: Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
    );
};

export default ProfileCard;
