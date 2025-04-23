import html from "./assets/html-1.svg";
import css from "./assets/css-3.svg";
import js from "./assets/logo-javascript.svg";
import bootstrap from "./assets/bootstrap-5-1.svg";
import tailwind from "./assets/tailwindcss.svg";
import git from "./assets/git-icon.svg";
import github from "./assets/github-icon-1.svg";
import mui from "./assets/material-ui-1.svg";
import react from "./assets/react.svg";
import express from "./assets/express.svg";
import mongodb from "./assets/mongodb.svg";
import nodejs from "./assets/nadejs.svg";
import rails from "./assets/rails.svg";
import ruby from "./assets/Ruby_logo.png";
import mysql from "./assets/mysql.svg";
import nest from "./assets/NestJS.svg";
import next from "./assets/NextJS.svg"

import autoposter from "./assets/pr/autoposter.png";
import mcg from "./assets/pr/mcg.png";
import slivait from "./assets/pr/slivait.png";
import menemarket from "./assets/pr/menemarket.png";
import pizza from "./assets/pr/pizza.png";
import pizza_admin from "./assets/pr/pizza_admin.png";

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
    isLearning: true,
  },
  {
    id: 17,
    name: "NextJs",
    logo: next,
    info: "for frontend",
    star: 4,
    isLearning: true,
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
    name: "Pizza (RehHot), client",
    info: "Full stack project with ruby on rails admin is inside of project",
    // link: "https://menemarket.netlify.app/",
    gitHub: "https://github.com/silvante/pizza",
    image: pizza,
    texnos: ["#rails", "#ruby", "#mysql", "#tailwind"],
    star: 5,
  },
  {
    id: 6,
    name: "Pizza (RehHot), admin",
    info: "Full stack project with ruby on rails client is inside of project",
    // link: "https://menemarket.netlify.app/",
    gitHub: "https://github.com/silvante/pizza",
    image: pizza_admin,
    texnos: ["#rails", "#ruby", "#mysql", "#tailwind"],
    star: 5,
  },
];
