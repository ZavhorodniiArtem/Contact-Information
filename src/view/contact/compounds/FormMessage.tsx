import { Button, Form, Radio } from 'antd';
import CustomInput from '../../../components/customInput';
import Label from '../../../components/label';
import { MessageType } from '../types.ts';

const FormMessage = () => {
  const onFinish = (values: MessageType) => {
    console.log('values:', values);
    alert(
      `Hello ${
        values.firstname || 'user'
      }. In a real project, a request to the server would follow here, but unfortunately I was not provided with endpoints.`,
    );
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      className="mt-[50px] w-full"
    >
      <div className="lg:flex gap-12">
        <div className="w-full">
          <Label label="First Name" />
          <CustomInput name="firstname" />
        </div>

        <div className="w-full">
          <Label label="Last Name" isBold />
          <CustomInput name="lastname" />
        </div>
      </div>

      <div className="lg:flex gap-12 mt-4">
        <div className="w-full">
          <Label label="Email" />
          <CustomInput name="email" />
        </div>

        <div className="w-full">
          <Label label="Phone Number" isBold />
          <CustomInput name="phone" />
        </div>
      </div>

      <div className="mt-4">
        <Label label="Select Subject?" isBold />
        <Form.Item name="subject" className="w-full">
          <Radio.Group className="lg:flex">
            <div className="flex">
              <Radio value={1}>General Inquiry 1</Radio>
              <Radio value={2}>General Inquiry 2</Radio>
            </div>
            <div className="flex">
              <Radio value={3}>General Inquiry 3</Radio>
              <Radio value={4}>General Inquiry 4</Radio>
            </div>
          </Radio.Group>
        </Form.Item>
      </div>

      <div className="mt-11">
        <Label label="Message" />
        <CustomInput name="message" placeholder="Write your message.." />
      </div>

      <Form.Item className="mt-11 flex justify-center md:justify-end">
        <Button
          type="primary"
          htmlType="submit"
          className="bg-black rounded-[5px] px-12 h-14 text-white font-medium text-xl"
        >
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormMessage;
