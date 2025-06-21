import Banner from "./(components)/Banner";
import { FileDown } from "lucide-react";
import Articles from "./(sections)/Articles";

export default function Home() {
  return (
    <div className="p-5">
      <Banner />
      <div className="w-full flex justify-center items-center mb-5">
        <a
          href={"/resume/xamidov_mardonbek_resume.pdf"}
          download
          className="flex gap-1 bg-violet-600 py-2 px-4 rounded-xl"
        >
          Download Resume <FileDown />
        </a>
      </div>
      <Articles />
      <div className="w-full flex justify-center">
        <div className="">
          <h4>Thank you for reading</h4>
        </div>
      </div>
    </div>
  );
}
