import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function SearchBar() {

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value)
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