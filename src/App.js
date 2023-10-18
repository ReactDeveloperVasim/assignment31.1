import { Card, CardContent } from "@mui/material";
import React from "react";
import { Landing } from "./components/Landing";
import PracticeOnClickClr from "./components/PracticeOnClickClr";
import { Bulb } from "./components/Bulb";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <Card sx={{bgcolor:"aliceblue"}}>
        <CardContent>
            <Landing />
        </CardContent>
    </Card>
    // <PracticeOnClickClr />
    // <Bulb />
    // <ToDoList />
  );
}

export default App;
