import React from 'react'
import dayjs from 'dayjs'
import {navLinks, navIcons} from '#constants'
import useWindowStore from '#store/window'


const Navbar = () => {
    const {openWindow} = useWindowStore();
  return (
    <nav>
    <div>
        <img src="/images/logo.svg" alt="logo"/>
        <p className='font-bold' >Dylan's Portfolio</p>

        <ul>
            {navLinks.map(({id, name, type}) => (
                <li onClick={() => openWindow(type)} key={id}>
                <p>{name}</p>
                </li>
            ))}
        </ul>
    </div>
    <div>
        <ul>
            {navIcons.map((icon) => (
                <li key={icon.id}>
                    <img src={icon.img} className='icon-hover' alt={icon.id} />
                </li>
            ))}
        </ul>
        <time>{dayjs().format('ddd MMM D h:mm A')}</time>
    </div>
    </nav>
  )
}

export default Navbar