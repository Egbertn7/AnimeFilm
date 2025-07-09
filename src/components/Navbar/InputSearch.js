"use client";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();

    const handleSearch = (event) => {
        event.preventDefault();
        const keyword = searchRef.current.value;
        
        router.push(`/search/${keyword}`);

    }
    return (
        <div className="relative" enterKeyHint="search">
            <input type="text" className="w-full bg-white  rounded-md p-2" placeholder="Cari anime..." ref={searchRef}></input>
            <button className="absolute top-2 end-2 cursor-pointer">
                <MagnifyingGlassIcon size={24} onClick={handleSearch}/>
            </button>   

        </div>
    )
}

export default InputSearch;