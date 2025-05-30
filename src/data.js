import html from "./assets/html-1.svg";
import css from "./assets/css-3.svg";
import js from "./assets/logo-javascript.svg";
import bootstrap from "./assets/bootstrap-5-1.svg";
import tailwind from "./assets/tailwindcss.svg";
import git from "./assets/git-icon.svg";
import github from "./assets/github.png";
import mui from "./assets/material-ui-1.svg";
import react from "./assets/react.svg";
import express from "./assets/express.svg";
import mongodb from "./assets/mongodb.svg";
import nodejs from "./assets/nodejs.svg";
import rails from "./assets/RubyonRails.svg";
import ruby from "./assets/ruby.svg";
import mysql from "./assets/mysql.svg";
import nest from "./assets/NestJS.svg";
import next from "./assets/NextJS.svg"
import figma from "./assets/Figma.svg"

import autoposter from "./assets/pr/autoposter.png";
import mcg from "./assets/pr/mcg.png";
import slivait from "./assets/pr/slivait.png";
import menemarket from "./assets/pr/menemarket.png";
import pizza from "./assets/pr/pizza.png";
import pizza_admin from "./assets/pr/pizza_admin.png";
import dust from "./assets/pr/dust.png";
import stays from "./assets/pr/stays.png";
import nuna from "./assets/pr/nuna.jpg";

// lottie
// import lottie from "./assets/lottie/space.lottie"

import pfp from "./assets/pfp.jpg"

// team
import mardonbek from "./assets/team/mardonbek.jpg"
import shukurillo from "./assets/team/shukurillo.jpg"
import muhammadali from "./assets/team/muhammadali.jpg"

export const skills = [
  {
    id: 1,
    name: "HTML",
    logo: html,
    info: "using html 5",
    star: 5,
    isLearning: false,
  },
  {
    id: 2,
    name: "CSS",
    logo: css,
    info: "using css 3",
    star: 4,
    isLearning: false,
  },
  {
    id: 3,
    name: "JavaScript",
    logo: js,
    info: "programming language",
    star: 3,
    isLearning: false,
  },
  {
    id: 4,
    name: "React",
    logo: react,
    info: "using lastest",
    star: 4,
    isLearning: false,
  },
  {
    id: 5,
    name: "Tailwind css",
    logo: tailwind,
    info: "css framework",
    star: 5,
    isLearning: false,
  },
  {
    id: 6,
    name: "git",
    logo: git,
    info: "github halper",
    star: 4,
    isLearning: false,
  },
  {
    id: 7,
    name: "GitHub",
    logo: github,
    info: "nick: silvante",
    star: 5,
    isLearning: false,
  },
  {
    id: 8,
    name: "MUi",
    logo: mui,
    info: "Material ui",
    star: 3,
    isLearning: false,
  },
  {
    id: 9,
    name: "Bootsrap",
    logo: bootstrap,
    info: "not often using",
    star: 2,
    isLearning: false,
  },
  {
    id: 10,
    name: "express",
    logo: express,
    info: "learned for mern",
    star: 4,
    isLearning: false,
  },
  {
    id: 11,
    name: "mongodb",
    logo: mongodb,
    info: "for database",
    star: 3,
    isLearning: false,
  },
  {
    id: 12,
    name: "node js",
    logo: nodejs,
    info: "for backend",
    star: 3,
    isLearning: false,
  },
  {
    id: 13,
    name: "Ruby",
    logo: ruby,
    info: "for personal use",
    star: 3,
    isLearning: false,
  },
  {
    id: 14,
    name: "Ruby on Rails",
    logo: rails,
    info: "for Full-stack",
    star: 5,
    isLearning: false,
  },
  {
    id: 15,
    name: "Mysql",
    logo: mysql,
    info: "with ORM",
    star: 4,
    isLearning: false,
  },
  {
    id: 16,
    name: "NestJs",
    logo: nest,
    info: "for backend",
    star: 4,
    isLearning: false,
  },
  {
    id: 17,
    name: "NextJs",
    logo: next,
    info: "for frontend",
    star: 4,
    isLearning: false,
  },
  {
    id: 18,
    name: "Figma",
    logo: figma,
    info: "Using for designing",
    star: 4,
    isLearning: false,
  },
];

export const projects = [
  {
    id: 1,
    name: "Auto Poster",
    info: "this web-site was creater for react exam and it took 20 days.",
    link: "https://auto-poster.netlify.app/",
    gitHub: "https://github.com/silvante/autoposter",
    image: autoposter,
    texnos: ["#html", "#css", "#JavaScript", "#React", "#Tailwind"],
    star: 5,
  },
  {
    id: 2,
    name: "MCG",
    info: "this game wes created when I was just learning begining of js, for fun.",
    link: "https://mcg-game.netlify.app/",
    gitHub: "https://github.com/Khamidov-M/memory-card-game",
    image: mcg,
    texnos: ["#html", "#css", "#JavaScript"],
    star: 2,
  },
  {
    id: 3,
    name: "Slivait",
    info: "This web was created for fun when I was learning node js and express (mern)",
    link: "https://slivait.netlify.app/",
    gitHub: "https://github.com/silvante/slivait",
    image: slivait,
    texnos: ["#html", "#css", "#JavaScript", "#react", "#tailwind"],
    star: 2,
  },
  {
    id: 4,
    name: "mene_market backend",
    info: "Backend part of mene market e-comm",
    link: "https://menemarket.uz/",
    gitHub: "https://github.com/silvante/mene_market",
    image: menemarket,
    texnos: ["#node", "#express", "#jwt", "#mongodb"],
    star: 5,
  },
  {
    id: 5,
    name: "Nuna (Figma)",
    info: "My mastermiece design of SM, can not share its link but can Sell it if you need not less then 499$",
    // link: "not really",
    // gitHub: "how",
    image: nuna,
    texnos: ["#figma", "#boxicons"],
    star: 5,
  },
  {
    id: 6,
    name: "Pizza (RehHot), client",
    info: "Full stack project with ruby on rails admin is inside of project",
    // link: "https://menemarket.netlify.app/",
    gitHub: "https://github.com/silvante/pizza",
    image: pizza,
    texnos: ["#rails", "#ruby", "#mysql", "#tailwind"],
    star: 5,
  },
  {
    id: 7,
    name: "Pizza (RehHot), admin",
    info: "Full stack project with ruby on rails client is inside of project",
    // link: "https://menemarket.netlify.app/",
    gitHub: "https://github.com/silvante/pizza",
    image: pizza_admin,
    texnos: ["#rails", "#ruby", "#mysql", "#tailwind"],
    star: 5,
  },
  {
    id: 8,
    name: "Dust (Figma)",
    info: "I have created full design of (desktop) Social media named Dust (idea is my own not copied) and can sell it if you need",
    link: "https://www.figma.com/design/i8rA7VUzwSODLoG5JAMETo/the_dast?node-id=0-1&p=f&t=uhjPY9e5xi1lgEVs-0",
    // gitHub: "how",
    image: dust,
    texnos: ["#figma", "#boxicons"],
    star: 5,
  },
  {
    id: 9,
    name: "Stays (Figma)",
    info: "I have created full design of (desktop) Social media named Stays (idea is my own not copied) site is for managing booking, I and can sell it if you need",
    // link: "not really",
    // gitHub: "how",
    image: stays,
    texnos: ["#figma", "#boxicons"],
    star: 5,
  },
];

export const profile_picture = mardonbek
export const github_icon = github
// export const lottie_animation = lottie
export const my_github_link = "https://github.com/silvante/"

export const team_members = [
  {
    id: 1,
    name: "Mardonbek Khamidov",
    link: "https://github.com/silvante",
    img: mardonbek,
  },
  {
    id: 2,
    name: "Muhammadali Jamolov",
    link: "https://github.com/Muhammadali-fr",
    img: muhammadali
  },
  {
    id: 3,
    name: "Shukurillo Boburov",
    link: "https://github.com/Boburov-Shukurillo",
    img: shukurillo
  }
]

export const articles = [
  {
    id: 1,
    title: "About AI",
    body: "Today a lot of developer espeacially Juniors, by the time I am publishing this I am Junior too, but I have different opinions about AI, and its effect on coding. First of all I don't think that Programming and Coding are the same, Coding is just writing human readable code, but programming is a combinarion of science with art, those who knows coding well but not good at logic and designing (or some stuff like that) can not be more then just employee that only lives for salery. Probably they can be replaced by AI. But about Programmers who has their own oppinions, own unique approach to making things, unique logic and unique sence of style will not be replaced by AI. As @dhh says, programming is not that kinda unlikable and boring profession to just give it to AI to get rid of it. I am programming because it makes me heppy and it is, even whan AI takes over and will be able to do what ever developers can, I will still code by hand because it makes sence, it is fun, and I know that even when programming will be fully replaced by AI, progarammers will be necessary to every tech company and other types of companies.",
    published_at: "30.05.2025",
    at: "ai"
  },
  {
    id: 2,
    title: "Is Ruby on Rails dead?",
    body: "This is a question that was commonly given in Social Media Platforms like Twitter(X) and YouTube since 2010. Being present for more then 15 years this question is still commonly asked, but why. It is because Rails is not dead and still remains and still number 1 framework for building powerful and scalable web apps. The biggest examples are Shopify and Github they are both started thair websites with Ruby on Rails and even after having more then millions of pequest per second they are still using Ruby on Rails as thair core framework. But What about UI or .erb files that generated by Rails for user interface, are they fast enough, are they good enough, my answer is Yas, Basecapm one of the best and most famouse project management platform still widely uses .erb generated html for thair user interface. Overall Rails is not dead and still powers the most famouse and powerful websites around the world.",
    published_at: "30.05.2025",
    at: "ruby on rails"
  }
]