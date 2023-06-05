import React, { useEffect, useState } from 'react'
import { Form, Input, message } from 'antd';
import { sendToken } from '../../service/token';

export default function SimpleForm(props) {
  const [storeData, setStoreData] = useState();
  const [value, setValue] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const item = props.data
  useEffect(() => {
    const stored = localStorage.getItem("user");
    setValue(stored ? JSON.parse(stored) : undefined);
  }, []);
  useEffect(() => {
    if (value === undefined) return
    setStoreData(value.data)
  }, [value])
  const onFinish = async (values) => {
    const raw = {
      "Token": values.Token,
      "secret_token": item.secret_token,
      "studentId": storeData.id
    }
    const sendData = await sendToken(raw);
    
    if (sendData.data.status === 200) {
      messageApi.open({
        type: 'success',
        content: 'เพิ่มข้อมูลเรียบร้อย',
      });
    }
    if (sendData.data.status === 201) {
      messageApi.open({
        type: 'error',
        content: 'Token หมดอายุ',
      });
    }
    if (sendData.data.status === 202) {
      messageApi.open({
        type: 'error',
        content: 'Token นี้ถูกใช้ไปแล้ว',
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className='w-full'>
          <Form.Item
            name="Token"
            rules={[
              {
                required: true,
                message: 'Please input your TokenKey!',
              },
            ]}
          >
            <Input placeholder="กรุณากรอก Token Key" className="rounded-lg " />
          </Form.Item>

          <button htmlType="submit" type="submit" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ตรวจสอบและเพิ่มข้อมูล</button>

        </div>
      </Form>
    </>

  )
}