import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/header";

const Page = async ({ params}) => {
  const {keyword} = params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();
  // console.log(animeData.data);

  return (
    <div>
      {/* anime paling populer */}
      <section>
        <Header title={`Hasil Pencaharian ${keyword}...`} />
        <AnimeList api={searchAnime} />
      </section>


    </div>
  );
};

export default Page;
