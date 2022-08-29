import React, {useState} from 'react';
import './App.css';
import RerenderCounter from "./components/RerenderCounter";

function App() {
    const [state, setState] = useState<boolean>(false)

    return (
        <div className="App">
            <RerenderCounter/>
            <button onClick={() => {setState(!state)}}>
                rerender app
            </button>
        </div>
    );
};

export default App;
