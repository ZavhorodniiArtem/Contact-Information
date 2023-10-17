import { HeaderTitlePropsType } from './types.ts';

const HeaderTitle = ({ title, description }: HeaderTitlePropsType) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-black text-[40px] font-bold">{title}</h1>
      <h2 className="text-[#717171] text-[18px] mt-2.5 mb-12 text-center">
        {description || 'Any question or remarks? Just write us a message!'}
      </h2>
    </div>
  );
};

export default HeaderTitle;
