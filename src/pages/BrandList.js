import React from "react";
import { Table } from "antd";

const columns = [
    {
        title: "SNo",
        dataIndex: "key"
    },
    {
        title: "Name",
        dataIndex: "name"
    },
    {
        title: "Product",
        dataIndex: "product"
    },
    {
        title: "Status",
        dataIndex: "status"
    }
];
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i + 1,
        name: `Edward King ${i + 1}`,
        product: 32,
        status: `London, Park Lane no. ${i}`
    });
}

const BrandList = () => {
    return (
        <div>
            <h3 className="mb-4">Brands</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default BrandList;
