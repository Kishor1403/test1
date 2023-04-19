import {
  FileUploadHandler,
  Footer,
  HeroCarousel,
  ImageInput,
  NavbarMenu,
  ServicesInfo,
  TeamInfo,
  TextToOCRHandler,
  VideoUploadHandler,
} from "./components";
import logo from "./logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <HeroCarousel />
      {/* <FileUploadHandler /> */}
      {/* <VideoUploadHandler /> */}
      <TextToOCRHandler />
      <ServicesInfo />
      <TeamInfo />
      <Footer />
      {/* <ImageInput /> */}
    </div>
  );
}

export default App;
