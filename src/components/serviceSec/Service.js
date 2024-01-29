import React from 'react'
import "./Service.css"
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoSunnySharp } from 'react-icons/io5';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Service = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
    });

    const variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  return (
    <motion.div
      className="about"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 5 }} // Adjust the duration as needed
    >
      <div className="aboutContainer">
        <h1>Services</h1>
        <hr />
        <p>
        Our business is open to all and sundry; Federal Government, State Government and Local Government.
        </p>
        <div className="aboutChildHolder">
            <div className="aboutChild">
                <div className="childTop"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <MdOutlineSignalCellularAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Clearing & Delivery of Ship -Spares in-transit</h4>
                    <p>
                    As protective agents we ensure that your interests are well taken care of. This helps you avoid any conflict of interest that may arise with many stakeholders involved in a port call.
                    </p>
                </div>
            </div>
            <div className="aboutChild">
                <div className="childTop1"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <IoSunnySharp size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Protective Agency</h4>
                    <p>
                    Our ship agent provides shippers or forwarding agents with transport services and is responsible for facilitating transport for the ship.
                    </p>
                </div>
          </div>
          
          <div className="aboutChild">
                <div className="childTop2"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <FaCalendarAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Consultancy Services</h4>
                    <p>
                    We have the expertise to advice and suggest better trade routes and address other necessary shipping concerns to individuals and corporations engaged in the marine business to help them boost, advance and further their business positively.
                    </p>
                </div>
            </div>
        </div>
        <div className="aboutChildHolder">
            <div className="aboutChild">
                <div className="childTop3"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <MdOutlineSignalCellularAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Supply of Bunkers</h4>
                    <p>
                    Our supply bunkers service guarantees timely and reliable delivery of fuel to vessels worldwide, with strict adherence to environmental regulations and safety standards, and a commitment to customer satisfaction.
                    </p>
                </div>
            </div>
            <div className="aboutChild">
                <div className="childTop4"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <IoSunnySharp size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Vessel Brokerage</h4>
                    <p>
                    Our vessel brokerage services connect buyers and sellers worldwide, providing customized solutions to meet their unique needs, supported by our industry expertise and market knowledge.
                    </p>
                </div>
          </div>
          
          <div className="aboutChild">
                <div className="childTop5"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <FaCalendarAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Ship Husbanding</h4>
                    <p>
                    Our ship husbanding services provide comprehensive support to vessels while in port, from maintenance and repair to crew welfare and provisions, ensuring smooth operations and maximum efficiency.
                    </p>
                </div>
            </div>
        </div>
        <div className="aboutChildHolder">
            <div className="aboutChild">
                <div className="childTop6"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <MdOutlineSignalCellularAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Crew Changes</h4>
                    <p>
                    Our crew change services ensure seamless and timely transitions for crew members, including immigration clearance, transport, accommodation, and logistics, with strict adherence to international regulations and protocols.
                    </p>
                </div>
            </div>
            <div className="aboutChild">
                <div className="childTop7"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <IoSunnySharp size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Managing the Interface between Owners/Managers with Government Agencies</h4>
                    <p>
                    Our interface management services facilitate smooth communication and coordination between owners/managers and government agencies, ensuring compliance with regulations, minimizing risks, and optimizing operations.
                    </p>
                </div>
          </div>
          
          <div className="aboutChild">
                <div className="childTop8"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <FaCalendarAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Clearing & Delivery of Ship-Spares in-transit</h4>
                    <p>
                    Our ship-spare delivery service provides timely and efficient customs clearance and delivery of ship-spares in-transit, minimizing delays and optimizing vessel operations, with a focus on reliability and customer satisfaction.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Service