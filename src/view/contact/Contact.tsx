import HeaderTitle from '../../components/headerTitle';
import letter from '../../assets/img/letter.svg';
import Information from './compounds/Information.tsx';
import FormMessage from './compounds/FormMessage.tsx';

const Contact = () => {
  return (
    <div className="flex flex-col">
      <HeaderTitle title="Contact us" />

      <div className="bg-white p-2.5 lg:mx-32 md:flex rounded-xl shadow-lg">
        <Information />

        <div className="mx-12 md:w-[70%] relative">
          <FormMessage />

          <img
            src={letter}
            alt="letter"
            className="absolute -bottom-12 right-24 hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
