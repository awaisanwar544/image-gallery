import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function SearchBar({setImagesList}) {

  const pressEnter = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      const fetchImages = async () => {
        const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${encodeURIComponent(event.target.value)}`);
        const images = await response.json();
        return images;
      }
      fetchImages().then(images => {
        setImagesList(images.hits)
      })
    }
  }

  return (
    <div className="flex flex-row items-center w-1/2 border border-gray-900 rounded-full pl-2 bg-gray-50">
      <div className="pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5" />
      </div>
      <input onKeyDown={pressEnter} className="text-gray-900 text-sm font-bold block w-full bg-transparent pl-10 p-2.5 focus:outline-none" id="search" type="search" placeholder="Search..." autoFocus required />
    </div>
  );
}

export default SearchBar;