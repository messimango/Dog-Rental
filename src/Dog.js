import React, { useState } from 'react';

const Dog = ({id,image,name,breed,characteristics,coat,house,health,goodw,prefers, removeDog}) => {
    return <article className='each-dog'>
        <img src={image} alt={name}></img>
        <h1>{name}</h1>
        <h2>{breed}</h2>
        <div className='info'>
            <h3>Characteristics: <p>{characteristics}</p></h3> 
            <h3>Coat: <p> {coat}</p></h3>
            <h3>House Trained:  <p>{house}</p></h3>
            <h3>Health: <p>{health}</p></h3> 
            <h3>Good With: <p>{goodw}</p></h3>
            <h3>Doesn't like: <p>{prefers}</p></h3>
        </div>
        <button onClick={() => removeDog(id)} className='intrest'>Not For Me</button>
    </article>
};

export default Dog;