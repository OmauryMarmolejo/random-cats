import { useEffect, useState } from "react";
import "./App.css";
import { useCatImage } from "./hooks/useCatImage";

import { getRandomFact } from "./services/facts";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
export function App() {
  const [fact, setFact] = useState();
  const { imageUrl } = useCatImage({ fact });

  useEffect(() => {
    getRandomFact().then(setFact);
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main>
      <h1>Cats app</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first three words from ${fact}`}
        />
      )}
    </main>
  );
}
