import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid'
import { HomeIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom";

function Navigation() {

  const location = useLocation();
  const [likesCount, setLikesCount] = useState(2)

  return (
    <>
      {location.pathname === '/' ? 
      <Link to="/liked" className="relative">
        <div className="flex absolute justify-center items-center bg-red-500 rounded-lg w-4 h-4 right-0">
          <p className="text-white font-bold text-xs">{likesCount}</p>
        </div>
        <HeartIcon className="h-8 w-8" />
      </Link>
      : 
      <Link to="/">
        <HomeIcon className="h-8 w-8" />
      </Link>
    }
    </>
  );
}

export default Navigation;