import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { EffectCreative, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import styles from "../styles/index.module.scss";

const Branding: React.FC = () => {
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

  // Variantes del botón
  const buttonVariants = {
    initial: {
      scale: 1,
      borderColor: "#ffee01", // Borde amarillo por defecto
    },
    hover: {
      scale: 1.05, // Efecto de agrandamiento en hover
    },
    tap: {
      scale: 0.95, // Efecto de reducción cuando se clickea
    },
    open: {
      borderColor: "#0000ff", // Cambiar borde a azul cuando está abierto
    },
    closed: {
      borderColor: "#ffee01", // Mantener borde amarillo cuando está cerrado
    },
  };

  return (
    <>
      <motion.button
        className={styles.buttonBranding}
        onClick={toggleAccordion}
        initial="initial"
        animate={isOpen ? "open" : "closed"}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        style={{ borderWidth: "2px", borderStyle: "solid" }} // Añadido para que se vea el borde
      >
        Branding
      </motion.button>
      <motion.section
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={accordionVariants}
        className={styles.accordion}
      >
        {/* Sección 1 */}
        <motion.div className={styles.branding}>
          <picture>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: false,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              loop={true}
              modules={[EffectCreative, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="/vegeta.jpg"
                  alt="Imagen 1"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/vegeta.jpg"
                  alt="Imagen 1"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/vegeta.jpg"
                  alt="Imagen 1"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
            </Swiper>
          </picture>
          <h2>Sección 1</h2>
          <p>Descripción para la primera sección de branding.</p>
        </motion.div>

        {/* Sección 2 */}
        <motion.div className={styles.branding}>
          <picture>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: false,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              loop={true}
              modules={[EffectCreative, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="/vegeta.jpg"
                  alt="Imagen 1"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/vegeta.jpg"
                  alt="Imagen 1"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/vegeta.jpg"
                  alt="Imagen 1"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
            </Swiper>
          </picture>
          <h2>Sección 2</h2>
          <p>Descripción para la segunda sección de branding.</p>
        </motion.div>

        {/* Sección 3 */}
        <motion.div className={styles.branding}>
          <picture>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: false,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              loop={true}
              modules={[EffectCreative, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="/vegeta.jpg"
                  alt="Imagen 1"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/vegeta.jpg"
                  alt="Imagen 1"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/vegeta.jpg"
                  alt="Imagen 1"
                  width={500}
                  height={300}
                />
              </SwiperSlide>
            </Swiper>
          </picture>
          <h2>Sección 3</h2>
          <p>Descripción para la tercera sección de branding.</p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Branding;