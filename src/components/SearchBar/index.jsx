import React from 'react'
import { BsSearch } from 'react-icons/bs'

function SearchBar() {
    return (
        <div class="search-bar_container">
          
                {/* <BsSearch/> */}
                <input class="input" type="text" placeholder="Tìm kiếm" />
          
        </div>
    )
}

export default SearchBar 