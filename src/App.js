import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./page/Home/Home";
import { theme } from "./Theme/theme";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout/>,
      path: '/',
      children: [
        {
          element: <Home/>,
          path: '/',
        }
      ]
    }
  ])
  return (
    <div>
     <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <CssBaseline/>
     </ThemeProvider>
    </div>
  );
}

export default App;
