import React from 'react';

const ErrorCard = (props) => {
    const { error } = props;
    return (
        <>
            <h1>{error}</h1>
            <div>
                <img src="https://lumiere-a.akamaihd.net/v1/images/62bf0e03e8459d0001f4881b-image_71900d89.jpeg?region=192%2C0%2C1152%2C864&width=960" alt="obiWan" />
            </div>
        </>
    ) 
}

export default ErrorCard
