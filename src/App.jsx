import "./app.css";
import LeftBar from "./componets/leftBar/leftBar";
import TopBar from "./componets/topBar/topBar";
import Gallery from "./componets/gallery/gallery";

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
