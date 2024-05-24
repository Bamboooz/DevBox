import React from "react";

import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?:
        | "expand"
        | "navigation";
    className?: string;
}

const variantStylesMap = {
    expand: "w-[40px] h-[36px] flex items-center justify-center rounded-[0.25rem] hover:bg-nav-button-hover hover:active:bg-nav-button-active",
    navigation: "w-full h-[36px] px-[11px] flex items-center justify-start gap-[11px] rounded-[0.25rem] text-nowrap hover:bg-nav-button-hover hover:active:bg-nav-button-active",
};

const Button: React.FC<ButtonProps> = ({ children, variant, className, ...props }) => {
    const variantClassName = variant ? variantStylesMap[variant] : "";

    return (
        <>
            <button className={cn(variantClassName, className)} {...props}>
                {children} 
            </button>
        </>
    );
};

export default Button;
