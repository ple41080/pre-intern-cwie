import React, { useEffect, useState } from 'react'
import {getTokenData} from '../../service/token'
import { Table } from 'antd'
export default function TokenTable(props) {
    const [tokenData, setTokenData] = useState([]);
    const item = props.data
    useEffect(() => {
        const id = item.id
        getToken(id)
    }, [item])
    const getToken = async (id) => {
        const tokenList = await getTokenData(id);
        for (let i in tokenList.data) {
            tokenList.data[i].exdDate_token = item.exdDate_token,
                tokenList.data[i].exdTime_token = item.exdTime_token
        }
        setTokenData(tokenList?.data)
    }



    const column = [
        {
            title: "Token",
            dataIndex: "Token",
            key: 'Token',
        },
        {
            title: "วันหมดอายุ",
            dataIndex: "exdDate_token",
            key: 'exdDate_token',
        },
        {
            title: "เวลาหมดอายุ",
            dataIndex: "exdTime_token",
            key: 'exdTime_token',
        },
    ]

    return (
        <div className='w-full' >
            <Table dataSource={tokenData} columns={column} pagination={10}  >
            </Table>

        </div>
    )
}
