import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

const NavBar  = () => {
    return(
        <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b bg-[#e4e6d8] bg-opacity-50 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between'>
                <Link href='/' className='flex z-40 font-semibold'>
                    Na<span className='text-violet-600'>ClO4</span>
                </Link>

                <div className='h-full flex items-center space-x-4'>
                    <>
                        <Link
                        href='/projet/'
                        className={buttonVariants({
                            size: 'sm',
                            variant: 'ghost',
                        })}>
                        add projects
                        </Link>

                        <div className='h-8 w-px bg-[#caccc0] hidden sm:block' />

                        <Link
                        href='/configure/upload'
                        className={buttonVariants({
                            size: 'sm',
                            className: 'hidden sm:flex items-center gap-1',
                        })}>
                        Projects
                        <ArrowRight className='ml-1.5 h-5 w-5' />
                        </Link>
                    </>
                </div>
                </div>
            </MaxWidthWrapper>
            <hr className="w-[90%] h-1 -my-0.5 mx-auto bg-[#191a1c] border-0 rounded dark:[#e4e6d8]"/>
        </nav>
    )
}

export default NavBar