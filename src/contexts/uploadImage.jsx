import axios from 'axios'
const uploadImage= async(image)=>{
    if(image){
        const formData= new FormData()
        // console.log("image[0]",image[0])
        formData.append('file', image[0])
        formData.append('upload_preset', 'DATN_FE')
        formData.append('cloud_name', 'djt76m22x')
        await axios.post('https://api.cloudinary.com/v1_1/djt76m22x/image/upload', formData,{
          header:{
            'Allowed-Origin': '*',
            "Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, PATCH, OPTIONS" 
          }
        })
        .then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      }
      else return ;
}

export default uploadImage