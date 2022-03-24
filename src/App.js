import logo from "./logo.svg";
import "./App.css";
import SearchAppBar from "./SearchAppBar";
import TrackingForm from "./TrackingForm";
import StatusLog from "./StatusLog";
import Toolbar from "@mui/material/Toolbar";
import TrackingView from "./TrackingView";
import { Route, Routes } from "react-router-dom";
import MainLeadForm from "./MainLeadForm";
import Home from "./Home";

function App() {
  return (
    <div>
      <header>
        <SearchAppBar />
      </header>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lead" element={<MainLeadForm />} />
      </Routes>
      <br />
      {/* <div className="App-body">
        <TrackingForm />
        <TrackingView />
        <StatusLog />
      </div> */}
    </div>
  );
}

export default App;
