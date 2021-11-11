import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProduct.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service m-5">
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title",)}
                    placeholder="Name" required />
                <input
                    {...register("size")}
                    placeholder="Size"
                    required />
                <input
                    type="number"
                    {...register("price")}
                    placeholder="Price"
                    required />
                <input {...register("img")} placeholder="Img Url" required />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProducts;