import { Grid, Paper, Table, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Button, TableCell, TextField, Typography, ButtonBase, TableBody } from '@mui/material';
import React, {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { createAddressPosts, getAddressPosts, getAddressPostByName } from '../../actions/postAddress';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {Link, useNavigate, useLocation} from 'react-router-dom';

const initialState = {address: '', city: '', state: ''};


const Contact = () => { 
    
    //const [currentId, setCurrentId] = useState(0);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [postAddress, setPostAddress] = useState(initialState);
    const [isEnterAddress, setIsEnterAddress] = useState(false);
    const dispatch = useDispatch();
    // const postAddresses = useSelector((postAddress) => postAddress.posts);
    
    const {posts, isLoading} = useSelector((state) => state.posts);
    const navigate = useNavigate();
    
    useEffect(() => {
        const userId = (user.result.googleId ? user.result.googleId : user.result._id );
        dispatch(getAddressPostByName(userId));
    }, [ dispatch]); //need [dispatch] when connected to redux store
    
    const switchMode = () => {
        setPostAddress(initialState);
        setIsEnterAddress((prevIsEnterAddress) => !prevIsEnterAddress);
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        clear();
        dispatch(createAddressPosts({...postAddress, name: user?.result?.name}))
    }
    
    const detailAddressClick = postAddress => () => {
        
        navigate(`/address/${postAddress._id}`)
    }
    
    const clear = () => {
        setPostAddress(initialState);
    };
    
	return (
        <>
            <Paper>
                <Button onClick={switchMode} >Enter New Address?</Button>
                {isEnterAddress &&
                <form autoComplete='off' noValidate onSubmit={handleSubmit}  >
                    <Typography variant='h6' label="Title">Enter Address</Typography>
                    <TextField required name='address' variant="outlined" label='Address' fullWidth value={postAddress.address} onChange={(e) => setPostAddress({...postAddress, address: e.target.value})}/>
                    <TextField required name='city'    variant="outlined" label='City'    fullWidth value={postAddress.city}    onChange={(e) => setPostAddress({...postAddress, city: e.target.value})} />
                    <TextField required name='state'   variant="outlined" label='State'   fullWidth value={postAddress.state}   onChange={(e) => setPostAddress({...postAddress, state: e.target.value})}/>
                    <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                </form>
                }
            </Paper>
            
            {posts.length <= 1 ? 
                posts.map((postAddress) =>(
                 <Paper key={postAddress._id}>
                     <Typography>
                         {postAddress.name}
                     </Typography>
                     <Typography>
                         {postAddress.address}
                     </Typography>
                     <Typography>
                         {postAddress.city}
                     </Typography>
                     <Typography>
                         {postAddress.state}
                     </Typography>
                     <Button variant="contained" color="secondary" size="small" onClick={detailAddressClick(postAddress)}>
                            <ArrowCircleRightIcon/>
                        </Button>
                 </Paper>

                ))
            :
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Detail</TableCell>
                        </TableRow>
                    </TableHead>
            <TableBody>
                {posts.map((postAddress) => (
                    <TableRow key={postAddress._id} xs={12} sm={12} md={6} lg={3}>

                        <TableCell>{postAddress.name}</TableCell>
                        <TableCell>{postAddress.address}</TableCell>
                        <TableCell>{postAddress.city}</TableCell>
                        <TableCell>{postAddress.state}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="secondary" size="small" onClick={detailAddressClick(postAddress)}>
                                <ArrowCircleRightIcon/>
                            </Button>
                        
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>
        }
        </>
	)
}



export default Contact
