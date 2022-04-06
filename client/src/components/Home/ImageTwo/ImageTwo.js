import { Box } from '@material-ui/core';
import { Container, Grid, Typography } from '@mui/material';
import Image1 from '../../../images/bricklayer.png';
import Image2 from '../../../images/checklist.png';
import Image3 from '../../../images/lawn-mower.png';
import useStyles from './styles';

const ImageTwo = () =>{

    const classes = useStyles();
    return(

        <Container maxWidth="xl" id="whoWeAre">   
            <Typography variant="h2" className={classes.bodyTitle}>
                Infomation & Testmories
            </Typography>

            <Grid item alignContent="center"  xs={12} sm={12} md={12} >
                <Grid direction="row" container spacing={10}> 
                    <Grid textAlign={"center"} item xs={12} sm={4} md={4}>
                        <img className={classes.resize} src={Image1} />
                        <p>
                        Lorem ipsum dolor sit amet, at agam numquam his, ubique facete cum no. Sed putant praesent corrumpit ea, an decore albucius tacimates vim, nec ei affert sanctus neglegentur. Liber nihil iriure ius ea. In eros ludus ius. At ferri tantas temporibus eum, ut aliquid hendrerit scriptorem nec, in vim elitr constituam.
                        </p>
                    </Grid>
                    <Grid textAlign={"center"} item xs={12} sm={4} md={4}>
                        <img className={classes.resize} src={Image2} />
                        <p>
                            Lorem ipsum dolor sit amet, at agam numquam his, ubique facete cum no. Sed putant praesent corrumpit ea, an decore albucius tacimates vim, nec ei affert sanctus neglegentur. Liber nihil iriure ius ea. In eros ludus ius. At ferri tantas temporibus eum, ut aliquid hendrerit scriptorem nec, in vim elitr constituam.
                        </p>
                    </Grid>
                    <Grid textAlign={"center"} item xs={12} sm={4} md={4}>
                        <img className={classes.resize} src={Image3} />
                    <p>
                        Lorem ipsum dolor sit amet, at agam numquam his, ubique facete cum no. Sed putant praesent corrumpit ea, an decore albucius tacimates vim, nec ei affert sanctus neglegentur. Liber nihil iriure ius ea. In eros ludus ius. At ferri tantas temporibus eum, ut aliquid hendrerit scriptorem nec, in vim elitr constituam.
                    </p>
                    </Grid>
                </Grid>
            </Grid>
        </Container>

    );
            {/* <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Data Enter Success!
                </Alert>
            </Snackbar>
            <Snackbar open={openFailure} autoHideDuration={6000} onClose={handleCloseFailure}>
                <Alert onClose={handleCloseFailure} severity="error" sx={{ width: "100%" }}>
                    Can not be updated!
                </Alert>
            </Snackbar>
        </Container> */}

}

export default ImageTwo;