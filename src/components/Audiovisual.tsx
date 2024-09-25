import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { EffectCreative, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import styles from "../styles/index.module.scss";

const Audiovisual: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  const accordionVariants = {
    open: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    initial: { scale: 1, borderColor: "#ffee01" },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    open: { borderColor: "#0000ff" },
    closed: { borderColor: "#ffee01" },
  };

  return (
    <>
      <motion.button
        className={styles.buttonAudio}
        onClick={toggleAccordion}
        initial="initial"
        animate={isOpen ? "open" : "closed"}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        style={{ borderWidth: "2px", borderStyle: "solid" }}
      >
        Audiovisual
      </motion.button>
      <motion.section
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={accordionVariants}
        className={styles.accordion}
      >
        <motion.div className={styles.audio}>
          <picture>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: { shadow: false, translate: [0, 0, -400] },
                next: { translate: ["100%", 0, 0] },
              }}
              autoplay={{ delay: 2500, disableOnInteraction: true }}
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
          <p>Descripción para la tercera sección de audiovisual.</p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Audiovisual;
