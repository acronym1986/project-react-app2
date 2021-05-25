import React, {createContext, useState} from 'react'

const CaseContext = createContext({});


function CaseContextProvider (props) {
    const [cases, setCases] = useState([]);
    return (
        <CaseContext.Provider value = {[cases,setCases]}>
            {props.children}
        </CaseContext.Provider>
    )
}

export {CaseContext, CaseContextProvider};