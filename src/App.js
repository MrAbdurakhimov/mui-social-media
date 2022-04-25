import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function App() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}

export default App;
