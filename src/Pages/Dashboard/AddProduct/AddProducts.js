import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';
import axios from 'axios';
import PopupSuccess from '../../Popup/PopupSuccess';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = useState(2);

    const onSubmit = data => {
        data.rating = value;
        axios.post('https://safe-waters-12222.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    PopupSuccess('new product');
                    reset();
                }
            })
    }

    return (

        <Box>
            <Container
                sx={{
                    py: 2,
                    mx: 'auto',
                    minWidth: 450,
                    borderRadius: 1,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3">
                    Add A Product
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} >
                    <Grid container spacing={2} sx={{ my: 3 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Title"
                                id="outlined-size-small"
                                {...register("title")}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Size"
                                id="outlined-size-small"
                                {...register("size")}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Price"
                                id="outlined-size-small"
                                {...register("price")}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Image Url"
                                id="outlined-size-small"
                                {...register("img")}
                                placeholder="Size"
                            />
                        </Grid>
                        <Grid
                            item xs={12}
                        >
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        type="submit"
                        variant='contained'
                        style={{ backgroundColor: '#5CE7ED', color: "black" }}
                    >Add Product</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default AddProducts;