import React from 'react'
import '../../assets/styles/Item.css'
import { motion } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'
function Item({ icon, name }) {

   
    return (
        <motion.div className='item'
            whileHover={{
                backgroundColor: 'rgba(255,255,255,255,0.3)',
                cursor: 'pointer',
                boxShadow: '0 8px 8px 0  var(--border-color)',
                backdropFilter: 'blur(5.5px)',
                WebkitBackdropFilter: 'blur(5.5px)',
                border: '1px solid rgba(255,255,255,0.18)',
            }}
            transition={{
                type: 'none',
                duration: 0.1
            }}
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