import React from 'react';
import Dog from './Dog';

const Dogs = ({dogs, removeDog}) => {
    return <main>
        <div className='title'>
            <h1>Dogs Avaliable</h1>
            <div className='undertitle'></div>        
        </div>

        <div className='dog-box'>
            {dogs.map((dog) => {
                return <Dog key={dog.id} {...dog} removeDog={removeDog}></Dog>
            }
            )}
        </div>

    </main>
};

export default Dogs;