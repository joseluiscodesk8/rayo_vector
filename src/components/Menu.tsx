import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { CgMenuGridR } from 'react-icons/cg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; 
import styles from '../styles/index.module.scss';

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Image 
          src="/ichip-01.png"  
          alt="Logo"
          width={50}  
          height={50}
          priority  
        />
      </div>

    
      <div className={styles.icon} onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} /> : <CgMenuGridR size={30} />}
      </div>


      <motion.nav
        className={styles.nav}
        initial={{ top: '-100%' }}
        animate={{ top: menuOpen ? '0' : '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <ul>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link href="/portafolio">Portafolio</Link>
          </li>
          <li>
            <Link href="/clientes">Clientes</Link>
          </li>
          <li>
            <Link href="/unete">Únete</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Menu;
