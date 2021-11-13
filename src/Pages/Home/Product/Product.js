import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const { title, size, img, _id } = product;
    const history = useHistory();

    const handleDetails = (id) => {
        const uri = `/productDetail/${id}`;
        history.push(uri);
    }
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
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