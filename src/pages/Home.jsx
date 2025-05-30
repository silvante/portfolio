import Banner from "../components/Banner";
import Space from "../lottie/Space";
import Articles from "../sections/Articles";

const Home = () => {
  return (
    <div className="p-5">
      <Banner />
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
