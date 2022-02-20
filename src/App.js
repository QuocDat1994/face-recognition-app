import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-tsparticles";

function App() {
  return (
    <>
      <Particles
        className="particles fixed"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 2,
              },
            },
          },
          particles: {
            links: {
              distance: 150,
              enable: true,
              opacity: 0.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              outMode: "bounce",
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 0.5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    </>
  );
}

export default App;
