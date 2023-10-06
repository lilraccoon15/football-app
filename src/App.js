import { Main } from "./components/Main";
import { store } from "./redux/store";
import { Provider } from "react-redux"
import './style/index.css'

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
