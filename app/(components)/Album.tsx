import Image from "next/image";
import { photos } from "../data";

export default function Album() {
  const index = 1;
  let main_pic: any = photos.find((p) => p.id == index);
  let filtered_photos = photos.filter((p) => p.id !== index);

  return (
    <div className={`w-full grid grid-cols-1 gap-3 md:grid-cols-2`}>
      <div>
        <Image
          src={main_pic.photo}
          alt="main image"
          height={720}
          width={1280}
          className="w-full h-full"
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-3">
        {filtered_photos.map((p) => {
          return (
            <Image
              key={p.id}
              src={p.photo}
              alt={`Xamidov uz, Xamidov Mardonbek, Mardonbek Khamidov's full-body portrait taken in 2025 in Dubai`}
              height={720}
              width={1280}
              className="w-full h-full"
            />
          );
        })}
      </div>
    </div>
  );
}
