import { radio } from '@material-tailwind/react';
import { Button, Form, Radio, Card, Space, Input } from 'antd';
import FormStudent from '../Components/FormStudent';
export default function InputEvent() {
    return (
        <Form className="flex bg-left-bottom bg-gradient-to-t from-red-900 via-red-500 to-yellow-50 min-h-full items-center justify-center pt-12 sm:px-5 md:text-start text-center px-2">

            <card className='bg-white pt-8 w-full lg:mx-36 rounded-3xl'><label className='w-full my-3 text-red-800 md:text-white text-xs md:text-xl md:bg-red-900 md:px-8 py-2 rounded-r-3xl'>ข้อมูลเพิ่มเติมนักศึกษา สหกิจศึกษา</label>
                <div className=' mt-4 text-center' >
                    <Card className='lg:px-20 bg-slate-50 bg-opacity-50 rounded-3xl mx-4'>
                        <div className='grid grid-cols-8 gap-x-4'>
                            <label className='col-span-8 my-3' style={{ fontSize: 18 }}>ข้อมูลสถานศึกษาเดิม/โรงเรียนเดิม</label>
                            <label className='text-center col-span-8'><hr className="w-48 h-1 mx-auto bg-red-700 border-0 rounded my-2 dark:bg-gray-700" /></label>
                            <div className='col-span-8 sm:col-span-4 text-start'>
                                <label>ขื่อโรงเรียนเดิม</label>
                                <Form.Item
                                    name="schoolName"
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
                                <Form.Item name="academy"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'กรุณาเลือกสถานศึกษา'
                                        },
                                    ]}>
                                    <Radio.Group id='academy'>
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
                                >
                                    <select id="grade" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected >กรุณาเลือก</option>
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
                                    name="occupation"
                                    rules={[{ required: true, message: 'กรุณาเลือกอาชีพของผู้ปกครอง' }]}
                                >
                                    <select id="occupation" className="bg-white border text-xs sm:text-sm border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected className=' text-gray-500' >กรุณาเลือก</option>
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
                                    name="income"
                                    rules={[{ required: true, message: 'กรุณาเลือกจำนวนรายได้ของครอบครัว' }]}
                                >
                                    <select id="income" className="bg-white border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected className=' text-gray-500' >กรุณาเลือก</option>
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
                            <div className='grid grid-cols-1 mb-3'>
                            <label className='text-start px-5 w-8/12 sm:w-1/2 md:w-2/6 lg:w2/6 pr-5 bg-red-800 rounded-t-lg pl-5 text-white'>ปัจจัยด้านสถาบันการศึกษา</label></div>
                            <table className="table-auto w-full">
                                <thead className='border-b'>
                                    <tr>
                                        <th className=' w-1/12 text-xs sm:text-sm'>ลำดับ</th>
                                        <th className=' w-6/12 text-xs sm:text-sm sm:mt-auto mt-11' >ปัจจัยผลต่อการตัดสินใจเข้าศีกษา</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >5</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >4</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >3</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >2</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >1</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white'>
                                    <tr className='bg-stone-50' rules={[{ required: true, message: 'กรุณาเลือก' }]}>
                                        <td>1</td>
                                        <td className='text-start'>ความมีชื่อเสียงของมหาวิทยาลัยและเป็นที่ยอมรับของสังคม</td>
                                        <td><input required id="radio-1" type="radio" value="5" name="radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.1" type="radio" value="4" name="radio1.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.1" type="radio" value="3" name="radio1.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.1" type="radio" value="2" name="radio1.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.1" type="radio" value="1" name="radio1.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className='text-start'>เป็นมหาวิทยาลัยที่จบออกมาแล้วเป็นที่ยอมรับในตลาดแรงงาน</td>
                                        <td><input required id="radio-2.1" type="radio" value="" name="radio2.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.1" type="radio" value="" name="radio2.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.1" type="radio" value="" name="radio2.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.1" type="radio" value="" name="radio2.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.1" type="radio" value="" name="radio2.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr className='bg-stone-50'>
                                        <td>3</td>
                                        <td className='text-start'>เป็นมหาวิทยาลัยที่มีความทันสมัยและมีความพร้อมในทุกด้าน</td>
                                        <td><input required id="radio-3.1" type="radio" value="" name="radio3.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.1" type="radio" value="" name="radio3.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.1" type="radio" value="" name="radio3.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.1" type="radio" value="" name="radio3.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.1" type="radio" value="" name="radio3.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td className='text-start'>สถานที่ตั้งของมหาวิทยาลัยเดินทางมาเล่าเรียนสะดวกสบาย</td>
                                        <td><input required id="radio-4.1" type="radio" value="" name="radio4.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.1" type="radio" value="" name="radio4.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.1" type="radio" value="" name="radio4.1." className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.1" type="radio" value="" name="radio4.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.1" type="radio" value="" name="radio4.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr className='bg-stone-50'>
                                        <td>5</td>
                                        <td className='text-start'>นักเรียนมีความปรารถนาที่จะเรียนสาขาที่เลือกในมหาวิทยาลัยนี้ เพราะพ่อ แม่ และผู้ปกครองจบจากมหาวิทยาลัยนี้ หรือ เพื่อนๆ ชักชวน</td>
                                        <td><input required id="radio-5.1" type="radio" value="" name="radio5.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.1" type="radio" value="" name="radio5.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.1" type="radio" value="" name="radio5.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.1" type="radio" value="" name="radio5.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.1" type="radio" value="" name="radio5.1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                </tbody>
                            </table>

                            <label className='text-center w-full'><hr className="w-48 h-1 mx-auto bg-stone-400 border-0 rounded my-4 dark:bg-gray-700" /></label>
                            <div className='grid grid-cols-1 mb-3'>
                            <label className='text-start px-5 w-7/12 sm:w-1/2 md:w-1/4 lg:w2/6 bg-red-800 rounded-t-lg text-white'>ปัจจัยด้านการเงิน</label>
                            </div>
                            <table className="table-auto w-full">
                                <thead className='border-b'>
                                    <tr>
                                        <th className=' w-1/12 text-xs sm:text-sm'>ลำดับ</th>
                                        <th className=' w-6/12 text-xs sm:text-sm' >ปัจจัยผลต่อการตัดสินใจเข้าศีกษา</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >5</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >4</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >3</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >2</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >1</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white'>
                                    <tr className='bg-stone-50'>
                                        <td>1</td>
                                        <td className='text-start'>ค่าธรรมเนียมการศึกษา เช่น ค่าหน่วยกิตและค่าลงทะเบียน มีราคาเหมาะสม</td>
                                        <td><input required id="radio-1.2" type="radio" value="5" name="radio1.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.2" type="radio" value="4" name="radio1.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.2" type="radio" value="3" name="radio1.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.2" type="radio" value="2" name="radio1.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.2" type="radio" value="1" name="radio1.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className='text-start'> ทุนการศึกษามีผลต่อการตัดสินใจในการเลือกเรียน</td>
                                        <td><input required id="radio-2.2" type="radio" value="" name="radio2.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.2" type="radio" value="" name="radio2.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.2" type="radio" value="" name="radio2.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.2" type="radio" value="" name="radio2.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.2" type="radio" value="" name="radio2.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr className='bg-stone-50'>
                                        <td>3</td>
                                        <td className='text-start'>ค่าครองชีพเพียงพอจากผู้ปกครองหรือแหล่งทุน</td>
                                        <td><input required id="radio-3.2" type="radio" value="" name="radio3.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.2" type="radio" value="" name="radio3.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.2" type="radio" value="" name="radio3.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.2" type="radio" value="" name="radio3.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.2" type="radio" value="" name="radio3.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td className='text-start'>ค่าอาหารจากโรงอาหารหรือร้านค้าอื่นๆในมหาวิทยาลัย</td>
                                        <td><input required id="radio-4.2" type="radio" value="" name="radio4.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.2" type="radio" value="" name="radio4.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.2" type="radio" value="" name="radio4.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.2" type="radio" value="" name="radio4.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.2" type="radio" value="" name="radio4.2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                </tbody>
                            </table>

                            <label className='text-center w-full'><hr className="w-48 h-1 mx-auto bg-stone-400 border-0 rounded my-4 dark:bg-gray-700" /></label>
                            <div className='grid grid-cols-1 mb-3'>
                            <label className='text-start px-5 w-7/12 sm:w-1/2 md:w-1/4 lg:w2/6 bg-red-800 rounded-t-lg text-white'>ปัจจัยด้านหลักสูตร</label>
                            </div>
                            <table className="table-auto w-full">
                                <thead className='border-b'>
                                    <tr>
                                        <th className=' w-1/12 text-xs sm:text-sm'>ลำดับ</th>
                                        <th className=' w-6/12 text-xs sm:text-sm' >ปัจจัยผลต่อการตัดสินใจเข้าศีกษา</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >5</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >4</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >3</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >2</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >1</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white'>
                                    <tr className='bg-stone-50'>
                                        <td>1</td>
                                        <td className='text-start'>หลักสูตรที่เปิดสอนเป็นที่นิยม และเป็นที่ต้องการของตลาดแรงงาน ในปัจจุบัน</td>
                                        <td><input required id="radio-1.3" type="radio" value="5" name="radio1.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.3" type="radio" value="4" name="radio1.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.3" type="radio" value="3" name="radio1.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.3" type="radio" value="2" name="radio1.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.3" type="radio" value="1" name="radio1.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className='text-start'>คณาจารย์ประจำหลักสูตรได้รับการยอมรับจากภายนอก</td>
                                        <td><input required id="radio-2.3" type="radio" value="" name="radio2.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.3" type="radio" value="" name="radio2.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.3" type="radio" value="" name="radio2.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.3" type="radio" value="" name="radio2.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.3" type="radio" value="" name="radio2.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr className='bg-stone-50'>
                                        <td>3</td>
                                        <td className='text-start'>มีห้องเรียนที่ได้มาตรฐานและบรรยากาศดี</td>
                                        <td><input required id="radio-3.3" type="radio" value="" name="radio3.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.3" type="radio" value="" name="radio3.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.3" type="radio" value="" name="radio3.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.3" type="radio" value="" name="radio3.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.3" type="radio" value="" name="radio3.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td className='text-start'>ทักษะ ความรู้ และความสามารถที่นักศึกษาเป็นที่ยอมรับ</td>
                                        <td><input required id="radio-4.3" type="radio" value="" name="radio4.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.3" type="radio" value="" name="radio4.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.3" type="radio" value="" name="radio4.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.3" type="radio" value="" name="radio4.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.3" type="radio" value="" name="radio4.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr className='bg-stone-50'>
                                        <td>5</td>
                                        <td className='text-start'>มีความคาดหวังในโอกาสและอาชีพที่รองรับหลังสำเร็จการศึกษา</td>
                                        <td><input required id="radio-5.3" type="radio" value="" name="radio5.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.3" type="radio" value="" name="radio5.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.3" type="radio" value="" name="radio5.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.3" type="radio" value="" name="radio5.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.3" type="radio" value="" name="radio5.3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                </tbody>
                            </table>

                            <label className='text-center w-full'><hr className="w-48 h-1 mx-auto bg-stone-400  border-0 rounded my-4 dark:bg-gray-700" /></label>
                            <div className='grid grid-cols-1 mb-3'>
                            <label className='text-start px-5 w-7/12 sm:w-1/2 md:w-1/4 lg:w2/6 bg-red-800 rounded-t-lg text-white' >ปัจจัยด้านครอบครัว</label>
                            </div>
                            <table className="table-auto w-full">
                                <thead className='border-b'>
                                    <tr>
                                        <th className=' w-1/12 text-xs sm:text-sm'>ลำดับ</th>
                                        <th className=' w-6/12 text-xs sm:text-sm' >ปัจจัยผลต่อการตัดสินใจเข้าศีกษา</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >5</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >4</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >3</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >2</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >1</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white'>
                                    <tr className='bg-stone-50'>
                                        <td>1</td>
                                        <td className='text-start'>รายได้ของครอบครัวเพียงพอต่อการเรียนตลอดหลักสูตร</td>
                                        <td><input required id="radio-1.4" type="radio" value="5" name="radio1.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.4" type="radio" value="4" name="radio1.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.4" type="radio" value="3" name="radio1.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.4" type="radio" value="2" name="radio1.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.4" type="radio" value="1" name="radio1.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className='text-start'>ครอบครัวสนับสนุนทุกๆด้านของการเข้าศึกษาต่อ</td>
                                        <td><input required id="radio-2.4" type="radio" value="" name="radio2.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.4" type="radio" value="" name="radio2.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.4" type="radio" value="" name="radio2.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.4" type="radio" value="" name="radio2.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.4" type="radio" value="" name="radio2.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr className='bg-stone-50'>
                                        <td>3</td>
                                        <td className='text-start'>ทุนการศึกษา หรือ สิทธิประโยชน์ ที่คาดว่าจะได้รับ</td>
                                        <td><input required id="radio-3.4" type="radio" value="" name="radio3.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.4" type="radio" value="" name="radio3.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.4" type="radio" value="" name="radio3.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.4" type="radio" value="" name="radio3.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.4" type="radio" value="" name="radio3.4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <label className='text-center w-full'><hr className="w-48 h-1 mx-auto bg-stone-400 border-0 rounded my-4 dark:bg-gray-700" /></label>
                            <div className='grid grid-cols-1 mb-3'>
                            <label className='text-start px-5 w-7/12 sm:w-1/2 md:w-1/4 lg:w2/6 bg-red-800 rounded-t-lg text-white' >ปัจจัยทางด้านสังคม</label>
                            </div>

                            <table className="table-auto w-full">
                                <thead className='border-b'>
                                    <tr>
                                        <th className=' w-1/12 text-xs sm:text-sm'>ลำดับ</th>
                                        <th className=' w-6/12 text-xs sm:text-sm' >ปัจจัยผลต่อการตัดสินใจเข้าศีกษา</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >5</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >4</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >3</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >2</th>
                                        <th className=' w-1/12 text-xs sm:text-sm' >1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-stone-50'>
                                        <td>1</td>
                                        <td className='text-start'>ความเห็นของเพื่อนในการแนะนำศึกษาต่อ</td>
                                        <td><input required id="radio-1.5" type="radio" value="5" name="radio1.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.5" type="radio" value="4" name="radio1.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.5" type="radio" value="3" name="radio1.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.5" type="radio" value="2" name="radio1.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-1.5" type="radio" value="1" name="radio1.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className='text-start'>ความเห็นของคนรักในการแนะนำศึกษาต่อ</td>
                                        <td><input required id="radio-2.5" type="radio" value="" name="radio2.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.5" type="radio" value="" name="radio2.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.5" type="radio" value="" name="radio2.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.5" type="radio" value="" name="radio2.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-2.5" type="radio" value="" name="radio2.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr className='bg-stone-50'>
                                        <td>3</td>
                                        <td className='text-start'>ความเห็นของคุณครูในการแนะนำศึกษาต่อ</td>
                                        <td><input required id="radio-3.5" type="radio" value="" name="radio3.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.5" type="radio" value="" name="radio3.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.5" type="radio" value="" name="radio3.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.5" type="radio" value="" name="radio3.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-3.5" type="radio" value="" name="radio3.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td className='text-start'>ความเห็นของครอบครัวในการแนะนำศึกษาต่อ</td>
                                        <td><input required id="radio-4.5" type="radio" value="" name="radio4.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.5" type="radio" value="" name="radio4.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.5" type="radio" value="" name="radio4.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.5" type="radio" value="" name="radio4.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-4.5" type="radio" value="" name="radio4.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                    <tr className='bg-stone-50'>
                                        <td>5</td>
                                        <td className='text-start'>ความเห็นของมหาวิทยาลัยในการแนะนำศึกษาต่อ</td>
                                        <td><input required id="radio-5.5" type="radio" value="" name="radio5.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.5" type="radio" value="" name="radio5.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.5" type="radio" value="" name="radio5.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.5" type="radio" value="" name="radio5.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        <td><input id="radio-5.5" type="radio" value="" name="radio5.5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                    </tr>
                                </tbody>
                            </table>
                    </Card>

                    <div className=' mt-4 text-center' >
                        <Card layout="inline" className=' bg-slate-50 bg-opacity-50 rounded-3xl mx-4'>
                            <div className='grid md:grid-cols-2 grid-cols-1'>
                                <div className='md:mt-20 sm:pl-36 my-3' style={{ fontSize: 16 }}>ปัจจัยการประชาสัมพันธ์เลือกเพียง 1 ข้อ</div>
                                <div className='text-start '>
                                    <Form.Item name="academy"
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

                {/* date Start: 25/04/2566
                    name: petch samat 
                    last Edit:05/05/2566 */}
            </card>
            </Form>
   <FormStudent/>
    )
}
