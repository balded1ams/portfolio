import { cn } from "@/lib/utils"
import React from   "react"
import { ReactNode } from "react"

const PixelBox = ({
    Title,
    className, 
    children
}: {
    Title: ReactNode,
    className?: String
    children: ReactNode
}) => {
    return <div className="mt-12">
        <div className={
            cn(
                "relative w-fit h-min px-1.5 border border-[#191a1c]",
                className
            )}>
                <div className={
                    cn(
                        "h-min w-cover mb-1 -mt-2 border-x border-t-[1px] border-[#191a1c]",
                        className
                    )}>
                        {Title}
                </div>
                <div className={
                    cn(
                        "relative -m-2 p-2 translate-x-2 flex justify-center items-center h-min w-full border border-[#191a1c]",
                        )}>
                    {children}
                </div>
            </div>
        </div>
}

export default PixelBox