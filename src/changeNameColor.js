import React, {useState} from 'react';

const ChangeNameColor = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colorList = ["red", "orange", "green", "blue", "purple"];

    const changeTitle = () => {
        const num = (colorIndex + 1) % colorList.length;
        setColorIndex(num);
    };

    return (
        <button id="nameInBold" onClick={changeTitle}>
            <h3 style={{ color: colorList[colorIndex]}}>Nathan</h3>
        </button>
    );
};

export default ChangeNameColor;