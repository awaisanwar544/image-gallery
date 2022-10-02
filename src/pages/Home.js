import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import React, { useState } from 'react';
import Modal from '../components/Modal';

function Home({imagesList, likedImages, setLikedImages}) {
  
  const [modal, setModal] = useState(0)

  const addToLiked = (img) => {
    setLikedImages([...likedImages, img])
  };

  const removeFromLiked = (img) => {
    const newList = likedImages.filter(item => item.id !== img.id)
    setLikedImages(newList)
  };
  return (
    <div>
      { modal !== 0 && <Modal setModal={setModal} likedImages={likedImages} image={imagesList.find((item) => item.id === modal)} setLikedImages={setLikedImages} /> }
      <div className="grid grid-cols-12 text-center grid-rows-auto gap-2 grid-flow-dense">
        {imagesList.length === 0 ?
        <p className="w-full col-span-12">Type in search and press enter to fetch awsome images collection</p>
        :
        imagesList.map( image => {
          const dimension = image.imageWidth / image.imageHeight;
          const span = () => {
            if(dimension === 1) return 'row-span-2 col-span-2'

            if (dimension < 1 && dimension >= 0.5) return 'row-span-3 col-span-2'

            if (dimension < 0.5) return 'row-span-4 col-span-2'

            if (dimension > 1 && dimension <= 1.5) return 'row-span-2 col-span-3'

            if (dimension > 1.5) return 'row-span-2 col-span-4'
          }

          return(
            <div className={`${span()} rounded-lg relative`} key={image.id}>
              <img src={image.webformatURL} className="object-cover h-full w-full rounded-lg z-10 cursor-zoom-in" alt={image.tags} onClick={() => {setModal(image.id)}}/>
              { likedImages.filter(item => item.id === image.id).length > 0 ?
                <HeartIconSolid className="h-16 w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent hover:text-red-500 cursor-pointer z-20" key={image.id} onClick={() => {removeFromLiked(image)}}/>
              :  
                <HeartIconOutline className="h-16 w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent hover:text-gray-900 cursor-pointer z-20" key={image.id} onClick={() => {addToLiked(image)}}/>
              }
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home;