import Image from "next/image";
import Link from "next/link";

const AnimeList = ({title, images, id}) => {
  return (
    <div className="rounded-md shadow-md overflow-hidden ">
      <Link href={`/${id}}`} className="rounded-md cursor-pointer">
        <Image className="w-full max-h-64 object-cover" src={images} width={350} height={350}  alt="image" />
        <h2 className="font-bold md:text-lg text-md p-4 shadow-md">{title}</h2>
      </Link>
    </div>
  );
};

export default AnimeList;

