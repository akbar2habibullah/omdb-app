import { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "components/Navbars/HomeNavbar";
import Card from "components/Cards/HomeCard";
import Footer from "components/Footers/HomeFooter";

import { getAllMovie } from "api/omdb";

const Home = () => {
  const [title, setTitle] = useState();
  const [response, setResponse] = useState({
    "Response": false,
    "Error": "Please input the title"
  });

  useEffect(() => {
    if (title) {
      getAllMovie({title}).then(result => setResponse(result));
    } else {
      setResponse({
        "Response": false,
        "Error": "Please input the title"
      });
    }
  }, [title]);

  const handleChange = (e) => {
    if (e.key === "Enter") {
      setResponse({
        "Response": false,
        "Error": "Please Wait..."
      });
      setTitle(e.target.value);
    }
  };

  return (
    <div>
      <Head>
        <title>OMDb | Home</title>
      </Head>
      <Navbar active="home" />
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="flex flex-col items-center justify-center pt-24 text-center">
          <h1 className="font-bold text-3xl text-gray-900">OMDb API</h1>
          <p className="font-base text-base text-gray-600">
            The OMDb API is a RESTful web service to obtain movie information
          </p>
        </div>

        <div className="box pt-6">
          <div className="box-wrapper">
            <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
              <button className="outline-none focus:outline-none">
                <svg
                  className=" w-5 text-gray-600 h-5 cursor-pointer"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                type="search"
                onKeyDown={handleChange}
                placeholder="search for movies"
                className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        <section className="my-5 grid grid-cols-2 lg:grid-cols-5 gap-4 w-full text-center">
            { response.Response === "True" ? response.Search.map(movie => <Card title={movie.Title} year={movie.Year} id={movie.imdbID} type={movie.Type} poster={movie.Poster}/> ) : response.Error }
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
