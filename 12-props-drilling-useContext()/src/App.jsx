import './App.css'
import ComponentA from "./components/props-drillling/ComponentA.jsx";
import React, {useState} from "react";
import ComponentOne from "./components/context-api/ComponentOne.jsx";

export const AppContext = React.createContext({});

function App() {
    const [appData, setAppData] = useState({
        appName: "Amazon E-Commerce",
        version: "1.0.1"
    });

    const valueObj = {
        appData: appData,
        setAppData: setAppData
    };

    return (
        <>
            {/*<ComponentOne appData={appData}/>*/}

            <pre>{JSON.stringify(appData)}</pre>
            
            <AppContext.Provider value={valueObj}>
                <ComponentOne/>
            </AppContext.Provider>

        </>
    )
}

export default App
