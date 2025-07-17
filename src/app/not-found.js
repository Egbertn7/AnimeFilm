"use client";
import { FileSearchIcon } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col">
            <FileSearchIcon size={64} className="fill-accent pr-4" />
            <h1 className="text-4xl font-bold text-accent">Not Found :(</h1>
            <Link href="/" className="text-primary hover:text-accent pt-5 underline">
            Kembali
            </Link>
        </div>
    )
}

export default Page;