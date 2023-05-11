import React from 'react';
import AttributeCard from './AttributeCard';

const ThingCard = ({ thing }) => {
  return (
    <>
      <h2>{thing.name}</h2>
      <img height='300' src={thing.image} alt=""/>
      <ul>
        {thing.attributes.map((attribute, idx) =>
          <li key={idx} >{<AttributeCard attribute={attribute} />}</li>  
        )}
      </ul>
      <h3>It's something</h3>
    </>
  );
}
 
export default ThingCard;