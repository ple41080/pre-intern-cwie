import React, { useEffect, useState } from 'react'
import { Form, Input, message } from 'antd';
import { sendToken } from '../../service/token';
import { getStudent } from '../../service/student'
export default function AddTokenForm(props) {
  const [messageApi, contextHolder] = message.useMessage();
  const item = props.data


  const onFinish = async (values) => {
    const stuID = await getStudent(values.studentId)
    if (!stuID.data) {
      messageApi.open({
        type: 'error',
        content: 'รหัสนักศึกษาไม่ถูกต้อง',
      });
    } else {
      const raw = {
        "Token": values.Token,
        "secret_token": item.secret_token,
        "studentId": stuID.data.id
      }
      const sendData = await sendToken(raw);
      console.log(sendData);
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
      if (sendData.data.status === 203) {
        messageApi.open({
          type: 'error',
          content: 'กิจกรรมไม่ถูกต้อง',
        });
      }
      if (sendData.data.status === 204) {
        messageApi.open({
          type: 'error',
          content: 'คุณเข้าร่วมกิจกรรมนี้แล้ว',
        });
      }
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
            name="studentId"
            rules={[
              {
                required: true,
                message: 'Please input studentID!',
              },
            ]}
          >
            <Input placeholder="รหัสนักศึกษา" className="rounded-lg " />
          </Form.Item>
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

          <button type="submit" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ตรวจสอบและเพิ่มข้อมูล</button>

        </div>
      </Form>
    </>

  )
}