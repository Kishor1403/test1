import {
  FileUploadHandler,
  Footer,
  HeroCarousel,
  ImageInput,
  NavbarMenu,
  ServicesInfo,
  TeamInfo,
  VideoUploadHandler,
} from "./components";
import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <HeroCarousel />
      <FileUploadHandler />
      <VideoUploadHandler />
      <ServicesInfo />
      <TeamInfo />
      <Footer />
      {/* <ImageInput /> */}
    </div>
  );
}

export default App;
