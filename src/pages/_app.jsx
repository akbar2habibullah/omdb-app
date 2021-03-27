import { Provider } from 'context/store';

import "styles/globals.css";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
