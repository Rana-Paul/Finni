import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

export const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link className="flex z-40 font-semibold" href="/">
                        <span>PagePaul.Ai</span>
                    </Link>



                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link className={buttonVariants({ variant: "ghost", size: "sm" })} href="/pricing">Pricing</Link>
                            <Link className={buttonVariants({ variant: "ghost", size: "sm" })} href="/">
                                Sing in
                            </Link>
                            <Link className={buttonVariants({size: "sm" })} href="/">
                                Get started <ArrowRight className="ml-1.5 h-5 w-5"/>
                            </Link>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}