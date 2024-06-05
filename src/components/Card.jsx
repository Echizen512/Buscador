import React from 'react';

export default function Card({ data }) {
  return (
    <>
      {data.map((value, key) => {
        const genderClass = value.gender === 'male' ? 'bg-blue-500' : 'bg-pink-500';
        const buttonClass = genderClass === 'bg-blue-500' ? 'text-blue-500' : 'text-pink-500'; 
        
        return (
          <article
            key={key}
            className={`${genderClass} w-100 h-100 flex flex-col justify-center rounded-md hover:scale-105 hover:bg-opacity-75 transition ease-in-out duration-500 px-5 py-4`}
          >
            <img
              src={value.picture.large}
              alt="Usuario"
              className="rounded-full object-cover ring-1 ring-white m-4"
              loading="eager"
              draggable={false}
              title={`${value.name.first} ${value.name.last}`}
            />
            <h2 className="text-center font-semibold text-xl mb-2 text-white">
              {value.name.first} {value.name.last}
            </h2>
            <p className="text-center text-white mb-4">{value.location.city}, {value.location.country}</p>
            <button
              className={`bg-white font-bold py-2 px-4 rounded-full hover:text-white transition ease-in-out duration-300 ${buttonClass}`}
            >
              Contactar
            </button>
            
          </article>
        );
      })}
    </>
  );
}
