import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
    return (
        <div className={cn('relative pointer-events-none z-50 overflow-hidden',
        className
        )}
        {...props}>
            <img 
                src={dark
                    ? "/img-dark-edges.png" 
                    : "/img-white.png"
                } 
                className='pointer-events-none z-50 select-none'
                alt="template"
            />

            <div className="absolute -z-10 inet-0">
                <img 
                    className = "object-cover"
                    src="obbject-cover" 
                    alt="overlaying image" 
                />
            </div>
        </div>
    )
}

export default Phone