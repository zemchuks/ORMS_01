import React, { useState } from 'react'
import { EllipsisOutlined, SearchOutlined } from '@ant-design/icons';
import { Table, Input, Button, Space, Tag, ConfigProvider, Popover } from 'antd';
import Highlighter from 'react-highlight-words';

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = React.useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const orders = [
        {
            productName: 'Iron Ore',
            productNumber: '85743',
            paymentStatus: 'Due',
            status: 'Pending'
        },
        {
            productName: 'Aluminium',
            productNumber: '97245',
            paymentStatus: 'Refunded',
            status: 'Declined'
        },
        {
            productName: 'Cement',
            productNumber: '36452',
            paymentStatus: 'Paid',
            status: 'Active'
        },
    ]
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                text
            ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
            ...getColumnSearchProps('productName'),
        },
        {
            title: 'Product Number',
            dataIndex: 'productNumber',
            key: 'productNumber',
            ...getColumnSearchProps('productNumber'),
        },
        {
            title: 'Payment Status',
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
            filters: [
                { text: 'Due', value: 'Due' },
                { text: 'Refunded', value: 'Refunded' },
                { text: 'Paid', value: 'Paid' },
            ],
            onFilter: (value, record) => record.paymentStatus.indexOf(value) === 0,
            render: (paymentStatus) => {
                let color = 'green';
                if (paymentStatus === 'Due') color = 'volcano';
                if (paymentStatus === 'Refunded') color = 'geekblue';
                return <Tag color={color}>{paymentStatus}</Tag>;
            },
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            filters: [
                { text: 'Pending', value: 'Pending' },
                { text: 'Declined', value: 'Declined' },
                { text: 'Active', value: 'Active' },
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
            render: (status) => {
                let color = 'green';
                if (status === 'Pending') color = 'volcano';
                if (status === 'Declined') color = 'red';
                return <Tag color={color}>{status}</Tag>;
            },
        },
    ];


    const content = (
        <div>
            <ul >
                <li><a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a> </li>
                <li><a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a></li>
                <li><a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a></li>
            </ul>
        </div>
    );

    return (

        <main>
            <h1 className='font-bold text-3xl'>Dashboard</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-6 mb-6">
                {/* ITEM 1 */}
                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-6">
                        <div>
                            <div className="text-2xl font-semibold mb-1">15</div>
                            <div className="text-sm font-medium text-gray-400">Transactions</div>
                        </div>
                        <Popover placement="leftTop" content={content}>
                            <EllipsisOutlined className='text-3xl text-gray-700 hover:text-gray-600' size={20} />
                        </Popover>
                    </div>

                    <div className="flex items-center">
                        <div className="w-full bg-gray-100 rounded-full h-4">
                            <div className="h-full bg-blue-500 rounded-full p-1" style={{ width: '60%' }}>
                                <div className="w-2 h-2 rounded-full bg-white ml-auto"></div>
                            </div>
                        </div>
                        <span className="text-sm font-medium text-gray-600 ml-4">60%</span>
                    </div>
                </div>

                {/* ***************ITEM 2 ************************************** */}
                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-6">
                        <div>
                            <div className="text-2xl font-semibold mb-1">25</div>
                            <div className="text-sm font-medium text-gray-400">Registered Users</div>
                        </div>
                        <Popover placement="leftTop" content={content}>
                            <EllipsisOutlined className='text-3xl text-gray-700 hover:text-gray-600' size={20} />
                        </Popover>
                    </div>
                    <div className="flex items-center">
                        <div className="w-full bg-gray-100 rounded-full h-4">
                            <div className="h-full bg-blue-500 rounded-full p-1" style={{ width: '60%' }}>
                                <div className="w-2 h-2 rounded-full bg-white ml-auto"></div>
                            </div>
                        </div>
                        <span className="text-sm font-medium text-gray-600 ml-4">60%</span>
                    </div>
                </div>

                {/* ***********ITEM 3  *********************** */}
                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-4">
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="text-2xl font-semibold">324</div>
                                <div
                                    className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                                    +30%</div>
                            </div>
                            <div className="text-sm font-medium text-gray-400">Visitors</div>
                        </div>

                        <Popover placement="leftTop" content={content}>
                            <EllipsisOutlined className='text-3xl text-gray-700 hover:text-gray-600' size={20} />
                        </Popover>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded-full object-cover block" />
                        <img src="https://placehold.co/32x32" alt=""
                            className="w-8 h-8 rounded-full object-cover block -ml-3" />
                        <img src="https://placehold.co/32x32" alt=""
                            className="w-8 h-8 rounded-full object-cover block -ml-3" />
                    </div>
                </div>

                {/* **********4TH ITEM ********************************/}
                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-6">
                        <div>
                            <div className="text-2xl font-semibold mb-1"><span
                                className="text-base font-normal text-gray-400 align-top"></span>$ 2,345</div>
                            <div className="text-sm font-medium text-gray-400">Transactions Total</div>
                        </div>
                        <Popover placement="leftTop" content={content}>
                            <EllipsisOutlined className='text-3xl text-gray-700 hover:text-gray-600' size={20} />
                        </Popover>
                    </div>
                    <a href="#" className="text-blue-500 font-medium text-sm hover:text-blue-600">View details</a>
                </div>
            </div>

            <div className="recent-orders ">
                <h2>Recent Orders</h2>
                <Table columns={columns} dataSource={orders} pagination={{ pageSize: 5 }} />
            </div>

        </main>


    )
}

export default Dashboard 