import { useState }  from 'react';
import './accordion.css';

type AccordionProps = {
    children: JSX.Element;
    label: string;
    isOpen: boolean;
}
 
export default function ReactAccordion({ children, label, isOpen}: AccordionProps) {
    const [open, setOpen] = useState(isOpen);
    const handleClick = () => setOpen(!open);
    return(
    <li className='react-accordion'aria-expanded="false">
    <h3 className="react-accordion-label" onClick={handleClick} role="button">{label}</h3>
    <div className={open ? "react-accordion-content expanded" : "react-accordion-content"}>
        { children }
    </div>
    </li>
    )
}   