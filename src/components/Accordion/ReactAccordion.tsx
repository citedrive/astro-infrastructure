import { useState }  from 'react';
import './accordion.css';

type AccordionProps = {
    children: JSX.Element;
    label: string;
}
 
export default function ReactAccordion({ children, label}: AccordionProps) {
    const [open, setOpen] = useState(false);
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