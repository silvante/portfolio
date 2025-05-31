import { Link } from "react-router-dom";
import At from "../components/At";

const Info = () => {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-2xl font-semibold">About me</h1>
      <At text="mkf" />
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">
          Hey there 👋, my name is Mardonbek.
        </h2>
        <h3 className="text-lg font-medium"><span className="text-white/70">#</span> Overall</h3>
        <p>
          My full name is "Mardonbek Khamidov Farkhadovich" or simply <span className="font-semibold"> @mkf</span>, As a child I was really interested in Hardware Engineering, I separated a ton of technology into detail to see how they work under the hood. This interest was one of the main reasons of why I choiced Software Engineering as my primary job, because those two professions was pretty identical. When I went to my first cources of programming I realised that it was my only way in life, which I can truly enjoy going and get paid for. I got my fist laptop when I was about 8 years old and I really enjoyed using it, and I started to pay attention to Desctop apps and web apps. I really wanted to create something like YouTube which was really helpful to me to create some hand made stuff, even now one of my goals is to create Social Media.
        </p>
        <h3 className="text-lg font-medium"><span className="text-white/70">#</span> Frontend Education</h3>
        <p>
          First I started to go to programming cources in <span className="font-semibold">2022</span> but for some reasons I dropped it after two months of learning. Then in <span className="font-semibold">23rd february of 2023</span> I started learning Frontend development in Web King Education conter. After studying perfectly one year I ended Frontend courses in <span className="font-semibold">23rd February of 2024</span>, in that time, I was familiar with JavaScript and React js, also with bunch of npm libraries to use in development. I started to wonder and started continually asking myself "Can I create something that really matters" the answer was really interesting "Yeah, if I had someone that helps me to create backend of it"! I was quite unheppy to know it, because it was not my style of working, I wanted to create it myself, that is when I realised that I have to learn backend.
        </p>
        <h3 className="text-lg font-medium"><span className="text-white/70">#</span> Backend Education</h3>
        <p>
          I started backend with <span className="font-semibold">Ruby</span> programming language and it was my <span className="font-semibold">first love</span>. I really liked it and enjoyed using it as a tool that upgrades my productivity. Ruby really did its job with <span className="font-semibold">Ruby on Rails</span> it was really easy to use and had beautyful and elegance syntax that I really liked. But as I was only frontend developer, RoR was not easy for me. After failing to learn RoR I started learning <span className="font-semibold">NodeJs</span> for backend. Node js was more complicated then rails but I forced myself to learn it and that complexity helped me to level-up as a backend developer. I wanted to learn PHP at the time I wanted to learn Golang but non of them felt like Ruby. And I came back to Ruby on Rails, and this time was different I could understand every method of it and I was really interested to learn it and to do it my primary Tool. But just because there was no jobs for Ruby in my country Uzbekistan, and now I am using Ruby on Rails for only my side projects. 
        </p>
      </div>
      <p>if you want to know about me more You can chack my <Link to={"/contacts"} className="text-violet-600 underline">contacts</Link></p>
      <Link to={"/skills"} className="px-4 py-2 bg-violet-600 rounded-xl inline-block">Skills →</Link>
    </div>
  );
};

export default Info;
