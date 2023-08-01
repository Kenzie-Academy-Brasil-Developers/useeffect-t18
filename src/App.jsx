import { useState } from "react";
import { FavoriteModal } from "./components/modal/FavoriteModal";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss"

function App() {
   const [isVisible, setVisible] = useState(false);
   return (
      <>
        <HomePage setVisible={setVisible} />
        {isVisible ? <FavoriteModal setVisible={setVisible} /> : null}
      </>
   );
}

export default App;
