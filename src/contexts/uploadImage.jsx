import axios from 'axios'
import { UPLOAD_IMG_URL } from '../utils/BaseUrl'
const uploadImage= async(image)=>{
    if(image){
        const formData= new FormData()
        formData.append('file', image[0])
        formData.append('upload_preset', 'DATN_FE')
        formData.append('cloud_name', 'djt76m22x')
        // formData.append('folder', 'DATN_FE')
        try {
          const res= await axios.post(UPLOAD_IMG_URL, formData,{
            header:{
              'Allowed-Origin': '*',
              "Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, PATCH, OPTIONS" 
            }})
          return res.data.url
        } catch (error) {
          console.log(error)
        }
        
        
        
      }
      else return ;
}

export default uploadImage