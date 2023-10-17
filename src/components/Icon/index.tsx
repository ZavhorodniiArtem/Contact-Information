import './styles.scss';
import { IconPropType } from './types.ts';

const Icon = ({ Component, classes }: IconPropType) => {
  return (
    <div className={`${classes} custom-icon`}>
      <Component />
    </div>
  );
};

export default Icon;
