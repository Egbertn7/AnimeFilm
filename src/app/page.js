import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/header";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();
  // console.log(animeData.data);

  return (
    <div>
      {/* anime paling populer */}
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>

      {/* anime baru */}
      <section>
        <Header title="Paling Baru" linkHref="/new" linkTitle="Ikut Sekarang" />
        <AnimeList api={topAnime} />
      </section>

    </div>
  );
};

export default Home;
