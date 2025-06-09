import React, { useEffect, useState } from "react";
import { photos } from "../data";
import Loader from "./Loader";

const Album = () => {
  const [index, setIndex] = useState(1);
  let main_pic = photos.find((p) => p.id == index);
  let filtered_photos = photos.filter((p) => p.id !== index);

  // loader
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    setLoadedCount(0); // Reset when photos change
  }, []);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const all_loaded = loadedCount >= photos.length;

  return (
    <>
      {!all_loaded && (
        <div className="w-full flex justify-center items-center flex-col gap-4 py-16">
          <Loader />
          <p>Loading photos...</p>
        </div>
      )}

      {all_loaded && (
        <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <img
              src={main_pic.photo}
              alt="main image"
              onLoad={handleImageLoad}
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            {filtered_photos.map((p) => {
              return (
                <button onClick={() => setIndex(p.id)} key={p.id}>
                  <img
                    src={p.photo}
                    alt={`my image ${p.id}`}
                    onLoad={handleImageLoad}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Album;
