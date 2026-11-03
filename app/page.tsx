import Banner from "./(components)/Banner";
import CallToAction from "./(components)/CallToAction";
import Services from "./(components)/Services";
import WorkflowTeaser from "./(components)/WorkflowTeaser";

export default function Home() {
  return (
    <>
      <Banner />

      <Services />

      <WorkflowTeaser />

      <section className="shell page pt-0!">
        <CallToAction />
      </section>
    </>
  );
}
