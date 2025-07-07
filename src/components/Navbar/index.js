import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-cyan-600 ">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="text-white font-bold text-2xl p-1">AnimeList</Link>
                <input type="text" className="bg-white rounded-md" placeholder="Cari anime..."></input>
            </div>
        </header>
    )
}

export default Navbar;