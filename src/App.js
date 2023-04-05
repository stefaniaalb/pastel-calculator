import './App.css';
import { Box, Button, createStyles, Paper, Text } from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  calculator: {
    alignItems: 'center',
    backgroundColor: theme.colors.indigo[3],
    borderRadius: theme.radius.lg,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.md,
  },
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
      backgroundColor: '#EBEFFF',
    },
  },

  result: {
    color: 'gray.2',

  },

  result_display: {
    borderRadius: theme.radius.md,
    height: '60px',
    overflow: 'hidden',
    padding: theme.spacing.xs,
    textAlign: 'right',
    width: '250px',
  }
}));

function App() {
  const { classes } = useStyles();
  const [display, setDisplay] = useState('0');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('0');

  function handleNumber(number) {
    if (!operation) {
      const num = parseInt(`${num1}${number}`, 10);
      setNum1(num);
      console.log("i'm num1: ", num);
      setDisplay(num);
    }
    else {
      const num = parseInt(`${num2}${number}`, 10);
      setNum2(num);
      setDisplay(num);
      console.log("i'm num2: ", num);
      setDisplay(num);
    }
  }

  function handleClear() {
    setDisplay('0');
    setNum1(0);
    setNum2(0);
    setResult(null);
    setOperation(null);
  }

  function handleOff() {
    //que no se modifique el height
    setDisplay(' ')
    //desactivar los botones
  }

  function handleTempResult(temp_result) {
    console.log('is this a temp result? huh ', temp_result)
    setNum1(temp_result);
    setNum2(0);
    //setDisplay(temp_result);
    setOperation(null);
    
  }  
    

  function handleOperation(chosen_operation) {
    const temp_result = num1 + num2;
    if (operation) {
      console.log('this is a temp result = ', temp_result)
      handleTempResult(temp_result);
      
    } 
    setOperation(chosen_operation);
    setDisplay(chosen_operation);
  }

  function handleResult() {
    if (operation === '+') {
      console.log("i'm adding ", num1, " + ", num2);
      const result = num1 + num2;
      setResult(result);
      setDisplay(result);
      console.log(result)
    }
    else if (operation === '-') {
      console.log("i'm substracting ", num1, " - ", num2);
      const result = num1 - num2;
      setResult(result);
      setDisplay(result);
      console.log(result)
    }
    else if (operation === '*') {
      console.log("i'm multiplying ", num1, " by ", num2);
      const result = num1 * num2;
      setResult(result);
      setDisplay(result);
      console.log(result)
    }
    else if (operation === '/') {
      console.log("i'm multiplying ", num1, " by ", num2);
      const result = num1 / num2;
      setResult(result);
      setDisplay(result);
      console.log(result)
    }
    setNum1(0);
    setNum2(0);
    setOperation(null);
  }


  return (
    <div className="App">
      <header className="App-header">
        <Paper className={classes.calculator}>
          <Text fz="xs" c="white" tt="uppercase" mb="md" align='left'>Tofu's Calculator</Text>
          <Paper className={classes.result_display}>
            <Text className={classes.result} >{display}</Text>
          </Paper>

          {/* Button size 42.8px */}
          <Box className="button-wrapper" my="lg" w={254} h={306.8}>
            <Button className={classes.buttons} onClick={() => handleOff()}>
              OFF
            </Button>
            <Button className={classes.buttons}>
              MU
            </Button>
            <Button className={classes.buttons}>
              GT
            </Button>
            <Button className={classes.buttons}>
              ON
            </Button>
            <Button className={classes.buttons} onClick={() => handleClear()}>
              AC
            </Button>
            <Button className={classes.buttons}>
              MRC
            </Button>
            <Button className={classes.buttons}>
              M-
            </Button>
            <Button className={classes.buttons}>
              M+
            </Button>
            <Button className={classes.buttons}>
              xd
            </Button>
            <Button className={classes.buttons}>
              +/-
            </Button>
            <Button className={classes.buttons} onClick={() => handleNumber(7)}>
              7
            </Button>
            <Button className={classes.buttons} onClick={() => handleNumber(8)}>
              8
            </Button>
            <Button className={classes.buttons} onClick={() => handleNumber(9)}>
              9
            </Button>
            <Button className={classes.buttons}>
              %
            </Button>
            <Button className={classes.buttons}>
              √
            </Button>
            <Button className={classes.buttons} onClick={() => handleNumber(4)}>
              4
            </Button>
            <Button className={classes.buttons} onClick={() => handleNumber(5)}>
              5
            </Button>
            <Button className={classes.buttons} onClick={() => handleNumber(6)}>
              6
            </Button>
            <Button className={classes.buttons} onClick={() => handleOperation("*")}>
              x
            </Button>
            <Button className={classes.buttons} onClick={() => handleOperation("/")}>
              ÷
            </Button>
            <Button className={classes.buttons} onClick={() => handleNumber(1)}>
              1
            </Button>
            <Button className={classes.buttons} onClick={() => handleNumber(2)}>
              2
            </Button>
            <Button className={classes.buttons} onClick={() => handleNumber(3)} >
              3
            </Button>
            <Button className="plus-button" onClick={() => handleOperation("+")}>
              +
            </Button>
            <Button className={classes.buttons} onClick={() => handleOperation("-")}>
              -
            </Button>
            <Button className="zero-button" onClick={() => handleNumber(0)} >
              0
            </Button>
            <Button className={classes.buttons}>
              .
            </Button>
            <Button className={classes.buttons} onClick={() => handleResult()}>
              =
            </Button>
          </Box>
        </Paper>
      </header>
    </div>
  );
}

export default App;
