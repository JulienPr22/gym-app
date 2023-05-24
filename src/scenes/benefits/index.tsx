import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  TicketIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import TShirtIcon from "@/asset/Tshirt.svg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import TeeFcsFest from "@/assets/TeeFcsFest.jpg";

import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <TicketIcon className="h-6 w-6" />,
    title: "Entrée Simple",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Entrée T-shirt",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerchildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full bg-primary-300 px-5 py-20 text-gray-10"
    >
      <div>
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          {/* HEADER*/}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:w-3/5">
              <HText>OFFRES</HText>
              <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes
                to get you to your ultimate fitness goals with ease. We provide
                true care into each and every member.
              </p>
            </div>
          </motion.div>
          {/* BENEFITS*/}
          <motion.div
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {benefits.map((benefits: BenefitType) => (
              <Benefit
                key={benefits.title}
                icon={benefits.icon}
                title={benefits.title}
                description={benefits.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
          {/* GRAPHICS AND DESCRIPTION */}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHICS  */}
            <img
              className="mx-auto max-h-96"
              alt="benefits-page-graphic"
              src={TeeFcsFest}
            />

            {/* DESCRIPTION  */}
            <div>
              {/* TITLE  */}
              <div className="relative">
                <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>
                      T-SHIRT <span className="text-primary-500">FCS FEST</span>{" "}
                      1ère édition
                    </HText>
                  </motion.div>
                </div>
              </div>
              {/* DESCRIPTION  */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5">
                  Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                  egestas ultrices consectetur adipiscing ultricies enim.
                  Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt
                  at in nulla nec. Consequat sed facilisis dui sit egestas
                  ultrices tellus. Ullamcorper arcu id pretium sapien proin
                  integer nisl. Felis orci diam odio.
                </p>
                <p className="mb-5">
                  Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel
                  est tellus quam porttitor. Mauris velit euismod elementum arcu
                  neque facilisi. Amet semper tortor facilisis metus nibh.
                  Rhoncus sit enim mattis odio in risus nunc.
                </p>
              </motion.div>
              {/* BUTTON  */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
