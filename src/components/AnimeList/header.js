import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="md:text-2xl text-lg font-bold">{title}</h1>
            
            {linkTitle && linkHref ?
                <Link href={linkHref} className="md:text-xl text-md underline hover:text-cyan-600 transition-all">
                    {linkTitle}
                </Link>
                : null
            }
        </div>
    )
}

export default Header;
