import { ThemeProvider } from "@mui/material";
import "./App.css";
import { CuiContactForm } from "./components/contact-form/CuiContactForm";
import { theme } from "./theme/theme";
import { CuiButton, SignIn } from "./bootstrap";
import { FormEvent, useState } from "react";
import FilteredList from "./components/list/filtered-list";
import BarChart from "./components/charts/bar-chart";
import { barChartData, listItems, options } from "../data/fake-data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <button onClick={() => setCount(count + 1)}>
          Increment count to simulate parent re-render
        </button>
        <div>
          <h1>Custom Chart Example</h1>
          <BarChart data={barChartData} options={options} />
        </div>
        <FilteredList
          items={listItems}
          filterKeys={["displayName"]}
        ></FilteredList>
        <SignIn
          onSubmitCb={function (e: FormEvent<HTMLFormElement>): void {
            throw new Error("Function not implemented.");
          }}
        ></SignIn>
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
