import React, { createContext, useState } from "react";

const ButtonsContext = createContext(null)

function ButtonsProvider({children}) {
    const [buttonPress, setButtonPress] = useState(0)

    const changeButtonPress = (option) => {
        console.log(option);
        setButtonPress(option)
    }

    return (
        <ButtonsContext.Provider value={{buttonPress, setButtonPress, changeButtonPress}} >
            {children}
        </ButtonsContext.Provider>
    )
}

export {ButtonsContext, ButtonsProvider}