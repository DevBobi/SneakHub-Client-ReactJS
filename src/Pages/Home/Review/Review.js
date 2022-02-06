import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Typography, Rating } from '@mui/material'
import { FadeLoader } from "react-spinners";
import Box from '@mui/material/Box';


const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');

    useEffect(() => {
        fetch('https://safe-waters-12222.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(e => setErr(e.message))
            .finally(() => setLoading(false))
    }, []);

    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         if (reviews) {
    //             setLoading(false);
    //         }
    //     }, 500);
    // }, [reviews]);

    return (
        <Box
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
                backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0267/0211/8947/files/about3.jpg?v=1569835933)',
                backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'auto',
                backgroundAttachment: 'fixed',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }}
        >
            <Box sx={{
                textAlign: 'center',
                my: 5
            }}>
                <Typography sx={{
                    fontWeight: 'bold',

                    color: 'white'
                }} gutterBottom variant="h4" component="div">
                    Testimonials
                </Typography>
                {loading ? (
                    <div className="spinner-box">
                        <FadeLoader color="#777777" />
                    </div>
                ) : (
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
                                        color: 'white'
                                    },
                                }}
                            >

                                <Box elevation={3} sx={{ py: 3 }}>
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
                                </Box>
                            </Box >)
                        }
                    </Carousel >
                )}
            </Box >
        </Box >
    );
};

export default Review;