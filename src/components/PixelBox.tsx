import { cn } from "@/lib/utils"
import React from   "react"
import { ReactNode } from "react"

const PixelBox = ({
    Title,
    className,
    classNameTitle,
    children
}: {
    Title: String,
    classNameTitle?: String 
    className?: String
    children: ReactNode
}) => {
    return <div className={
        cn(
            "relative w-fit h-min px-1.5 border border-purple-500 mt-10",
            className
        )}>
            <div className={
                cn(
                    "h-min w-cover mb-1 -mt-2 border-x border-t-[1px] border-purple-500",
                    className
                )}>
                    Style = {classNameTitle}
                    {Title}
            </div>
            <div className={
                cn(
                    "relative -m-2 p-2 translate-x-2 flex justify-center items-center h-min w-full border border-purple-500",
                    className
                    )}>
                {children}
            </div>
        </div>
}

export default PixelBox