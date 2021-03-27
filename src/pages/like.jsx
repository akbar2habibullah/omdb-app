import { useEffect, useContext } from "react";
import Head from "next/head";

import Navbar from "components/Navbars/HomeNavbar";
import Card from "components/Cards/HomeCard";
import Footer from "components/Footers/HomeFooter";

import Context from "context/store";

const Like = () => {
  const context = useContext(Context);

  useEffect(() => {});

  return (
    <div>
      <Head>
        <title>OMDb | Liked</title>
      </Head>
      <Navbar active="liked" />
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <section className="my-5 grid grid-cols-2 lg:grid-cols-5 gap-4 w-full text-center">
          {context.like.length > 0
            ? context.like.map((movie) => (
                <Card
                  title={movie.title}
                  year={movie.year}
                  id={movie.id}
                  type={movie.type}
                  poster={movie.poster}
                />
              ))
            : "No liked movies"}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Like;
