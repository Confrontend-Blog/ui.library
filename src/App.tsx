import { ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import { CuiContactForm } from "./components/contact-form/CuiContactForm";
import { theme } from "./theme/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CuiContactForm
          userName={{
            label: "Name",
            name: "aaa",
            defaultValue: "",
          }}
          email={{
            label: "Email",
            name: "bbb",
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
