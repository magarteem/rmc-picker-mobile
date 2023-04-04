import { AppRouter } from "./core/router/AppRouter";
import ScrollToTop from "./hook/useScrollToTop";
import "./styles/index.scss";

export const App = () => {
 return (
  <div className="App">
   <ScrollToTop />
   <AppRouter />
  </div>
 );
};
