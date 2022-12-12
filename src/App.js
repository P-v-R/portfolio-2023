import "./App.css";
import LandingPage from "./LandingPage";
import { trailingCursor } from "cursor-effects";

function App() {
  new trailingCursor({ particles: 7 });
  return (
    <div className="h-screen bg-base font-mono cursor-none">
      <LandingPage />
    </div>
  );
}

export default App;
