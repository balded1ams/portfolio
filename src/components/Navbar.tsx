import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

const NavBar  = () => {
    return(
        <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b bg-[#e4e6d8] backdrop-blur-lg transition-all'>
            <hr className=" w-[90%] md:w-[95%] h-0.5 mt-1 -my-0.5 mx-auto bg-[#191a1c] border-0 rounded dark:bg-[#e4e6d8]"/>
            <MaxWidthWrapper>
                
                <div className='flex h-14 items-center justify-between'>
                <Link href='/' className='flex z-40 ml-6 md:-ml-[6%] xl:-ml-[3%] font-semibold'>
                    <span className="text-[#191a1c] dark:text-[#e4e6d8]">NaClO4</span>
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
                            className: 'hidden sm:flex items-center gap-1 bg-zinc-800 hover:'
                        })}>
                        Projects
                        <ArrowRight className='ml-1.5 h-5 w-5' />
                        </Link>
                    </>
                </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}
{/*mettre un flag si qq se co avec la meme adresse ip que moi?*/}
export default NavBar