import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  resize: {
    maxWidth: '50%',
    maxHeight:'50%',
  },
  bodyTitle:{
    textAlign: 'center',
  }






}));

/* .image{
    position: relative;
    height: 100vh;
}

.content{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100%;
}

.content span.img-txt {
    background-color: #4c5760;
    text-transform: uppercase;
    color: #fff;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 10px;
}

h3{
    letter-spacing: 6px;
    text-transform: uppercase;
    font: 1.3rem;
    text-align: center;
}

.text-box{
    text-align: center;
    padding: 3rem 1rem;
    text-align: justify;
} */