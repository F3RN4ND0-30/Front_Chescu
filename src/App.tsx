import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import { Home } from "./pages";


function App() {
  const theme = createTheme({});
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index={true}
              element={<Home />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
