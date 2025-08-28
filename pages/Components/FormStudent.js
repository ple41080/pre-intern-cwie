import React, { use, useEffect, useState } from 'react'
import { Button, Radio, Card, Space, Input, Table, Tag, Checkbox, Row, Form, Divider, message } from 'antd';
import axiosInstance from '../../service/axios';
import { useRouter } from 'next/router';


export default function FormStudent() {

    const router = useRouter();
    const [studentId, setStudentId] = useState();
    const [messageApi, contextHolder] = message.useMessage();
    const [storeData, setStoreData] = useState();
    const [value, setValue] = useState();
    useEffect(() => {
        const stored = localStorage.getItem("user");
        setValue(stored ? JSON.parse(stored) : undefined);
    }, []);
    useEffect(() => {
        if (value === undefined) return
        setStoreData(value.data)
    }, [value])
 

    // const messageError = () => {
    //     messageApi.open({
    //         type: 'error',
    //         content: 'มีข้อมูลนี้แล้ว',
    //     });
    // }
    const messageSuccess = () => {
        messageApi.open({
            type: 'success',
            content: 'เพิ่มข้อมูลเรียบร้อย',
        });

        setTimeout(() => {
            router.back();
        }, 1500)

    }

    const dataName = [
        {
            key: 'f_academy',
            columnName: '1.ปัจจัยผลต่อการตัดสินใจเข้าศีกษาต่อ',

        },
        {
            key: 'f_a1',
            columnName: '1.1 ความมีชื่อเสียงของมหาวิทยาลัยและเป็นที่ยอมรับของสังคม',
        },
        {
            key: 'f_a2',
            columnName: '1.2 เป็นมหาวิทยาลัยที่จบออกมาแล้วเป็นที่ยอมรับในตลาดแรงงาน',
        },
        {
            key: 'f_a3',
            columnName: '1.3 เป็นมหาวิทยาลัยที่มีความทันสมัยและมีความพร้อมในทุกด้าน',
        },
        {
            key: 'f_a4',
            columnName: '1.4 สถานที่ตั้งของมหาวิทยาลัยเดินทางมาเล่าเรียนสะดวกสบาย',
        },
        {
            key: 'f_a5',
            columnName: '1.5 นักเรียนมีความปรารถนาที่จะเรียนสาขาที่เลือกในมหาวิทยาลัยนี้',
        },
        {
            key: 'f_finance',
            columnName: '2.ปัจจัยด้านการเงิน',
        },
        {
            key: 'f_f1',
            columnName: '2.1 ค่าธรรมเนียมการศึกษา เช่น ค่าหน่วยกิตและค่าลงทะเบียน มีราคาเหมาะสม',
        },
        {
            key: 'f_f2',
            columnName: '2.2 ทุนการศึกษามีผลต่อการตัดสินใจในการเลือกเรียน',
        },
        {
            key: 'f_f3',
            columnName: '2.3 ค่าครองชีพเพียงพอจากผู้ปกครองหรือแหล่งทุน',
        },
        {
            key: 'f_f4',
            columnName: '2.4 ค่าอาหารจากโรงอาหารหรือร้านค้าอื่นๆในมหาวิทยาลัย',
        },
        {
            key: 'f_course',
            columnName: '3.ปัจจัยด้านหลักสูตร',
        },
        {
            key: 'f_c1',
            columnName: '3.1 หลักสูตรที่เปิดสอนเป็นที่นิยม และเป็นที่ต้องการของตลาดแรงงาน ในปัจจุบัน',
        },
        {
            key: 'f_c2',
            columnName: '3.2 คณาจารย์ประจำหลักสูตรได้รับการยอมรับจากภายนอก',
        },
        {
            key: 'f_c3',
            columnName: '3.3 มีห้องเรียนที่ได้มาตรฐานและบรรยากาศดี',
        },
        {
            key: 'f_c4',
            columnName: '3.4 ทักษะ ความรู้ และความสามารถที่นักศึกษาเป็นที่ยอมรับ',
        },
        {
            key: 'f_c5',
            columnName: '3.5 มีความคาดหวังในโอกาสและอาชีพที่รองรับหลังสำเร็จการศึกษา',
        },
        {
            key: 'f_family',
            columnName: '4.ปัจจัยด้านครอบครัว',
        },
        {
            key: 'f_fa1',
            columnName: '4.1 รายได้ของครอบครัวเพียงพอต่อการเรียนตลอดหลักสูตร',
        },
        {
            key: 'f_fa2',
            columnName: '4.2 ครอบครัวสนับสนุนทุกๆด้านของการเข้าศึกษาต่อ',
        },
        {
            key: 'f_fa3',
            columnName: '4.3 ทุนการศึกษา หรือ สิทธิประโยชน์ ที่คาดว่าจะได้รับ',
        },
        {
            key: 'f_society',
            columnName: '5.ปัจจัยทางด้านสังคม',
        },
        {
            key: 'f_s1',
            columnName: '5.1 ความเห็นของเพื่อนในการแนะนำศึกษาต่อ',
        },
        {
            key: 'f_s2',
            columnName: '5.2 ความเห็นของคนรักในการแนะนำศึกษาต่อ',
        },
        {
            key: 'f_s3',
            columnName: '5.3 ความเห็นของคุณครูในการแนะนำศึกษาต่อ',
        },
        {
            key: 'f_s4',
            columnName: '5.4 ความเห็นของครอบครัวในการแนะนำศึกษาต่อ',
        },
        {
            key: 'f_s5',
            columnName: '5.5 ความเห็นของมหาวิทยาลัยในการแนะนำศึกษาต่อ',
        },
    ];

    const columns = [
        {
            title: 'เกณฑ์การประเมิน',
            dataIndex: 'columnName',
            rowSpan: 2,
            onCell: (_, index) => ({
                colSpan: index === 0 ? 27 : 1,
                colSpan: index === 6 ? 27 : 1,

            }),
        },
        {
            title: 'ระดับคะแนน',
            children: [
                {
                    title: '5',

                    render: (text) =>
                        <Form.Item name={text.key} >
                            <Space size="middle">
                                <input type={'radio'} name={text.key} value={5} />
                            </Space>
                        </Form.Item>,
                    onCell: (_, index) => {
                        if (index === 6) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 0) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 11) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 17) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 21) {
                            return {
                                colSpan: 0,
                            };
                        }
                        return {};
                    },
                },
                {
                    title: '4',
                    render: (text) =>
                        <Form.Item name={text.key} key={text.key}>
                            <Space size="middle">
                                <input type={'radio'} name={text.key} value={4} />
                            </Space>
                        </Form.Item>,
                    onCell: (_, index) => {
                        if (index === 6) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 0) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 11) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 17) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 21) {
                            return {
                                colSpan: 0,
                            };
                        }
                        return {};
                    },
                },
                {
                    title: '3',

                    render: (text) =>
                        <Form.Item name={text.key}>
                            <Space size="middle">
                                <input type={'radio'} name={text.key} value={3} />
                            </Space>
                        </Form.Item>,
                    onCell: (_, index) => {
                        if (index === 6) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 0) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 11) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 17) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 21) {
                            return {
                                colSpan: 0,
                            };
                        }
                        return {};
                    },
                },
                {
                    title: '2',

                    render: (text) =>
                        <Form.Item name={text.key}>
                            <Space size="middle">
                                <input type={'radio'} name={text.key} value={2} />
                            </Space>
                        </Form.Item>,
                    onCell: (_, index) => {
                        if (index === 6) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 0) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 11) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 17) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 21) {
                            return {
                                colSpan: 0,
                            };
                        }
                        return {};
                    },
                },
                {
                    title: '1',
                    render: (text) =>
                        <Form.Item name={text.key}>
                            <Space size="middle">
                                <input type={'radio'} name={text.key} value={1} />
                            </Space>
                        </Form.Item>,
                    onCell: (_, index) => {
                        if (index === 6) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 0) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 11) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 17) {
                            return {
                                colSpan: 0,
                            };
                        }
                        if (index === 21) {
                            return {
                                colSpan: 0,
                            };
                        }
                        return {};
                    },
                },],
        },
    ];

    const sendData = (value) => {

        const raw = {
            "f_academy": value.f_academy,
            "f_a1": value.f_a1,
            "f_a2": value.f_a2,
            "f_a3": value.f_a3,
            "f_a4": value.f_a4,
            "f_a5": value.f_a5,
            "f_finance": value.f_finance,
            'f_f1': value.f_f1,
            "f_f2": value.f_f2,
            "f_f3": value.f_f3,
            "f_f4": value.f_f4,
            "f_course": value.f_course,
            "f_c1": value.f_c1,
            "f_c2": value.f_c2,
            "f_c3": value.f_c3,
            "f_c4": value.f_c4,
            "f_c5": value.f_c5,
            "f_family": value.f_family,
            "f_fa1": value.f_fa1,
            "f_fa2": value.f_fa2,
            "f_fa3": value.f_fa3,
            "f_society": value.f_society,
            "f_s1": value.f_s1,
            "f_s2": value.f_s2,
            "f_s3": value.f_s3,
            "f_s4": value.f_s4,
            "f_s5": value.f_s5,
            "f_public_relation": value.f_public_relation,
            "old_school": value.old_school,
            "province": value.province,
            "district": value.district,
            "school_type": value.school_type,
            "grade": value.grade,
            "parents_occupation": value.parents_occupation,
            "earnings": value.earnings,
            "student_id": storeData.id
        }


        axiosInstance.post(`/formQuestion/create`, raw)
            .then((res) => messageSuccess())
            .catch((error) => console.log(error));
    }

    return (
        <>
            {contextHolder}
            <Form onFinish={sendData} className="flex bg-left-bottom bg-gradient-to-t from-red-900 via-red-500 to-yellow-50 min-h-full items-center justify-center pt-12 sm:px-5 md:text-start text-center px-2">

                <card className='bg-white pt-8 w-full lg:mx-36 rounded-3xl'><label className='w-full my-3 text-red-800 md:text-white text-xs md:text-xl md:bg-red-900 md:px-8 py-2 rounded-r-3xl'>ข้อมูลเพิ่มเติมนักศึกษา สหกิจศึกษา</label>
                    <div className=' mt-4 text-center' >
                        <Card className='lg:px-20 bg-slate-50 bg-opacity-50 rounded-3xl mx-4'>
                            <div className='grid grid-cols-8 gap-x-4'>
                                <label className='col-span-8 my-3' style={{ fontSize: 18 }}>ข้อมูลสถานศึกษาเดิม/โรงเรียนเดิม</label>
                                <label className='text-center col-span-8'><hr className="w-48 h-1 mx-auto bg-red-700 border-0 rounded my-2 dark:bg-gray-700" /></label>
                                <div className='col-span-8 sm:col-span-4 text-start'>
                                    <label>ขื่อโรงเรียนเดิม</label>
                                    <Form.Item
                                        name="old_school"
                                        rules={[{ required: true, message: 'กรุณากรอกชื่อโรงเรียน' }]}
                                    >
                                        <Input className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </Form.Item>
                                    {/* <Form.Item name="schoolName"
                            rules={[{ required: true, message: 'กรุณาเลือกชื่อโรงเรียน' }]} label="ขื่อโรงเรียนเดิม">
                            <Select name="schoolName" placeholder="กรุณาเลือก">
                                <Select.Option value="โรงเรียนศรีสงครามวิทยา">โรงเรียนศรีสงครามวิทยา</Select.Option>
                            </Select>
                        </Form.Item> */}
                                </div>

                                <div className='col-span-4 sm:col-span-2 text-start'>
                                    <label>อำเภอ</label>
                                    <Form.Item
                                        name="district"
                                        rules={[{ required: true, message: 'กรุณาเลือกอำเภอ' }]}
                                    >
                                        <Input className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </Form.Item>

                                </div>

                                <div className='col-span-4 sm:col-span-2 text-start'>
                                    <label>จังหวัด</label>
                                    <Form.Item
                                        name="province"
                                        rules={[{ required: true, message: 'กรุณาเลือกจังหวัด' }]}
                                    >
                                        <Input className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </Form.Item>
                                </div>

                                <label className='mt-1 col-span-4 text-end'>สถานศึกษา : </label>
                                <div className='col-span-4 text-start'>
                                    <Form.Item name="school_type"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'กรุณาเลือกสถานศึกษา'
                                            },
                                        ]}>
                                        <Radio.Group id='school_type'>
                                            <Radio className='' value="1"> รัฐบาล</Radio>
                                            <Radio className='' value="2"> เอกชน</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </div>

                                <label className='col-span-4 mt-4 text-end'>เกรดเฉลี่ยสะสมโรงเรียนเดิม : </label>
                                <div className='mt-2 col-span-4 sm:w-1/2 text-start'>
                                    <Form.Item
                                        name="grade"
                                        rules={[{ required: true, message: 'กรุณาเลือกเกรดเฉลี่ยนสะสม' }]}
                                        initialValue={"กรุณาเลือก"}
                                    >
                                        <select id="grade" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="1.50-2.00">1.50-2.00</option>
                                            <option value="2.01-2.50">2.01-2.50</option>
                                            <option value="2.51-3.00">2.51-3.00</option>
                                            <option value="3.51 ขึ้นไป">3.51 ขึ้นไป</option>
                                        </select>
                                    </Form.Item>
                                </div>

                            </div>
                        </Card>
                    </div>


                    <div className='w-full mt-4 text-center' >
                        <Card className='bg-slate-50 bg-opacity-50 rounded-3xl mx-4'>

                            <label className='w-full my-3' style={{ fontSize: 18 }}>ข้อมูลครอบครัว</label>
                            <label className='text-center w-full'><hr className="w-48 h-1 mx-auto bg-red-700 border-0 rounded my-2 dark:bg-gray-700" /></label>
                            <div className='grid grid-cols-2'>
                                <label className='mt-5 pr-5 text-end text-xs sm:text-sm'>อาชีพผู้ปกครอง : </label>
                                <div className='mt-2 w-3/4 sm:w-3/5 lg:w-2/5 text-start'>
                                    <Form.Item
                                        name="parents_occupation"
                                        rules={[{ required: true, message: 'กรุณาเลือกอาชีพของผู้ปกครอง' }]}
                                        initialValue={"กรุณาเลือก"}
                                    >
                                        <select id="occupation" className="bg-white border text-xs sm:text-sm border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="ข้าราชการ">ข้าราชการ</option>
                                            <option value="ลูกจ้างหน่วยงานรัฐ">ลูกจ้างหน่วยงานรัฐ</option>
                                            <option value="พนักงานรัฐวิสาหกิจ">พนักงานรัฐวิสาหกิจ</option>
                                            <option value="พนักงานบริษัทเอกชน">พนักงานบริษัทเอกชน</option>
                                            <option value="เกษตรกรรม">เกษตรกรรม</option>
                                            <option value="ค้าขาย/ประกอบกิจการส่วนตัว">ค้าขาย/ประกอบกิจการส่วนตัว</option>
                                            <option value="รับจ้างทั่วไป">รับจ้างทั่วไป</option>
                                        </select>
                                    </Form.Item>
                                </div>

                                <label className='mt-5 pr-5 text-end text-xs sm:text-sm'>รายได้รวมต่อเดือนของครอบครัว : </label>
                                <div className='mt-2 w-3/4 sm:w-3/5 lg:w-2/5 text-start'>
                                    <Form.Item
                                        name="earnings"
                                        rules={[{ required: true, message: 'กรุณาเลือกจำนวนรายได้ของครอบครัว' }]}
                                        initialValue={'กรุณาเลือก'}
                                    >
                                        <select id="earnings" className="bg-white border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                            <option value="ต่ากว่า 40,000">ต่ากว่า 40,000</option>
                                            <option value="40,001-60,000">40,001-60,000</option>
                                            <option value="8,001-100,000">8,001-100,000</option>
                                            <option value="100,000 ขึ้นไป">100,000 ขึ้นไป</option>
                                        </select>
                                    </Form.Item>
                                </div>

                            </div>
                        </Card>
                    </div>


                    <div className='w-full mt-4 text-center' >
                        <Card className='lg:px-20 bg-slate-50 bg-opacity-50 rounded-3xl mx-4'>
                            <div className='grid grid-cols-1'>
                                <label className='w-full my-3' style={{ fontSize: 18 }}>ปัจจัยผลต่อการตัดสินใจเข้าศีกษาต่อ</label>
                                <label className='w-full my-5' style={{ fontSize: 12 }}>คำชี้แจง โปรดเลือกตัวเลือกที่ท่านคิดว่า เหมาะสมที่สุด
                                    ระดับมากที่สุด = 5&nbsp;&nbsp;&nbsp;ระดับมาก = 4&nbsp;&nbsp;&nbsp;ระดับปานกลาง = 3&nbsp;&nbsp;&nbsp;ระดับน้อย = 2&nbsp;&nbsp;&nbsp;ระดับน้อยที่สุด = 1</label>
                            </div>

                            <Table dataSource={dataName} columns={columns} pagination={false}></Table>



                        </Card>
                        <div className=' mt-4 text-center' >
                            <Card layout="inline" className=' bg-slate-50 bg-opacity-50 rounded-3xl mx-4'>
                                <div className='grid md:grid-cols-2 grid-cols-1'>
                                    <div className='md:mt-20 sm:pl-36 my-3' style={{ fontSize: 16 }}>ปัจจัยการประชาสัมพันธ์เลือกเพียง 1 ข้อ</div>
                                    <div className='text-start '>
                                        <Form.Item name="f_public_relation"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'กรุณาเลือกปัจจัยการประชาสัมพันธ์'
                                                },
                                            ]}>
                                            <Radio.Group>
                                                <Space direction="vertical ">
                                                    <Radio className='' value="รู้จักหลักสูตรผ่าน Facebook คณะหรือสาขา"> รู้จักหลักสูตรผ่าน Facebook คณะหรือสาขา</Radio>
                                                    <Radio className='' value="รู้จักหลักสูตรผ่าน รุ่นพี่"> รู้จักหลักสูตรผ่าน รุ่นพี่</Radio>
                                                    <Radio className='' value="รู้จักหลักสูตรผ่าน เพื่อน"> รู้จักหลักสูตรผ่าน เพื่อน</Radio>
                                                    <Radio className='' value="รู้จักหลักสูตรผ่าน ญาติ พี่น้อง"> รู้จักหลักสูตรผ่าน ญาติ พี่น้อง</Radio>
                                                    <Radio className='' value="รู้จักหลักสูตรผ่านประชาสัมพันธ์คณะ"> รู้จักหลักสูตรผ่านประชาสัมพันธ์คณะ</Radio>
                                                    <Radio className='' value="รู้จักหลักสูตรผ่านประชาสัมพันธ์มหาวิทยาลัย"> รู้จักหลักสูตรผ่านประชาสัมพันธ์มหาวิทยาลัย</Radio>
                                                </Space>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='md:text-center text-end'>
                            <button type="button" className=' justify-items-center shadow bg-stone-50  borber-gradient-to-br text-red-700 hover:bg-yellow-200 hover:text-white hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 my-8 mx-1 px-6 py-2 rounded-2xl'>
                                ยกเลิก
                            </button>
                            <button type="submit" className=' bg-red-700 border-x-yellow-300 border-4 shadow text-white hover:bg-green-400 hover:text-white hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 my-8 mx-1 px-6 py-2 rounded-3xl'>
                                ยืนยัน
                            </button>

                        </div>
                    </div>


                </card>
            </Form>
        </>
    )
}
