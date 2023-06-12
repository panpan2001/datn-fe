import React from 'react'
import { BsSearch } from 'react-icons/bs'

function SearchBar({width}) {
    return (
        <div className="search-bar_container"
       style={{
           width: `${width}`,
           display:'flex',
           flexDirection:"row",
           gap:"2rem"
       }}
        >
          
                {/* <BsSearch/> */}
                <input className="input" type="text" placeholder="Tìm kiếm" />
                <button className='is-primary button'>Tìm kiếm</button>

        </div>
    )
}

export default SearchBar 