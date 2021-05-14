import React from 'react';
import { Link } from 'wouter';
import './Gif.css'; 

export default function Gif( {title, url, id} ) {
    return (

        <Link to={`/gif/${id}`} className='Gif'>

            <h2> {title} </h2>
            <img alt={title} src={url} />

        </Link>
    )
}