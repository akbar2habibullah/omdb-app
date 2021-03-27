import { useEffect, useContext } from "react";
import Head from "next/head";

import Navbar from "components/Navbars/HomeNavbar";
import Card from "components/Cards/HomeCard";
import Footer from "components/Footers/HomeFooter";

import Context from "context/store";

const Bookmark = () => {
  const context = useContext(Context);

  useEffect(() => {});

  return (
    <div>
      <Head>
        <title>OMDb | Bookmark</title>
      </Head>
      <Navbar active="bookmark" />
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <section className="my-5 grid grid-cols-2 lg:grid-cols-5 gap-4 w-full text-center">
          {context.bookmark.length > 0
            ? context.bookmark.map((movie) => (
                <Card
                  title={movie.title}
                  year={movie.year}
                  id={movie.id}
                  type={movie.type}
                  poster={movie.poster}
                />
              ))
            : "No bookmark movies"}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Bookmark;
