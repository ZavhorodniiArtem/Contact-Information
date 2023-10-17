import { useState } from 'react';
import iconMenu from '../../../assets/img/icons/menu.svg';
import iconCancel from '../../../assets/img/icons/cancel.svg';
import iconUser from '../../../assets/img/icons/userWhite.svg';
import iconCard from '../../../assets/img/icons/card.svg';
import Nav from '../../../components/nav';

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  if (!openMenu) {
    return (
      <img
        src={iconMenu}
        alt="menu"
        onClick={() => setOpenMenu(true)}
        className="cursor-pointer"
      />
    );
  }

  return (
    <div className="bg-black w-full h-full z-20 left-0 top-0 fixed">
      <div className="flex justify-between pt-7 px-5">
        <p className="text-white text-[18px] font-extrabold">Logo Here</p>
        <img
          src={iconCancel}
          alt="cancel"
          onClick={() => setOpenMenu(false)}
          className="cursor-pointer"
        />
      </div>

      <div className="mt-14 ml-6">
        <Nav
          classes="text-white flex flex-col gap-[30px]"
          menu
          isCloseMenu={setOpenMenu}
        />
      </div>

      <div className="flex gap-9 absolute bottom-7 left-[calc(50%-53px)]">
        <div className="border-amber-50 border rounded-full p-2 cursor-pointer">
          <img src={iconUser} alt="user" />
        </div>
        <div className="border-amber-50 border rounded-full p-2 cursor-pointer">
          <img src={iconCard} alt="card" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
