import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "./components/Routes";
import { CycleContextProvider } from "./contexts/CyclesContext";
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CycleContextProvider>
        <RoutesComponent/>
      </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
