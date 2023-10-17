import phone from '../../../assets/img/icons/phone.svg';
import email from '../../../assets/img/icons/email.svg';
import location from '../../../assets/img/icons/location.svg';
import { NavLink } from 'react-router-dom';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';

const Footer = () => {
  const [emailValue, setEmailValue] = useState('');

  const subscribe = () => {
    console.log('email', emailValue);
    alert(`Your email: ${emailValue}`);
  };

  return (
    <div className="bg-black flex flex-col items-center p-5 lg:p-[80px] mt-12">
      <p className="font-extrabold text-[36px] text-white">Logo Here</p>
      <span className="block mt-[45px] mb-5 bg-white h-[1px] w-full" />

      <div className="flex flex-col lg:flex-row justify-between w-full pl-5 gap-16">
        <div className="flex justify-between lg:justify-center gap-10">
          <div className="mt-2.5">
            <p className="text-white font-semibold text-[18px] mb-5">
              Reach us
            </p>
            <div className="flex flex-col md:flex-row items-start">
              <img src={phone} alt="phone" />
              <p className="text-white text-[16px] mt-3 md:mt-0 md:ml-6">
                +1012 3456 789
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start my-6">
              <img src={email} alt="email" />
              <p className="text-white text-[16px] mt-3 md:mt-0 md:ml-6">
                demo@gmail.com
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start">
              <img src={location} alt="location" />
              <p className="text-white text-[16px] mt-3 md:mt-0 md:ml-6">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>

          <div className="mt-2.5">
            <p className="text-white font-semibold text-[18px] mb-5">Company</p>
            <div className="flex flex-col">
              <NavLink to="/about" className="text-white text-[16px]">
                About
              </NavLink>
              <NavLink to="/contact" className="text-white text-[16px] my-6">
                Contact
              </NavLink>
              <NavLink to="/blog" className="text-white text-[16px]">
                Blogs
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex justify-between lg:justify-center gap-10">
          <div className="whitespace-nowrap mt-2.5">
            <p className="text-white font-semibold text-[18px] mb-5">Legal</p>
            <div className="flex flex-col">
              <NavLink to="/" className="text-white text-[16px]">
                Privacy Policy
              </NavLink>
              <NavLink to="/" className="text-white text-[16px] my-6">
                Terms & Services
              </NavLink>
              <NavLink to="/" className="text-white text-[16px]">
                Terms of Use
              </NavLink>
              <NavLink to="/" className="text-white text-[16px] mt-6">
                TRefund Policy
              </NavLink>
            </div>
          </div>

          <div className="whitespace-nowrap mt-2.5">
            <p className="text-white font-semibold text-[18px] mb-5">
              Quick Links
            </p>
            <div className="flex flex-col">
              <NavLink to="/" className="text-white text-[16px]">
                Techlabz Keybox
              </NavLink>
              <NavLink to="/" className="text-white text-[16px] my-6">
                Downloads
              </NavLink>
              <NavLink to="/" className="text-white text-[16px]">
                Forum
              </NavLink>
            </div>
          </div>
        </div>

        <div className="bg-[#131313] rounded-[10px] h-fit p-3.5">
          <p className="text-white font-semibold text-[18px] mb-7">
            Join Our Newsletter
          </p>
          <Space.Compact>
            <Input
              placeholder="Your email address"
              className="bg-[#1E1E1E] text-white outline-0 border-0 p-2 placeholder-[#616161]"
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Button
              type="link"
              size="large"
              className="bg-black text-white font-medium shadow hover:bg-[#1E1E1E]"
              onClick={subscribe}
            >
              Subscribe
            </Button>
          </Space.Compact>
          <p className="text-white text-xs opacity-50 mt-5 p-3">
            * Will send you weekly updates for your better tool management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
