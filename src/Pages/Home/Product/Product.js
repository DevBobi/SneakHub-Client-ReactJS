import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from 'react-router';
import AOS from 'aos';

const Product = ({ product }) => {
    const { title, size, img, _id, price } = product;
    const history = useHistory();
    AOS.init();

    const handleDetails = (id) => {
        const uri = `/productDetail/${id}`;
        history.push(uri);
    }
    return (
        <Grid item xs={4} sm={4} md={4} data-aos="zoom-in">
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="h5" color="error">
                            Price: ${price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available Size: {size}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => handleDetails(_id)} size="small" color="primary">
                        Purchase
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;