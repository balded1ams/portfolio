import { cn } from "@/lib/utils"
import React from   "react"
import { ReactNode } from "react"

const PixelBox = ({
    Title,
    className, 
    children
}: {
    Title: String,
    className?: String
    children: ReactNode
}) => {
    return <div className={
        cn(
            "relative h-min w-min px-1.5 border border-purple-500",
            className
        )}>
            <div className={
                cn(
                    "h-min w-cover mb-1 -mt-2 border-x border-t-[1px] border-purple-500",
                    className
                )}>
                    {Title}
            </div>
            <div className={
                cn(
                    "relative translate-x-2 flex justify-center items-center h-min w-full border border-purple-500 -m-2 p-2",
                    className
                    )}>
                {children}
            </div>
        </div>
}

export default PixelBox