import { useRouter } from 'next/router';

const Error404 = () => {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 className="font-bold text-gray-700 text-4xl">404</h1>
      <div style={{ width: '250px' }}>
        <img src="/images/404 Error-amico.png" alt="404 Not Found" />
      </div>
      <button
        onClick={() => router.back()}
        className="bg-yellow-400 text-white active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:bg-yellow-600 hover:shadow-lg outline-none focus:outline-none mr-1 mt-2 ease-linear transition-all duration-150"
      >
        Kembali
      </button>
    </div>
  );
}

export default Error404;