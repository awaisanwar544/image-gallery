import React, { useState } from 'react';
import Modal from '../components/Modal';

function Liked({imagesList, likedImages, setLikedImages}) {

  const [modal, setModal] = useState(0)

  return (
    <div>
      { modal !== 0 && <Modal setModal={setModal} likedImages={likedImages} image={imagesList.find((item) => item.id === modal)} setLikedImages={setLikedImages} /> }
      <h2 className="my-5 font-bold text-xl">Liked Images</h2>
      <div className="grid grid-cols-4 grid-rows-auto gap-2">
        {likedImages.map(image => {
          return(
            <div className="rounded-lg" key={image.id}>
              <img src={image.webformatURL} className="object-cover h-full w-full rounded-lg cursor-zoom-in z-10" onClick={() => {setModal(image.id)}} alt={image.tags}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Liked;