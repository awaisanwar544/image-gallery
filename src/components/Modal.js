import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

function Modal({setModal , likedImages, image, setLikedImages}) {

  const addToLiked = (img) => {
    setLikedImages([...likedImages, img])
  };

  const removeFromLiked = (img) => {
    const newList = likedImages.filter(item => item.id !== img.id)
    setLikedImages(newList)
  };
  return (
    <div className="flex justify-center overflow-y-auto center bg-gray-800/70 overflow-x-hidden fixed top-0 right-0 left-0 z-40 w-full h-screen">
      <div className="flex flex-col bg-white items-center rounded-lg w-1/2 h-fit mt-32 pb-10">
        <XMarkIcon className="self-end mb-10 p-5 cursor-pointer h-16 w-16" onClick={() => {setModal(0)}} />
        <div className="object-fit relative w-5/6 p-5">
          <img src={image.webformatURL} className="rounded-lg object-cover h-full w-full z-50" alt={image.tags} />
          { likedImages.filter(item => item.id === image.id).length > 0 ?
            <HeartIconSolid className="h-16 w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent hover:text-red-500 cursor-pointer z-80" key={image.id} onClick={() => {removeFromLiked(image)}}/>
          :  
            <HeartIconOutline className="h-16 w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent hover:text-gray-900 cursor-pointer z-80" key={image.id} onClick={() => {addToLiked(image)}}/>
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;