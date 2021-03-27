import { createContext, useState } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {
  const [like, setLike] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  return (
    <Context.Provider value={{ like, setLike, bookmark, setBookmark }}>
      {children}
    </Context.Provider>
  );
}

export default Context;