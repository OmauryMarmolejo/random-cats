import React, { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

const CAT_ENDPOINT_IMAGE_URL =
  "https://cataas.com/cat/gif/says/Hello?filter=sepia&color=orange&size=40&type=or&json=true";
export function App() {
  const [fact, setFact] = useState("Test");

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;

        setFact(fact);
        const firstWord = fact.split(" ").slice(0, 3).join(" ");
        console.log(firstWord);
      });
  }, []);

  return (
    <main>
      <h1>Cats app</h1>
      {fact && <p>{fact}</p>}
    </main>
  );
}
