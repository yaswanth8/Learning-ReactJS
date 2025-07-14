import React from 'react';
import image1 from "../assets/location_1.jpg";
import image2 from "../assets/location_2.jpg";
import image3 from "../assets/location_3.jpg";
import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const Welcome = () => {
    return (
        <>
            <Grid container spacing={3} justifyContent="center" sx={{ padding: 3 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia component="img" height="200" image={image1} />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                               Beautiful locations
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto dignissimos dolorum et excepturi, minima nesciunt, nisi praesentium, qui quidem quos suscipit temporibus? Excepturi explicabo fugit itaque, quidem quis vitae.
                            </Typography>
                            <Button variant='contained' color={'primary'}>More Details</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia component="img" height="200" image={image2} />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Beautiful locations
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto dignissimos dolorum et excepturi, minima nesciunt, nisi praesentium, qui quidem quos suscipit temporibus? Excepturi explicabo fugit itaque, quidem quis vitae.
                            </Typography>
                            <Button variant='contained' color={'primary'}>More Details</Button>
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia component="img" height="200" image={image3} />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Beautiful locations
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto dignissimos dolorum et excepturi, minima nesciunt, nisi praesentium, qui quidem quos suscipit temporibus? Excepturi explicabo fugit itaque, quidem quis vitae.
                            </Typography>
                            <Button variant='contained' color={'primary'}>More Details</Button>
                        </CardContent>
                    </Card>
                </Grid>


            </Grid>
        </>
    )
};
export default Welcome;