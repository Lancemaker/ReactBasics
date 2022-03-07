
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
