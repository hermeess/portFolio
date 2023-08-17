import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { app } from "../firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Import the specific storage functions

const Hero = () => {
  const handleDownload = async () => {
    try {
      const storage = getStorage(); // Initialize the storage
      const downloadUrl = await getDownloadURL(
        ref(storage, "HermesLimResume.pdf")
      ); // Use the storage functions to get the download URL
      window.open(downloadUrl, "_blank");
    } catch (error) {
      console.error("Error getting download URL:", error);
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-8xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-1 sm:h-80 h-40 yellow-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi , I'm <span className="text-[#7f7f2e]">Hermes</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            I develop interactive, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
        <button
          onClick={handleDownload}
          className="z-10 bg-tertiary mt-5 ml-5 py-3 px-8 outline-non w-fit text-black font-bold shadow-md shadow-primary rounded-xl cursor-pointer"
        >
          Download CV
        </button>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
