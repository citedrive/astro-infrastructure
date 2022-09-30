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
    <li className='react-accordion' aria-expanded="true" style={{marginBottom: ".75rem" }}>
    <header className="flex" style={{"gap": ".25rem" }}>
        <svg className={open ? "arrow" : "arrow accordion-closed"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 12" width="16px"><path d="M12.26,11.74L.4,1.93C-.08,1.53-.13,.84,.27,.38h0C.68-.08,1.4-.13,1.88,.26L13,9.46,24.12,.26c.48-.39,1.19-.34,1.6,.12h0c.41,.46,.35,1.15-.12,1.55L13.74,11.74c-.43,.35-1.05,.35-1.48,0Z"/></svg>
        <h3 style={{marginBottom: 0 }}className="react-accordion-label" onClick={handleClick} role="button">{label}</h3>
    </header>
    <div className={open ? "react-accordion-content expanded" : "react-accordion-content"}>
        { children }
    </div>
    </li>
    )
}   