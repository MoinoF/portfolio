import React from 'react';

export const ToogleContext = React.createContext();

export const ToogleStorage = ({children}) => {
  const [toogle, setToogle] = React.useState(false)
  const [menuActive, setMenuActive] = React.useState(false)
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false)

  return (
    <ToogleContext.Provider value={{toogle, setToogle, menuActive, setMenuActive, setError, error}}>
      {children}
    </ToogleContext.Provider>
  )
}