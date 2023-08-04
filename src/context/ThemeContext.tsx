import React from 'react'

const ThemeContext = () => {
  return (
    <div>ThemeContext</div>
  )
}

export default ThemeContext

// // ThemeContext.tsx
// import { createContext, useContext, useState } from 'react';
// import { lightTheme, darkTheme } from './themes';

// interface ThemeContextType {
//   theme: any;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType>({
//   theme: lightTheme,
//   toggleTheme: () => {},
// });

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider: React.FC = ({ children }) => {
//   const [theme, setTheme] = useState(lightTheme);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
