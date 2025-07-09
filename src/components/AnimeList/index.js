import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <div key={anime.mal_id} className="rounded-md shadow-md overflow-hidden ">
            <Link href={`/${anime.mal_id}`} className="rounded-md cursor-pointer">
              <Image className="w-full max-h-64 object-cover" src={anime.images.webp.image_url} width={350} height={350} alt="image" />
              <h2 className="font-bold md:text-lg text-md p-4">{anime.title}</h2>
            </Link>
          </div>
        )
      })}
    </div>
  );
};

export default AnimeList;

