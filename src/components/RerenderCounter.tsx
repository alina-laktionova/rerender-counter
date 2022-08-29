import React, {useState} from 'react';

let renderCount = 0;

const RerenderCounter = () => {
    ++renderCount;
    const [state, setState] = useState<boolean>(false)

    return (
        <>
            number of renders: {renderCount}
            <div>
                <button onClick={() => {
                    setState(!state)
                }}>
                    rerender
                </button>
            </div>
        </>
    );
};

export default RerenderCounter;