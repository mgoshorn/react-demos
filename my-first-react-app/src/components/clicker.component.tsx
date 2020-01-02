import React, { useState } from 'react';

/**
 * Clicker component will render a button for clicking and
 * a count of the number of clicks.
 */
const ClickerComponent: React.FC = () => {

    const [num, setNum] = useState(0);
    const [lastClicks, setLastClicks] = useState<number[]>([])



    const handleClick = (amount: number) => {
        updateClicks(amount);
        setNum(num + amount);
    }

    const updateClicks = (newClickValue: number) => {
        // Makes a copy of the state array
        const copy: number[] = [...lastClicks];

        // removes the head of the array if length greater than 5
        if (copy.length >= 5) copy.shift();
        
        // Pushes new value to the tail of the array
        copy.push(newClickValue);

        // Update state with new array
        setLastClicks(copy); 
    }


    // Technically a Stateless function component
    const renderSuperClickButton = () => {
        if (num > 30) {
            return (<button
                        onClick={() => handleClick(5)}
                    >Super Click</button>)
        } else {
            return (<div></div>)
        }
    }

    const getEvenOrOdd: () => 'even' | 'odd' = () => {
        return num % 2 ? 'odd' : 'even';
    } 

    const renderLastClicks = () => {
        return lastClicks.map(num => {return (
            <div className="clicker-entry">{num}</div>
        )})
    }

    return (
        <React.Fragment>
            {/* conditionally manipulating styling */}
            <h2 className={'clicker-heading ' + getEvenOrOdd()}>Clicker!</h2>
            <div id="click-count">{num}</div>
            <button
                onClick={() => handleClick(1)}
            >Click Me</button>
            {/* Conditionally rendering content */}
            {renderSuperClickButton()}

            {/* Rendering arrays of content */}
            {renderLastClicks()}



        </React.Fragment>
    );
};

export default ClickerComponent;