import { useState, useEffect } from "react";
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ").slice(0, 3).join(" ");

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?&size=40&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl };
}
