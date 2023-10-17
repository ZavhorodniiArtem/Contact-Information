import { Form, Input } from 'antd';
import { InputFieldType, InputPropType } from './types.ts';

const CustomInput = ({ name, placeholder }: InputPropType) => {
  return (
    <Form.Item<InputFieldType<string>> name={name} className="w-full">
      <Input
        className="outline-0 border-0 border-b rounded-none pl-0"
        placeholder={placeholder || ''}
      />
    </Form.Item>
  );
};

export default CustomInput;
