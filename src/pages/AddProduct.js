import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

const AddProduct = () => {
    return (
        <div>
            <h3 className="mb-4">Add Product</h3>
            <div className="">
                <form action="">
                    <CustomInput type="text" label="Enter Product" />
                    <button
                        type="submit"
                        className="btn btn-success border-0 rounded-3 my-5"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
