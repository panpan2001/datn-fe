import React from 'react'

function FilterCategory({ title, filter, setFilter, list }) {

  return (
    <div className="column "
      style={{ display: "flex", flexDirection: 'column' , minHeight: '20vh'}}
    >
      <strong className='is-size-5 mb-2' style={{ textAlign: "left" }}>{title}</strong>
      <div className=" field select ">
        <select 
        style={{ width: "17rem" }}
         onChange={(e) => setFilter(e.target.value)} >
          <option value="">{title}</option>
          {list.map(item => (
            <option value={item.name}
           
            >{item.name}</option>
          ))}

        </select>
      </div>
    </div>
  )
}

export default FilterCategory 