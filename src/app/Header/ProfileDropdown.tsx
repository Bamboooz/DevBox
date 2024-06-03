import React from "react";
import { LuBug, LuFiles, LuGithub, LuLogOut, LuSettings, LuUser } from "react-icons/lu";

import Dropdown from "../../components/Dropdown";

interface ProfileDropdownButtonProps {
    icon: React.ReactElement;
    name: string;
    keybind?: string[];
}

const ProfileDropdownButton: React.FC<ProfileDropdownButtonProps> = ({ icon, name, keybind }) => {
    return (
        <>
            <button className="w-full h-8 px-2 flex items-center justify-between rounded-[3px] hover:bg-nav-button-hover hover:active:bg-nav-button-active">
                <div className="flex items-center justify-start gap-2">
                    {React.cloneElement(icon, { className: "text-[16px] text-neutral-300" })}
                    <p className="text-[13px] text-neutral-300">{name}</p>
                </div>

                <div className="flex items-center justify-end gap-1">
                    {keybind &&
                        keybind.map((key) => (
                            <p className="text-[13px] text-neutral-400">{key}</p>
                        ))
                    }
                </div>
            </button>
        </>
    );
};

interface ProfileDropdownProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ visible, setVisible }) => {
    return (
        <>
            <Dropdown visible={visible} setVisible={setVisible} className="w-72 flex flex-col items-center justify-start bg-background2 border border-app-border rounded-md right-[22px] top-[48px]">
                <div className="p-1 gap-1 w-full flex flex-col items-center justify-center">
                    <ProfileDropdownButton icon={<LuSettings />} name="Settings" keybind={["Alt", "A"]} />
                    <ProfileDropdownButton icon={<LuUser />} name="Profile" keybind={["Alt", "U"]} />
                    <ProfileDropdownButton icon={<LuFiles />} name="Docs" keybind={["Alt", "D"]} />
                    <ProfileDropdownButton icon={<LuBug />} name="Report a bug" keybind={["Alt", "B"]} />
                </div>

                <div className="w-full h-[1px] bg-app-border" />

                <div className="p-1 w-full flex flex-col items-center justify-center">
                    <ProfileDropdownButton icon={<LuGithub />} name="View project on GitHub" />
                </div>

                <div className="w-full h-[1px] bg-app-border" />

                <div className="p-1 w-full flex flex-col items-center justify-center">
                    <ProfileDropdownButton icon={<LuLogOut />} name="Sign out" keybind={["Alt", "Up", "Q"]} />
                </div>
            </Dropdown>
        </>
    );
};

export default ProfileDropdown;
