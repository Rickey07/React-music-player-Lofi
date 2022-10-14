import React from 'react';
import { faMusic , faTurnUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav({isLibraryActive,setIsLibraryActive}) {
  

  const changeClass = (e) => {
    e.preventDefault();
    if (isLibraryActive) {
      setIsLibraryActive(false)
    } else {
      setIsLibraryActive(true)
    }
  }
  return (
    <nav>
        <div className="container">
            <a href="/" className='brand-name'>ChillTop<FontAwesomeIcon icon={faTurnUp} size="1x"/></a>
            <a href="/" className='button-menu' onClick={changeClass}>Library <FontAwesomeIcon icon={faMusic} size="1x"/></a>
        </div>
    </nav>
  )
}
