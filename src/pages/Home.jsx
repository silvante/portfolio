import Banner from "../components/Banner";
import Articles from "../sections/Articles";
import Resume from "../assets/resume/xamidov_resume.pdf"
import { FileDown } from "lucide-react";

const Home = () => {
  return (
    <div className="p-5">
      <Banner />
      <div className="w-full flex justify-center items-center">
        <a href={Resume} download className="flex gap-1 bg-violet-600 py-2 px-4 rounded-xl" >Download Resume <FileDown /></a>
      </div>
      <Articles />
      <div className="w-full flex justify-center">
        <div className="">
          <h4>Thank you for reading</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
