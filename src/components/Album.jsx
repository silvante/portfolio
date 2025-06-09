import React, { useState } from "react";
import { photos } from "../data";

const Album = () => {
  const [index, setIndex] = useState(1);
  let main_pic = photos.find((p) => p.id == index)
  let filtered_photos = photos.filter((p) => p.id !== index);

  const ChangeIndex = (id) => {
    setIndex(id)
    filtered_photos = photos.filter((p) => p.id !== index);
    main_pic = photos.find((p) => p.id == index)
  }

  return (
    <div className="w-full grid grid-cols-2 gap-3">
      <div>
        <img src={main_pic.photo} alt="main image" />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-3">
        {filtered_photos.map((p) => {
          return (
            <button onClick={() => setIndex(p.id)} key={p.id}>
              <img src={p.photo} alt={`my image ${p.id}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Album;
