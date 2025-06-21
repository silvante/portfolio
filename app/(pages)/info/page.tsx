import Album from "@/app/(components)/Album";
import At from "@/app/(reusable)/At";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mardonbek Khamidov | Portfolio | Info",
  description:
    "I'm Mardonbek Khamidov, a passionate Software Engineer from Uzbekistan with a strong background in full-stack development. I build fast, reliable, and secure web applications. Learn more about my experience, values, and the technologies I love.",
  keywords: [
    "Khamidov",
    "khamidov",
    "hamidov",
    "Hamidov",
    "Xamidov",
    "xamidov",
    "Mardonbek",
    "mardonbek",
    "Mardonbek Khamidov",
    "Mardonbek Khamidov info",
    "mardonbek khamidov",
    "mardonbek khamidov info",
    "Mardonbek Xamidov",
    "Mardonbek Xamidov info",
    "mardonbek xamidov",
    "mardonbek xamidov info",
    "Mardonbek Hamidov",
    "mardonbek hamidov",
    "sayt",
    "portfolio",
    "Portfolio",
    "khamidov-porfoio",
    "Khamidov-porfoio",
    "Xamidov-porfoio",
    "Mardonbek uz",
    "Mardonbek Uz",
    "mardonbek uz",
    "Xamidov uz",
    "Khamidov uz",
    "xamidov uz",
    "khamidov uz",
  ],
  alternates: {
    canonical: "https://xamidov.uz/info",
  },
  openGraph: {
    title: "Mardonbek Khamidov | Portfolio | Info",
    description:
      "I'm Mardonbek Khamidov, a passionate Software Engineer from Uzbekistan with a strong background in full-stack development. I build fast, reliable, and secure web applications. Learn more about my experience, values, and the technologies I love.",
    url: "https://xamidov.com/info",
    siteName: "Mardonbek Khamidov Portfolio",
    images: [
      {
        url: "https://github.com/silvante/portfolio/blob/main/app/assets/og_image.png?raw=true",
        width: 280,
        height: 280,
        type: "image/png",
        alt: "Mardonbek Khamidov Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mardonbek Khamidov | Portfolio | Info",
    description:
      "Explore the skill set of Mardonbek Khamidov – Full Stack Engineer with experience in web frameworks and scalable systems.",
    images: ["https://github.com/silvante/portfolio/blob/main/app/assets/og_image.png?raw=true"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Info() {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-2xl font-semibold">Album</h1>
      <At text="Mardonbek Khamidov photos" />
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
        <Link href={"/contacts"} className="text-violet-600 underline">
          contacts
        </Link>
        .
      </p>
      <Link
        href={"/skills"}
        className="px-4 py-2 bg-violet-600 rounded-xl inline-block"
      >
        Skills →
      </Link>
    </div>
  );
}
