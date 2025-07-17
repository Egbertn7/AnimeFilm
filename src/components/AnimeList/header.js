import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="md:text-2xl text-lg font-bold text-primary">{title}</h1>
            
            {linkTitle && linkHref ?
                <Link href={linkHref} className="md:text-xl text-md underline text-primary hover:text-accent transition-all">
                    {linkTitle}
                </Link>
                : null
            }
        </div>
    )
}

export default Header;
