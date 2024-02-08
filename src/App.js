import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Button 
        variant='outlined'
        onClick={() => {
          console.log('Button clicked');
        }}
        >
          First MUI Component
      </Button>
    </div>
  );
}

export default App;
