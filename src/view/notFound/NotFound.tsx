import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-black text-[40px] font-bold">This page not found</h1>

      <Link
        to="/"
        className="mt-20 text-xl border-2 px-6 py-3 rounded-md hover:bg-gray-100"
      >
        Go to home page
      </Link>
    </div>
  );
};

export default NotFound;
