import { motion } from "framer-motion";

import "./styles.css";
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";

const Contact = () => {
  return (
    <div className="page contact">
      <Title delay={0.75}>Contact</Title>
      <Body delay={0.75}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nemo
        facere commodi ipsum labore. Officia, quia ullam exercitationem iure
        sapiente suscipit architecto voluptatum eaque itaque molestiae
        recusandae, cum mollitia, blanditiis error nihil sunt. Doloremque
        tempore quibusdam aperiam sed aut minus nulla quisquam ex nihil.
        Molestiae neque reprehenderit cumque laudantium quo!
      </Body>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{
          y: "100%",
        }}
        transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }} // Cubic bezier curve for easing
        className="slide"
      />
      <motion.div
        animate={{
          width: "0",
          height: "0",
          borderRadius: "100%",
        }}
        exit={{
          width: "100%",
          height: "100%",
          borderRadius: "0",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="circle"
      />
    </div>
  );
};

export default Contact;
