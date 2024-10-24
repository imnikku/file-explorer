import { useState } from "react";
import explorer from "./data/folderdata";
import Folder from "./component/Folder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
