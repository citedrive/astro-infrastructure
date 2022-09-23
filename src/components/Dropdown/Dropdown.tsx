import { useState } from 'react';
import './Dropdown.css';

type DropdownProps = {
    children: JSX.Element;
}
function Dropdown({children}: DropdownProps) {
    return(
        <div className='dropdown'>{children}</div>
    )
}
type DropdownItemProps = {
    children: JSX.Element;
    label: string;
}

export default function DropdownItem({ children, label }: DropdownItemProps) {
    const [open, setOpen] = useState(false);
    console.log(open);
    const handleClick = () => {
        setOpen(!open);
        console.log(open);
    };
    return(
    <li className='dropdown-li'>
    <button className='dropdown-btn' onClick={handleClick}>{label}</button>
    {open &&
    <Dropdown>
        {children}
    </Dropdown>
    }
    </li>
    )
}   


