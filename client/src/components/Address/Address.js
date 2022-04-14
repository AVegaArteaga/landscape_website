import { Dialog, Grid, Paper, Table, TableContainer, TableHead, TableRow } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Button, ButtonBase, Container, Box, Divider, Icon, IconButton, List, ListItem, ListItemText, Slide, TableBody, TableCell, TextField, Toolbar, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAddressPosts, getAddressPostByName } from '../../actions/postAddress';
import Header from '../Header/Header';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useStyle from './styles';
import AddressInfo from './AddressInfo';
import AddressTable from './AddressTable';
import HomeIcon from '@mui/icons-material/Home';

const initialState = { address: '', city: '', state: '' };

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});



const Contact = () => {

    const classes = useStyle();

    //const [currentId, setCurrentId] = useState(0);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [postAddress, setPostAddress] = useState(initialState);
    const [currentSelectAddress, setCurrentSelectAddress] = useState(initialState);
    const [isEnterAddress, setIsEnterAddress] = useState(false);
    const [istAddressLimit, setIstAddressLimit] = useState(false);
    const enterAdressLimit = 2;
    const { posts, isLoading } = useSelector((state) => state.posts);
    // const postAddresses = useSelector((postAddress) => postAddress.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        const userId = (user.result.googleId ? user.result.googleId : user.result._id);
        dispatch(getAddressPostByName(userId));

    }, [dispatch]); //need [dispatch] when connected to redux store

    const switchMode = () => {
        setPostAddress(initialState);
        setIsEnterAddress((prevIsEnterAddress) => !prevIsEnterAddress);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        clear();
        switchMode();
        dispatch(createAddressPosts({ ...postAddress, name: user?.result?.name }))
    }

    const detailAddressClick = postAddress => () => {
        setCurrentSelectAddress(postAddress);
        // navigate(`/address/${postAddress._id}`)
    }

    const clear = () => {
        setPostAddress(initialState);
    };


    // <Header/>

    return (
        <>
            <Header />
            <Container sx={{ marginTop: "130px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={8}>
                        <Paper className={classes.paper}>

                        {isLoading ? <CircularProgress size={"150px"}/> : 
                        <>
                            {posts.length <= 1  ?
                                <AddressInfo name={posts[0]?.name} half={false} address={posts[0]?.address} city={posts[0]?.city} createdAt={posts[0]?.createdAt} service={posts[0]?.service} state={posts[0]?.state} _id={posts[0]?._id} />
                                :
                                <AddressTable posts={posts} detailAddressClick={detailAddressClick}/>
                            }
                        </>
                        }
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper className={classes.paperEnterAddress}>
                            {isLoading ? <CircularProgress/> : <Button onClick={switchMode} disabled={posts.length >= enterAdressLimit} >Enter Property for service {posts.length}/{enterAdressLimit}</Button>}
                            {/**Refactor this part using Auth/Input since it already look nice   istAddressLimit */}
                            {isEnterAddress ?
                                <>
                                    <Typography variant='h6' label="Title">Enter New Address</Typography>
                                    <form autoComplete='off' noValidate onSubmit={handleSubmit} >
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} >
                                                <TextField required name='address' variant="outlined" label='Address' fullWidth value={postAddress.address} onChange={(e) => setPostAddress({ ...postAddress, address: e.target.value })} />
                                            </Grid>
                                            <Grid item xs={6} >
                                                <TextField required name='city' variant="outlined" label='City' fullWidth value={postAddress.city} onChange={(e) => setPostAddress({ ...postAddress, city: e.target.value })} />
                                            </Grid>
                                            <Grid item xs={6} >
                                                <TextField required name='state' variant="outlined" label='State' fullWidth value={postAddress.state} onChange={(e) => setPostAddress({ ...postAddress, state: e.target.value })} />
                                            </Grid>
                                            <Button className={classes.greenButton} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                                        </Grid>
                                    </form>
                                </>
                                :
                                <>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, eam gubergren referrentur ei. Te saperet nonumes deseruisse mei. Ne has vivendo perfecto neglegentur, ne.
                                        <Divider />
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, eam gubergren referrentur ei. Te saperet nonumes deseruisse mei. Ne has vivendo perfecto neglegentur, ne.
                                        <Divider />
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, eam gubergren referrentur ei. Te saperet nonumes deseruisse mei. Ne has vivendo perfecto neglegentur, ne.
                                    </Typography>
                                </>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}



export default Contact
