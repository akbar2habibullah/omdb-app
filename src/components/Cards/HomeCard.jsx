import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link'

const HomeCard = ({title, year, id, type, poster}) => {
  return (
    <>
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-2 h-16 text-center">
          <h1 className="text-gray-900 font-bold text-xl uppercase">{title}</h1>
        </div>
        <LazyLoadImage
          className="h-96 w-full object-cover mt-2 w-full"
          src={poster}
          effect="blur"
          alt={title}
        />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900 h-16">
          <h1 className="text-gray-200 font-bold text-md">{year} - {type}</h1>
          <Link href={`/detail/${id}`}>
            <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                Detail
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
