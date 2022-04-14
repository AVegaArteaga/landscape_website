import { Typography, Grid, Button, Paper, Divider, Chip, TableHead, TableRow, TableCell, TableContainer, Table, TableBody } from '@mui/material';
import React from 'react';
import moment from 'moment';
import useStyle from './styles';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HomeIcon from '@mui/icons-material/Home';
const AddressInfo = ({ posts, detailAddressClick }) => {
    const classes = useStyle();

    return (
        <TableContainer  >
        <Typography variant='h4'>Address <HomeIcon/></Typography>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow >
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((postAddress) => (
                        <TableRow key={postAddress._id}>
                            <TableCell>{postAddress.name}</TableCell>
                            <TableCell>{postAddress.address}</TableCell>
                            <TableCell>{postAddress.city}</TableCell>
                            <TableCell>{postAddress.state}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default AddressInfo;