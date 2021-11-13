import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Container, Typography, Rating, Divider } from '@mui/material'

import Box from '@mui/material/Box';


const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://safe-waters-12222.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <Container sx={{
            textAlign: 'center',
            my: 5
        }}>
            <Typography sx={{
                fontWeight: 'bold',
                my: 5,
                color: '#642517'
            }} gutterBottom variant="h4" component="div">
                Testimonials
                <Divider variant="middle"
                    sx={{
                        m: 5,
                        color: '#6CA8F2',
                        border: 1,
                        mx: "auto",
                        width: 800

                    }} />
            </Typography>

            <Carousel>
                {
                    reviews?.map((item, i) => <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 3,
                                width: 500,
                                maxWidth: 600,
                                height: 'auto',
                            },
                        }}
                    >

                        <Paper elevation={3} sx={{ my: 3 }}>
                            <Box sx={{ height: 'auto', my: 3 }} >
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h6" gutterBottom>
                                        {item?.name}
                                    </Typography>
                                    <Rating name="read-only" value={item?.rating} readOnly />
                                    <Typography variant="body1" gutterBottom>
                                        &#10075;  {item?.desc.slice(0, 50)}&#10076;
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box >)
                }
            </Carousel >
        </Container >
    );
};

export default Review;