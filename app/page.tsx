import Banner from "./(components)/Banner";
import CallToAction from "./(components)/CallToAction";

export default function Home() {
  return (
    <>
      <Banner />

      <section className="shell page">
        <CallToAction />
      </section>
    </>
  );
}
