import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import Logo from "@/assets/logoFcsFest.svg";
import AdidasLogo from "@/assets/AdidasLogo.png";
import CaptainMorganLogo from "@/assets/CaptainMorganLogo.png";
import RinceCochonLogo from "@/assets/RinceCochonLogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import Countdown from "./CountDown";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const targetDate = new Date("2023-07-28T00:00:00");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-500 py-10 md:mt-20 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER*/}
      <motion.div
        className=" w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER*/}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings*/}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="logo" src={Logo} />{" "}
              </div>
            </div>
          </motion.div>
          {/* Actions*/}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="unserline hover:text-secondary-color-500 text-sm font-bold text-gray-10"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE*/}
        <div className="basis-/5 flex justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end ">
          <Countdown targetDate={targetDate}></Countdown>

          {/* <img alt="home-page-graphic" src={HomePageGraphic}></img> */}
        </div>
      </motion.div>
      {/* Sponsors*/}
      {isAboveMediumScreens && (
        <div className="h-[160px] w-full bg-gray-20">
          <div className="mx-auto mt-5 w-5/6">
            <div className="flex w-3/6 items-center justify-between gap-16">
              <img
                onClick={() => {
                  window.location.href = "https://www.larincecochon.com/"; // Remplacez l'URL par celle que vous souhaitez rediriger
                }}
                className="max-h-32"
                alt="redBull-sponsor"
                src={AdidasLogo}
              />
              <img
                className="max-h-28"
                alt="forbes-sponsor"
                src={CaptainMorganLogo}
              />
              <img
                className="max-h-32"
                alt="forbes-sponsor"
                src={RinceCochonLogo}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
