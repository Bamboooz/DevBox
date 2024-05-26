import React from "react";
import { LuChevronRight, LuHome } from "react-icons/lu";

interface BreadcrumbProps {
    relativePath: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ relativePath }) => {
    let pathItems = relativePath.split("/");

    return (
        <>
            <div className="flex items-center justify-between gap-2">
                <LuHome className="text-[16px] text-neutral-300" />

                <div className="flex items-center justify-center">
                    {pathItems.map((item) => (
                        <>
                            <button className="text-[12px] text-neutral-300 hover:text-white">
                                <p>{item}</p>
                            </button>

                            {pathItems.indexOf(item) !== pathItems.length - 1 &&
                                <LuChevronRight className="text-[16px] text-neutral-500" />
                            }
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;
