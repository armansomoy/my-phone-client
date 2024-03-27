import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    console.log(phone);
    return (
        <div>
            <h2>{phone.model}</h2>
        </div>
    );
};

export default Phone; 