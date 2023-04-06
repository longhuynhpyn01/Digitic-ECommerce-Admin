import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

const AddBrand = () => {
    return (
        <div>
            <h3 className="mb-4">Add Brand</h3>
            <div className="">
                <form action="">
                    <CustomInput type="text" label="Enter Brand" />
                    <button
                        type="submit"
                        className="btn btn-success border-0 rounded-3 my-5"
                    >
                        Add Brand
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBrand;
