import { useState, useEffect, FunctionComponent } from 'react';
import LeftSidebar from '../docs/LeftSidebar.astro'
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import './MobileMenu.css';
import LeftSidebarAstro from '../docs/LeftSidebar.astro';


interface MobileMenuProps {
     site?: boolean;
     blog?: boolean;
     doc?: boolean;
}

const variants = {
    visible: { opacity: 1},
    hidden: { opacity: 0 },
}

const container = {
    hidden: { 
        opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: .25
      }
    }
}

const item = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .45
        }
    },
    hidden: {
        y: 10,
        opacity: 0,
    }
}


const MobileMenuInner = () => {
    return (
        <div className="flex" style={{height: '100%', flexDirection: 'column', justifyContent: 'space-between'}}>
        <m.ul 
        variants={container}
        initial="hidden"
        animate="visible">
            <m.li className='mm-list-item' variants={item}><a href="">Overleaf Integration</a></m.li>
            <m.li className='mm-list-item' variants={item}><a href="/docs/quick-start/">Documentation</a></m.li>
            <m.li className='mm-list-item' variants={item}><a href="/blog/">Blog</a></m.li>
        </m.ul>
        <ul className="flex pill" style={{gap: 0}}>
            <li><a href="">Sign-in</a></li>
            <li><a href="">Log-in</a></li>
        </ul>
        </div>
    );
}

const DocsMenuInner = ({ children }) => {
    return (
        <div className='mm-container'>
        {children}
        </div>
    );
}

const BlogMenuInner = ({ children }) => {
    return (
        <ul className='mm-container'>
        {children}
        </ul>
    );
}
 
const MobileMenu: FunctionComponent<MobileMenuProps> = ({ children, site, blog, doc }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open])

    const handleOpen = () => {
        setOpen(!open);
    }

    return ( 
    <>
    <button className="absolute-button" onClick={handleOpen}>
        <div className={open ? 'line rotate-left' : 'line'}></div>
        <div className={open ? 'line rotate-right' : 'line'}></div>
    </button>
    <LazyMotion features={domAnimation}>
    <AnimatePresence>
    {open &&
    <m.div variants={variants} initial="hidden" animate="visible" exit="hidden" className="mobile-menu">
        
        {site &&
        <MobileMenuInner /> 
        }

        {doc &&
        <DocsMenuInner> 
           {children}
        </DocsMenuInner>
        }

        {blog &&
        <BlogMenuInner>
            {children}
        </BlogMenuInner>
        }

    </m.div>
    }
    </AnimatePresence>
    </LazyMotion>
    </>
    );
}
 
export default MobileMenu;