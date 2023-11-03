import { useState } from "react";
import { createContext } from "react";

export const Theme = createContext(null);

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    return (
        <Theme.Provider value={{theme, setTheme}}>
            <div data-theme={theme}>
                {children}
            </div>
        </Theme.Provider>

    );
};

export default ThemeProvider;