import React from 'react';

const GlobalContext = React.createContext(({} as any as {
  changeTheme: any,
  themeData:string
}));

export default GlobalContext;