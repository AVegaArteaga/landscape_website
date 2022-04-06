import { Button, Paper, Typography } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from 'react-router-dom'; 

const AddressDetail = () =>{
    const {addressDetail} = useParams();
    console.log(addressDetail);
    return(
         <Paper elevation={6}>
                this idea is scrapped
         </Paper>
    );

}

export default AddressDetail;