import Nav from '../../../components/nav';
import MobileMenu from '../mobileMenu';

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 lg:px-[100px] pt-5 md:pt-10 pb-20">
      <p className="font-bold text-xl">Logo Here</p>

      <div className="hidden md:block">
        <Nav classes="flex gap-6 lg:gap-12" menu />
      </div>

      <div className="hidden md:block">
        <Nav classes="flex ml-16 gap-12" />
      </div>

      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
