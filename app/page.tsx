import Banner from "./(components)/Banner";
import CallToAction from "./(components)/CallToAction";
import WorkflowTeaser from "./(components)/WorkflowTeaser";

export default function Home() {
  return (
    <>
      <Banner />

      <WorkflowTeaser />

      <section className="shell page pt-0!">
        <CallToAction />
      </section>
    </>
  );
}
