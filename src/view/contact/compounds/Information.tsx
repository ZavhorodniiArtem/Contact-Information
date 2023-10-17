import phone from '../../../assets/img/icons/phone.svg';
import email from '../../../assets/img/icons/email.svg';
import location from '../../../assets/img/icons/location.svg';
import Twitter from '../../../assets/img/icons/twitter.svg?react';
import Discord from '../../../assets/img/icons/discord.svg?react';
import Inst from '../../../assets/img/icons/inst.svg?react';
import ellipse from '../../../assets/img/icons/ellipse.svg';
import circle from '../../../assets/img/icons/circle.svg';
import Icon from '../../../components/Icon';

const Information = () => {
  return (
    <div className="bg-black lg:w-[30%] lg:min-h-[647px] rounded-l-lg rounded-tr-lg p-10 flex flex-col relative">
      <p className="text-white text-[28px] font-semibold text-center lg:text-start">
        Contact Information
      </p>
      <p className="text-[#C9C9C9] text-[18px] mt-1.5 text-center lg:text-start">
        Say something to start a live chat!
      </p>

      <div className="mt-3 mb-14 lg:mb-0 lg:mt-28 flex flex-col items-center lg:items-start">
        <div className="flex flex-col items-center lg:flex lg:flex-row">
          <img src={phone} alt="phone" />
          <p className="text-white text-[16px] ml-6 mt-3 lg:mt-0">
            +1012 3456 789
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex lg:flex-row my-6">
          <img src={email} alt="email" />
          <p className="text-white text-[16px] ml-6">demo@gmail.com</p>
        </div>
        <div className="flex flex-col items-center lg:flex lg:flex-row">
          <img src={location} alt="location" />
          <p
            className="text-white text-[16px] ml-6 z-10 mt-3 lg:mt-0 text-center lg:text-start
          "
          >
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </p>
        </div>
      </div>

      <div className="flex justify-center items-end lg:items-end lg:justify-start h-full z-10 flex-grow">
        <Icon Component={Twitter} />
        <Icon Component={Inst} classes="mx-6" />
        <Icon Component={Discord} />
      </div>

      <img src={ellipse} alt="ellipse" className="absolute bottom-0 right-0" />
      <img
        src={circle}
        alt="circle"
        className="absolute bottom-[70px] right-[70px]"
      />
    </div>
  );
};

export default Information;
