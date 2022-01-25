import * as C from '../styles/pages/informationNasa';

import { useState, useEffect } from 'react';
const apiKey = process.env.REACT_APP_NASA_KEY;

export const InformationNasa = () => {
    const [ photoData, setPhotoData ] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );

            const data = await res.json();
            console.log(data);
            setPhotoData(data);
        }
    }, [])

    if(!photoData) return <div/>

    return(
        <C.Container>
            <div>
            {photoData.media_type === "image" ? (
                <img className="photo" src={photoData.url} alt={photoData.title}/>
            ) : (
                <iframe title="space-video"
                 src={photoData.url}
                 frameBorder="0"
                 gesture="media"
                 allow="encrypted-media"
                 allowFullScreen
                 className="photo"
                />
            )}
            </div>
            
            <div className="description">
                <h1>{photoData.title}</h1>
                <p>{photoData.explanation}</p>
                <p>{photoData.date}</p>
            </div>
        </C.Container>
    );
}
