import { Link } from "react-router-dom";
import At from "../components/At";
import Album from "../components/Album";

const Info = () => {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-2xl font-semibold">Album</h1>
      <p>you can click small photos to make them main one!</p>
      <Album />
      <h1 className="text-2xl font-semibold">About me</h1>
      <At text="mkf" />
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">
          Hey there 👋, my name is Mardonbek.
        </h2>
        <h3 className="text-lg font-medium">
          <span className="text-white/70">#</span> Overall
        </h3>
        <p>
          My full name is "Mardonbek Khamidov Farkhadovich," or simply{" "}
          <span className="font-semibold">@mkf</span>. As a child, I was really
          interested in hardware engineering. I disassembled tons of devices to
          see how they worked under the hood. This curiosity was one of the main
          reasons I chose software engineering as my career—because the two
          fields are quite similar. When I attended my first programming
          courses, I realized it was the one path in life I could truly enjoy
          and get paid for. I got my first laptop when I was about 8 years old,
          and I loved using it. I became fascinated by desktop and web apps. I
          really wanted to create something like YouTube, which helped me learn
          to build things by hand. Even today, one of my biggest goals is to
          create a social media platform.
        </p>
        <h3 className="text-lg font-medium">
          <span className="text-white/70">#</span> Frontend Education
        </h3>
        <p>
          I first started programming courses in{" "}
          <span className="font-semibold">2022</span>, but for some reasons, I
          dropped out after two months. Then, on{" "}
          <span className="font-semibold">February 23, 2023</span>, I began
          learning frontend development at Web King Education Center. After
          studying diligently for one year, I completed the course on{" "}
          <span className="font-semibold">February 23, 2024</span>. During that
          time, I became familiar with JavaScript, React.js, and many helpful
          npm libraries. I kept asking myself, "Can I build something that
          really matters?" The answer was interesting: "Yeah, if I had someone
          to build the backend!" But that wasn't my preferred way of working—I
          wanted to do it myself. That’s when I realized I needed to learn
          backend development.
        </p>
        <h3 className="text-lg font-medium">
          <span className="text-white/70">#</span> Backend Education
        </h3>
        <p>
          I began backend development with{" "}
          <span className="font-semibold">Ruby</span>, and it was my{" "}
          <span className="font-semibold">first love</span>. I loved how it
          boosted my productivity. Ruby did its job beautifully with{" "}
          <span className="font-semibold">Ruby on Rails</span>. It was easy to
          use and had a beautiful, elegant syntax I really enjoyed. But as I was
          mainly a frontend developer at the time, RoR wasn't easy for me. After
          struggling with it, I switched to{" "}
          <span className="font-semibold">Node.js</span>. It was more
          complicated than Rails, but pushing through that complexity helped me
          level up as a backend developer. I also considered learning PHP and
          Golang, but none of them felt like Ruby. Eventually, I returned to
          Ruby on Rails—and this time, everything clicked. I understood its
          methods and really enjoyed working with it. Unfortunately, there are
          few Ruby jobs in Uzbekistan, so now I use Ruby on Rails mainly for
          side projects.
        </p>
      </div>
      <p>
        If you want to know more about me, you can check my{" "}
        <Link to={"/contacts"} className="text-violet-600 underline">
          contacts
        </Link>
        .
      </p>
      <Link
        to={"/skills"}
        className="px-4 py-2 bg-violet-600 rounded-xl inline-block"
      >
        Skills →
      </Link>
    </div>
  );
};

export default Info;
