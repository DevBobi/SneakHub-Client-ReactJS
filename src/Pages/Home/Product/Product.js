import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from 'react-router';
import { FadeLoader } from "react-spinners";
import AOS from 'aos';

const Product = ({ product }) => {
    const { title, size, img, _id, price } = product;
    const history = useHistory();
    AOS.init();

    const handleDetails = (id) => {
        const uri = `/productDetail/${id}`;
        history.push(uri);
    }
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if (product?.img) {
                setLoading(false);
            }
        }, 1000);
    }, []);

    return (
        <Grid item xs={4} sm={4} md={4} data-aos="zoom-in">
            <Card >
                <CardActionArea>
                    {loading ? (
                        <div className="spinner-box">
                            <FadeLoader color="#777777" />
                        </div>
                    ) : (
                        <CardMedia
                            component="img"
                            height="250"
                            image={img}
                            alt="green iguana"
                        />
                    )}
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="h5" color="success.dark">
                            Price: ${price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available Size: {size}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => handleDetails(_id)} color="error">
                        Purchase
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;