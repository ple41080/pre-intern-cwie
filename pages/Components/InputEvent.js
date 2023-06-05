import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Radio, Card, Select, } from 'antd';


export default function InputEvent() {
    return (
        <div className="flex min-h-full items-center justify-center mt-6 sm:px-6 lg:px-8">
            <Card style={{ width: "90%" }}>
                <Form
                    layout="inline"
                    name='registerForm'
                    action='#'
                >
                    <div className='w-full sm:w-2/4 mt-2'>
                        <label htmlFor="nameEvent">ชื่อกิจกรรม</label>
                        <Form.Item
                            name="nameEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่ชื่อกิจกรรม'
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/4'>
                        <label htmlFor="peopleEvent">จำนวนที่รับ</label>
                        <Form.Item
                            name="poepleEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่จำนวนผู้เข้าร่วม'
                                },
                            ]}
                        >
                            <Input type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/4'>
                        <label htmlFor="houreEvent">จำนวนชั่วโมง</label>
                        <Form.Item
                            name="houreEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่จำนวนชั่วโมง'
                                },
                            ]}
                        >
                            <Input type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className=' mt-2 w-full sm:w-1/4'>
                        <label>ระดับกิจกรรม</label>
                        <Form.Item
                            name="levelEvent"
                            rules={[{ required: true, message: 'กรุณาเลือกระดับกิจกรรม' }]}
                        >
                            <select id="levelEvent" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected disabled>เลือกระดับกิจกรรม</option>
                                <option value="facultyM">คณะ</option>
                                <option value="branchM">สาขา</option>
                            </select>
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-2/4'>
                        <label>สาขา</label>
                        <Form.Item
                            name="courseEvent"
                            rules={[{ required: true, message: 'กรุณาเลือกสาขา' }]}
                        >
                            <select id="courseEvent" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์">วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์</option>
                                <option value="วิศวกรรมการออกแบบและผลิต">วิศวกรรมการออกแบบและผลิต</option>
                                <option value="วิศวกรรมการจัดการอุตสาหกรรม">วิศวกรรมการจัดการอุตสาหกรรม</option>
                                <option value="วิศวกรรมโยธาและบริหารงานก่อสร้าง">วิศวกรรมโยธาและบริหารงานก่อสร้าง</option>
                                <option value="อุตสาหกรรมศิลป์">อุตสาหกรรมศิลป์</option>
                            </select>
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/4'>
                        <label>ปีการศึกษา</label>
                        <Form.Item
                            name="yearEvent"
                            rules={[{ required: true, message: 'กรุณาเลือกสาขา' }]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='w-full sm:w-3/4 mt-2'>
                        <label htmlFor="placeEvent">สถานที่จัดกิจกรรม</label>
                        <Form.Item
                            name="placeEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่ชื่อสถานที่',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='w-full sm:w-1/4 mt-2'>
                        <label htmlFor="placeEvent">ภาคเรียนที่</label>
                        <Form.Item
                            name="placeEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่ชื่อสถานที่',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="startDEvent">วันที่เริ่มกิจกรรม</label>
                        <Form.Item
                            name="startDEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่วันที่เริ่มกิจกรรม'
                                },
                            ]}
                        >
                            <Input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="endDEvent">วันที่สิ้นสุดกิจกรรม</label>
                        <Form.Item
                            name="endDEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่วันที่สิ้นสุดกิจกรรม'
                                },
                            ]}
                        >
                            <Input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="startTEvent">เวลาเริ่มกิจกรรม</label>
                        <Form.Item
                            name="startTEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่เวลาเริ่มกิจกรรม'
                                },
                            ]}
                        >
                            <Input type='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="endTEvent">เวลาสิ้นสุดกิจกรรม</label>
                        <Form.Item
                            name="endTEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่เวลาสิ้นสุดกิจกรรม'
                                },
                            ]}
                        >
                            <Input type='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="endDToken">วันที่ปิดรับ token </label>
                        <Form.Item
                            name="endDToken"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่วันที่ปิดรับ Token'
                                },
                            ]}
                        >
                            <Input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="endTToken">เวลาปิดรับ token </label>
                        <Form.Item
                            name="endTToken"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่เวลาที่ปิดรับ Token'
                                },
                            ]}
                        >
                            <Input type='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='w-full mt-4 text-center'>
                        <Card>
                        <label>จำนวน Token</label>
                        <Form.Item  
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาเลือกจำนวน Token'
                                },
                            ]}>
                            <Radio.Group>
                                <Radio value="1"> 1 Token </Radio>
                                <Radio value="2"> 2 Token</Radio>
                            </Radio.Group>
                        </Form.Item>
                        </Card>
                    </div>
                </Form>
            </Card></div>
    )
}