import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = useState(2);

    const onSubmit = data => {
        data.rating = value;
        data.name = user.displayName;
        data.email = user.email;
        axios.post('https://safe-waters-12222.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
                console.log(data)
            })
    }
    return (
        <Box>
            <Container
                sx={{
                    py: 2,
                    mx: 'auto',
                    // maxWidth: 200,
                    minWidth: 450,
                    padding: 10,
                    border: "1px solid black",
                    borderRadius: 1,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3">
                    Add A Review
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} >
                    <Box
                        sx={{
                            '& > legend': { mt: 5 },
                        }}
                    >
                        <Typography component="legend">Ratings</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <Grid container spacing={2} sx={{ my: 5 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Review"
                                variant="standard"
                                id="standard-basic"
                                {...register("desc")}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant='contained'
                        style={{ backgroundColor: '#5CE7ED', color: "black" }}
                    >Submit</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default AddReview;