import { useState, useRef, useEffect, Ref } from 'react';
import './Dropdown.css';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';


type DropdownProps = {
    children: JSX.Element;
}
function DropdownMenu({children}: DropdownProps) {
    return(
        <div className='react-dropdown-menu'>{children}</div>
    )
}
type DropdownItemProps = {
    children: JSX.Element;
    label: string;
}

export default function DropdownItem({ children, label}: DropdownItemProps) {
    const [open, setOpen] = useState(false);
    const itemRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setOpen(!open);
    };

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (!menuRef.current.contains(event.target)) {
    //             setOpen(false);
    //           }
    //         };
    //         document.addEventListener('click', handleClickOutside, true);
    //         return () => {
    //           document.removeEventListener('click', handleClickOutside, true);
    //         };
    // }, [setOpen])

    return(
    <li className='react-dropdown'>
    <button className='react-dropdown-item' ref={itemRef} onClick={handleClick}>{label}</button>
    <LazyMotion features={domAnimation}>
        <AnimatePresence>
            {open &&
                <m.div 
                className='react-dropdown-menu' 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                ref={menuRef}>
                {children}
                </m.div>
            }
        </AnimatePresence>
    </LazyMotion>
    </li>
    )
}   
