import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { StudentApi } from '../utils/BaseUrl'

const CheckCompleteInfoMiddware= async (account_id)=> {
try {
    const res= await axios.get(StudentApi+'checkaccount/'+account_id)
    console.log("res.data.parent_name",res.data._id)
     if(res.data._id) return true 
     else  return false

} catch (error) {
    
}
   
}

export default CheckCompleteInfoMiddware