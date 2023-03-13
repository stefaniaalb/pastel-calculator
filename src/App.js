import './App.css';
import { Box, Button, createStyles, Paper, Text } from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme, _params, getRef) => ({
  buttons: {
    backgroundColor: '#FDFFFC',
    borderRadius: '100px',
    color: 'gray',
    height: '100%',
    padding: '0%',
    width: '100%',
    fontSize: '15px',
    fontWeight: '400',
    ":hover": {
      backgroundColor: '#EBEFFF' 
    },

    result : {
      fontFamily: 'Gill Sans',
      color: 'gray.2'

    },
    
    
    
  }
}));

function App() {
  const { classes } = useStyles();
  const [display, setDisplay] = useState('0');

  function handleClick(number) {
    setDisplay(display +  number);
  }

  function handleClear() {
    setDisplay('0')
  } 

  function handleOff() {
    //que no se modifique el height
    setDisplay(' ')
    //desactivar los botones
  }

  return (
    <div className="App">
      <header className="App-header">
        <Paper p="md" bg="indigo.3" radius="lg">
          <Text fz="xs" c="white" tt="uppercase" mb="md" align='left'>Tofu's Calculator</Text>
          <Paper p="xs" radius="md" align="right" >
            <Text className={classes.result} >{display}</Text>
          </Paper>

            {/* Button size 42.8px */}
          <Box className="button-wrapper" my="lg"  w={254} h={306.8}>
            <Button className={classes.buttons} onClick={() => handleOff()}>
              OFF
            </Button>
            <Button  className={classes.buttons}>
              MU
            </Button>
            <Button  className={classes.buttons}>
              GT
            </Button>
            <Button  className={classes.buttons}>
              ON
            </Button>
            <Button  className={classes.buttons} onClick={() => handleClear()}>
              AC
            </Button>
            <Button   className={classes.buttons}>
              MRC
            </Button>
            <Button  className={classes.buttons}>
              M-
            </Button>
            <Button  className={classes.buttons}>
              M+
            </Button>
            <Button   className={classes.buttons}>
              xd
            </Button>
            <Button  className={classes.buttons}>
              +/-
            </Button>
            <Button  className={classes.buttons} onClick={() => handleClick(7)}>
              7
            </Button>
            <Button  className={classes.buttons} onClick={() => handleClick(8)}>
              8
            </Button>
            <Button  className={classes.buttons} onClick={() => handleClick(9)}>
              9
            </Button>
            <Button  className={classes.buttons}>
              %
            </Button>
            <Button  className={classes.buttons}>
              √
            </Button>
            <Button className={classes.buttons} onClick={() => handleClick(4)}>
              4
            </Button>
            <Button className={classes.buttons} onClick={() => handleClick(5)}>
              5
            </Button>
            <Button className={classes.buttons} onClick={() => handleClick(6)}>
              6
            </Button>
            <Button className={classes.buttons}>
              X
            </Button>
            <Button className={classes.buttons} >
              ÷
            </Button>
            <Button className={classes.buttons} onClick={() => handleClick(1)}>
              1
            </Button>
            <Button className={classes.buttons} onClick={() => handleClick(2)}>
              2
            </Button>
            <Button className={classes.buttons} onClick={() => handleClick(3)} >
              3
            </Button>
            <Button className="plus-button" >
              +
            </Button>
            <Button className={classes.buttons} >
              -
            </Button>
            <Button  className="zero-button" onClick={() => handleClick(0)} >
              0
            </Button>
            <Button  className={classes.buttons}>
              .
            </Button>
            <Button  className={classes.buttons} >
              =
            </Button>
          </Box>
        </Paper>
      </header>
    </div>
  );
}

export default App;
