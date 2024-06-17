import React, { useState } from 'react';

const Elements = ({ fruits }) => {
    // State to manage active items (for tracking which items are active)
    const [activeItems, setActiveItems] = useState([]);

    // Function to handle clicking on the change button
    const onChangeButton = (fruit) => {
        // Toggle the active state of the fruit
        if (activeItems.includes(fruit)) {
            setActiveItems(activeItems.filter(item => item !== fruit)); // Remove from active items
        } else {
            setActiveItems([...activeItems, fruit]); // Add to active items
        }
    };

    /*
    - Manages a list of fruits passed as props.
    - Uses useState to manage activeItems for tracking which fruits are active(background color set to yellow).
    - Added onChangeButton function to toggle the active state of fruits.
    - Maps over fruits array and renders each fruit with a "Change" button.
    - Background color of each fruit item changes to yellow if it is in activeItems.
     */

    return (
        <div>
            {fruits.map((fruit, index) => (
                <div key={index} style={{ backgroundColor: activeItems.includes(fruit) ? 'yellow' : 'white', color: 'black' }}>
                    <p>{fruit}</p>
                    <button onClick={() => onChangeButton(fruit)}>Change</button>
                </div>
            ))}
        </div>
    );
};

export default Elements;
