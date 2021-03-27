import Link from "next/link";

const HomeNavbar = ({ active }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-yellow-400 p-6 lg:px-20 shadow">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">OMDb API</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="lg:flex-grow"></div>
        <div className="text-sm">
          <Link href="/">
            <a
              className={`block mt-4 ${
                active === "home" ? "lg:border-b-4" : ""
              } border-white pb-1 lg:inline-block lg:mt-0 hover:text-white mr-4`}
            >
              Home
            </a>
          </Link>
          <Link href="/like">
            <a
              className={`block mt-4 ${
                active === "liked" ? "lg:border-b-4" : ""
              } border-white pb-1 lg:inline-block lg:mt-0 hover:text-white mr-4`}
            >
              Liked
            </a>
          </Link>
          <Link href="/bookmark">
            <a
              className={`block mt-4 ${
                active === "bookmark" ? "lg:border-b-4" : ""
              } border-white pb-1 lg:inline-block lg:mt-0 hover:text-white mr-4`}
            >
              Bookmark
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
