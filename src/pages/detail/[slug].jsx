import { useEffect, useState, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRouter } from "next/router";
import Head from "next/head";

import Navbar from "components/Navbars/HomeNavbar";
import Footer from "components/Footers/HomeFooter";

import Context from "context/store";
import { getMovie } from "api/omdb";

const Home = () => {
  const router = useRouter();
  const context = useContext(Context);
  const [state, setState] = useState({
    Loading: true,
  });
  const [like, setLike] = useState();
  const [bookmark, setBookmark] = useState();

  const { slug } = router.query;

  useEffect(() => {

  }, [like, bookmark, state.Loading])

  useEffect(() => {
    setLike(Boolean(context.like.find(movie => movie.id === state.imdbID)));
  }, [state.imdbID, context.like])

  useEffect(() => {
    setBookmark(Boolean(context.bookmark.find(movie => movie.id === state.imdbID)));
  }, [state.imdbID, context.bookmark])

  useEffect(() => {
    if (state.Response === "False") router.back();
  }, [state]);

  useEffect(async () => {
    await getMovie(slug).then((result) =>
      setState({ ...result, Loading: false })
    );
  }, [slug]);

  const handleLike = () => {
    const tmp = context.like;

    if (like) {
      const result = tmp.filter(movie => movie.id !== state.imdbID);
      context.setLike(result)
    } else {
      tmp.push({
        id: state.imdbID,
        title: state.Title,
        poster: state.Poster,
        type: state.Type,
        year: state.Year,
      });
      context.setLike(tmp);
      setLike(true);
    }
  }

  const handleBookmark = () => {
    const tmp = context.bookmark;

    if (bookmark) {
      const result = tmp.filter(movie => movie.id !== state.imdbID);
      context.setBookmark(result)
    } else {
      tmp.push({
        id: state.imdbID,
        title: state.Title,
        poster: state.Poster,
        type: state.Type,
        year: state.Year,
      });
      context.setBookmark(tmp);
      setBookmark(true);
    }
  }

  return (
    <div>
      <Navbar />
      {state.Loading ? (
        <div class="flex flex-col items-center justify-center my-40 text-center">
          <h1 class="font-bold text-3xl text-gray-900">Loading...</h1>
        </div>
      ) : (
        <>
          <Head>
            <title>OMDB {`| ${state.Title}`}</title>
          </Head>
          <div class="px-4 pt-8 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <div class="flex flex-col md:flex-row">
              <LazyLoadImage
                className="object-cover w-full rounded-lg md:w-60 lg:w-96"
                src={state.Poster}
                alt={state.Title}
                effect="blur"
              />
              <div className="py-5 px-2 md:py-0 md:px-5 w-full">
                <h1 className="font-bold text-3xl">{`${state.Title} (${state.Year})`}</h1>
                <div className="flex flex-row mt-4">
                  <button
                    onClick={handleLike}
                    className="px-4 py-1 mr-4 border border-yellow-400 hover:bg-yellow-400 hover:text-white rounded"
                  >
                    {like ? "Unlike" : "Like"}
                  </button>
                  <button
                    onClick={handleBookmark}
                    className="px-4 py-1 border border-yellow-400 hover:bg-yellow-400 hover:text-white rounded"
                  >
                    {bookmark ? "Unbookmark" : "Bookmark"}
                  </button>
                </div>
                <div className="my-4">
                  <h2 className="font-semibold text-xl">
                    {state.Runtime} - {state.Language}
                  </h2>
                  <h2 className="font-semibold text-xl">
                    Genre: {state.Genre}
                  </h2>
                  <h2 className="font-semibold text-xl">
                    Actors: {state.Actors}
                  </h2>
                  <h2 className="font-semibold text-xl">
                    Rating: {state.imdbRating} {"(imdb)"}
                  </h2>
                </div>

                <h2 className="font-semibold text-xl">Plot:</h2>
                <p>{state.Plot}</p>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
