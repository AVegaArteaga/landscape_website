import React from 'react';
import {Container} from '@material-ui/core';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Address from './components/Address/Address';
import AddressDetail from './components/AddressDetail/AddressDetail';
import Admin from './components/Admin/Admin';

const App = () => {

    // <BrowserRouter>
    //     <Container maxidth="lg">
    //         <Navbar />
    //         <Routes>
    //             <Route exact path="/" element={<Home/>}/>
    //             <Route exact path="/auth" element={<Auth/>}/>
    //         </Routes>
    //     </Container>
    // </BrowserRouter>

    //this is the whole page of the app
    return (

        <BrowserRouter>
            
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/" element={<Detail/>}/>
                    <Route exact path="/address" element={<Address/>}/>
                    <Route exact path='/address/:addressDetail' element={<AddressDetail/>}/>
                    <Route exact path='/Admin' element={<Admin/>}/>
                </Routes>
            
        </BrowserRouter>
    );
}

export default App;