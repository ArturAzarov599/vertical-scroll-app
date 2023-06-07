import Phase from "./components/Phase/Phase";

import { useHorizontalScroll } from "./hooks/useHorizontalScroll";

import { mockPhaseData } from "./mocks/mock-phase-data";

import BackgroundIllustration from "./assets/images/background-illustration.png";

import "./App.styles.css";

const App = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="roadmap">
      <div className="roadmap-bg">
        <img src={BackgroundIllustration} alt="bg illustration" />
      </div>

      <div className="roadmap-title-wrapper">
        <h1 className="roadmap-title">Roadmap</h1>
      </div>

      <div ref={scrollRef} className="roadmap-content container">
        {mockPhaseData.map((data) => (
          <Phase {...data} />
        ))}
      </div>
    </div>
  );
};

export default App;
