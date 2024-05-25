import React from "react";

interface ProfilePictureProps {
    url: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ url }) => {
    return (
        <>
            <div className="size-full rounded-full border border-app-border">
                <img src={url} className="size-full rounded-full" />
            </div>
        </>
    );
};

export default ProfilePicture;
