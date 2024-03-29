import "./App.css";
import { ContactForm } from "./components/organisms/contact-form/contact-form";
import { lightTheme } from "./theme/theme";
import { FormEvent, useState } from "react";
import FilteredList from "./components/molecules/filtered-list/filtered-list";
import BarChart from "./components/organisms/charts/bar-chart";
import { barChartData, listItems, options } from "../data/fake-data";
import { ScrollProgressBar } from "./components/atoms/scroll-progress-bar/scroll-progress-bar";
import React from "react";
import { Button } from "./components/atoms/button/button";
import { SignInForm } from "./components/organisms/signin-form/signin-form";
import { ThemeProvider, Typography } from "@mui/material";
import { Tile } from "./components/molecules/tile/tile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Tile
          title={"Top Article Today"}
          content={
            <div>
              <h1>Comparing Linaria and Styled-Components</h1>
              <h5>Total view: 10.3k</h5>
              <h5>Online since: 15.04.2023</h5>
            </div>
          }
        />
        <div>
          <Typography variant="h1">This is an h1 heading</Typography>
          <Typography variant="h2">This is an h2 heading</Typography>
          <Typography variant="h3">This is an h3 heading</Typography>
          <Typography variant="h4">This is an h4 heading</Typography>
          <Typography variant="h5">This is an h5 heading</Typography>
          <Typography variant="h6">This is an h6 heading</Typography>
          <Typography variant="subtitle1">This is a subtitle1</Typography>
          <Typography variant="subtitle2">This is a subtitle2</Typography>
          <Typography variant="body1">This is a body1 text</Typography>
          <Typography variant="body2">This is a body2 text</Typography>
          <Typography variant="caption">This is a caption text</Typography>
          <Typography variant="overline">This is an overline text</Typography>
        </div>

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
        <Button>Cui Button</Button>
        <ContactForm
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
