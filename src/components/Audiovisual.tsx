import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/index.module.scss";

const Audiovisual: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el acordeón
  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  // Animación del acordeón
  const accordionVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <button className={styles.buttonAudio} onClick={toggleAccordion}>
        AudioVisual
      </button>
      <motion.section
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={accordionVariants}
        className={styles.accordion}
      >
        {/* Sección 1 */}
        <motion.div className={styles.audio}>
          <picture>
            <Image src="/vegeta.jpg" alt="Imagen 1" width={500} height={300} />
          </picture>
          <h2>Sección 1</h2>
          <p>Descripción para la primera sección de branding.</p>
        </motion.div>

        {/* Sección 2 */}
        <motion.div className={styles.audio}>
          <picture>
            <Image src="/vegeta.jpg" alt="Imagen 2" width={500} height={300} />
          </picture>
          <h2>Sección 2</h2>
          <p>Descripción para la segunda sección de branding.</p>
        </motion.div>

        {/* Sección 3 */}
        <motion.div className={styles.audio}>
          <picture>
            <Image src="/vegeta.jpg" alt="Imagen 3" width={500} height={300} />
          </picture>
          <h2>Sección 3</h2>
          <p>Descripción para la tercera sección de branding.</p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Audiovisual;
