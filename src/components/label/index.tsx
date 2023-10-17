import { LabelPropType } from './types.ts';

const Label = ({ label, isBold }: LabelPropType) => {
  return (
    <label className={`${isBold ? 'font-medium' : 'text-[#8D8D8D]'} mb-1.5`}>
      {label}
    </label>
  );
};

export default Label;
