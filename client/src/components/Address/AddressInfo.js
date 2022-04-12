import { Typography, Grid, Paper, Divider, Chip, TableHead, TableRow, TableCell, TableContainer, Table, TableBody } from '@mui/material';
import React from 'react';
import moment from 'moment';
import useStyle from './styles';

const test = (createdAt) => {
    return moment(createdAt, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]').format('MMMM/DD/YYYY');
}


const AddressInfo = ({ name, address, city, createdAt, service, state, _id }) => {
    const classes = useStyle();

    return (
        <>
            
                <Grid item xs={12} md={12} lg={12}>
                    <Divider textAlign="left" variant='middle'><Chip className={classes.chipColor} label="Address" /> </Divider>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h6" textAlign={"center"}>
                        {address} <br /> {city}, {state}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                    <Divider textAlign="left" variant='middle'><Chip className={classes.chipColor} label="Service Info" /> </Divider>
                </Grid>

                <Grid item xs={12} md={12}>
                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="caption table">
                            <TableHead>
                                <TableRow >
                                    <TableCell>Time</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Detail</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow xs={12} sm={12} md={6} lg={3}>
                                    <TableCell>TBA</TableCell>
                                    <TableCell>TBA</TableCell>
                                    <TableCell>TBA</TableCell>
                                </TableRow>
                                {/* add nesteed objects in user
                                    {service.map((postAddress) => (
                                        <TableRow xs={12} sm={12} md={6} lg={3}>
                                        
                                        
                                        </TableRow>
                                        ))} 
                                    */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                    <Divider textAlign="left" variant='middle'><Chip className={classes.chipColor} label="Address Info" /> </Divider>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography>
                        Date Joined: {test(createdAt)}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>

                    <Typography>
                        Creator: {name}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <footer className={classes.footer} >
                        <p>
                            database id: {_id}
                        </p>
                    </footer>
                </Grid>
            
        </>
    )
};

export default AddressInfo;