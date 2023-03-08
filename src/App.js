import './App.css';
import { Box, Button, createStyles, Paper, Text } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  buttons: {
    backgroundColor: 'white',
    borderRadius: '100px',
    color: 'gray',
    height: '100%',
    padding: '0%',
    width: '100%',
    fontSize: '15px',
    fontWeight: '400',
    
  }
}));

function App() {
  const { classes } = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Paper p="md" bg="indigo.3" radius="lg">
          <Text fz="xs" c="white" tt="uppercase" mb="md" align='left'>Tofu's Calculator</Text>
          <Paper p="xs" radius="md" align='right'>
            Result
          </Paper>

          <Box className="button-wrapper" my="lg"  w="254px" h="300px">
            <Button className={classes.buttons}>
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
            <Button  className={classes.buttons}>
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
            <Button  className={classes.buttons}>
              7
            </Button>
            <Button  className={classes.buttons}>
              8
            </Button>
            <Button  className={classes.buttons}>
              9
            </Button>
            <Button  className={classes.buttons}>
              %
            </Button>
            <Button  className={classes.buttons}>
              √
            </Button>
            <Button  className={classes.buttons}>
              4
            </Button>
            <Button  className={classes.buttons}>
              5
            </Button>
            <Button  className={classes.buttons}>
              6
            </Button>
            <Button  className={classes.buttons}>
              X
            </Button>
            <Button  className={classes.buttons}>
              ÷
            </Button>
            <Button  className={classes.buttons}>
              1
            </Button>
            <Button  className={classes.buttons}>
              2
            </Button>
            <Button  className={classes.buttons}>
              3
            </Button>
            <Button className="plus-button" >
              +
            </Button>
            <Button className={classes.buttons}>
              -
            </Button>
            <Button  className="zero-button">
              0
            </Button>
            <Button  className={classes.buttons}>
              .
            </Button>
            <Button  className={classes.buttons}>
              =
            </Button>
          </Box>
        </Paper>
      </header>
    </div>
  );
}

export default App;
