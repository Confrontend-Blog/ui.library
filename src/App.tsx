import { ThemeProvider } from "@mui/material";
import "./App.css";
import { CuiContactForm } from "./components/contact-form/CuiContactForm";
import { theme } from "./theme/theme";
import { CuiButton } from "./bootstrap";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CuiButton>Cui Button</CuiButton>
        <CuiContactForm
          userName={{
            label: "Name",
            name: "fff",
            defaultValue: "",
          }}
          email={{
            label: "Email",
            name: "sss",
            defaultValue: "",
          }}
          message={{
            label: "Message",
            name: "ccc",
            defaultValue: "",
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
