import React, { useEffect } from 'react'
import { AiOutlineMenu, AiOutlineMenuFold } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/dummy'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({title, customFunc, icon, color, dotColor}) => {
    <TooltipComponent content={title} position="BottomCenter">
        <button type='button' title={title} onClick={customFunc} style={{color}}></button>
    </TooltipComponent>
}

const Navbar = () => {
    const {ativeMenu, setActiveMenu} = useStateContext()
    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton title='Menu' customFunc={()=> setActiveMenu((prevMenuState) => !prevMenuState)} color="blue" icon={<AiOutlineMenu />} />
        </div>
    )
}

export default Navbar