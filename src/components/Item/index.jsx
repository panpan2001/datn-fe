import React from 'react'
import '../../assets/styles/Item.css'
import { motion } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
function Item({ icon, name ,navigate}) {

   const directTo=useNavigate()
//    const handleNavigate=()=>{
//        navigate(navigate)
//    }
    return (
        <motion.div className='item'
        onClick={()=>directTo(navigate)}
        >
            <motion.div className="icon">
                {icon}
            </motion.div>
            <motion.p className='item-name'
            >{name}</motion.p>
        </motion.div>
    )
}

export default Item