import { ThemeProvider } from "@mui/material";
import "./App.css";
import { CuiContactForm } from "./components/organisms/contact-form/CuiContactForm";
import { theme } from "./theme/theme";
import { FormEvent, useState } from "react";
import FilteredList from "./components/molecules/list/filtered-list";
import BarChart from "./components/organisms/charts/bar-chart";
import { barChartData, listItems, options } from "../data/fake-data";
import ScrollProgressBar from "./components/atoms/scroll-progress-bar/scroll-progress-bar";
import React from "react";
import { CuiButton } from "./components/atoms/button/cui-button";
import { SignInForm } from "./components/organisms/signin-form/signin-form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ScrollProgressBar color={"red"} />
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
        <SignInForm
          onSubmitCb={function (e: FormEvent<HTMLFormElement>): void {
            throw new Error("Function not implemented.");
          }}
        ></SignInForm>
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
