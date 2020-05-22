import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import Card from "./components/Card";
import Search from "./components/Search";

const unsplash = new Unsplash({
  accessKey: `${process.env.REACT_APP_API_KEY}`,
});

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState("");

  const fetchImages = (term) => {
    setIsLoading(true);
    unsplash.search
      .photos(term, 1)
      .then(toJson)
      .then((json) => {
        const { results } = json;
        setImages(results);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchImages(term);
  }, [term]);

  return (
    <>
      <div className="container mx-auto">
        <Search searchText={(text) => setTerm(text)} />
        {isLoading && <div>Loading Please Wait</div>}
        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
