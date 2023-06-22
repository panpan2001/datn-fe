import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'

function SearchBar({width, search, setSearch,name}) {
    return (
        <div className="search-bar_container"
       style={{
           width: `${width}`,
        //    display:'flex',
        //    flexDirection:"row",
        //    gap:"2rem"
       }}
        >
          
                {/* <BsSearch/> */}
                <input className="input" type="text" placeholder={name}  onChange={(e) => setSearch(e.target.value)} />
                {/* <button className='is-primary button'>Tìm kiếm</button> */}
                <AiOutlineSearch style={{ position: 'absolute', marginLeft:'-2.5rem', marginTop:'0.25rem',fill:"#dbdbdb"}}/>

        </div>
    )
}

export default SearchBar 