import { HandleChange } from "./components/HandleChange";
import { Card } from "./components/card";
function App() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 grid-row items-center">
        <HandleChange />
        <Card />
      </div>

    </>
  );
}

export default App;
