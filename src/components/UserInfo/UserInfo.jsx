import React from 'react';
import './UserInfo.css';
import ubicacion from './Location.svg'

export const UserInfo = () => {
  return (
    <section class="flex items-center justify-center h-screen">
    <img src="https://thispersondoesnotexist.com/" alt="User-Profile-Photo" class="User-photo"/>
    <div class="ml-4">
      <h2 class="text-xl font-semibold text-gray-900">ALEX G</h2>
      <h4 class="mt-1 mb-1">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit.</h4>
      <img src={ubicacion} alt="Location Icon" class="Location-icon" /> 
    </div>
  </section> 
  );
};
