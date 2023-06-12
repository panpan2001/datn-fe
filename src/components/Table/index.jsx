import React from 'react'

function Table({thead,data}) {
    console.log({thead})
  return (
    <table class="table">
  <thead>
    <tr>
    <th>STT</th>
        {thead && thead.map((item) => (
            <>
                
            <th >{item}</th></>
        
        ))}
      
    
    </tr>
  </thead>
 
  <tbody>
  {data && data.map((item) => (
    <tr className='mb-2'>
    
   
        <>
        <th>{data.indexOf(item)+1}</th>
        <td>{item}</td>
            <button className='button is-link mr-3'>a</button>
            <button className='button is-link'>a</button>

        </>
            
        
    </tr>
   ))}
     
    
  </tbody>
</table>
  )
}

export default Table