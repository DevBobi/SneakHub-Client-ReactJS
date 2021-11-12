import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://safe-waters-12222.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }

    return (

        <Container>
            <Box
                sx={{
                    py: 2,
                    mx: 'auto',
                    width: 500,
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
                    </Grid>
                    <Button
                        type="submit"
                        variant='contained'
                        style={{ backgroundColor: '#5CE7ED', color: "black" }}
                    >Proceed Make Admin</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default AddProducts;