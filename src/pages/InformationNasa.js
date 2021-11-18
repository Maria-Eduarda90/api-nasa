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
            // const res = await fetch(
            //     `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${apiKey}`
            // );
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

        {/* {photoData.photos && (
            <ul className="animes-list">
              {photoData.photos.map((photo) => (
                <li key={photo.id}>
                    <img src={photo.img_src}/>
                  <p>{photo.camera.full_name}</p>
                </li>
              ))}
            </ul>
        )} */}
            
            <div className="description">
                <h1>{photoData.title}</h1>
                <p>{photoData.explanation}</p>
                <p>{photoData.date}</p>
            </div>
        </C.Container>
    );
}