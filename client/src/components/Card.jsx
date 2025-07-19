import React from 'react';
import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={photo}
      alt={prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex justify-center items-center bg-green-700 rounded-full text-white text-sm font-semibold">{name[0]}</div>
          <p className="text-gray-300 text-sm">{name}</p>
        </div>
        <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
          <span className="sr-only">Download Image</span>
          <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
        </button>
      </div>
    </div>


  </div>
);

export default Card;