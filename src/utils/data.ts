import arrowBlue from "../assets/icons/arrowBlue.svg";
import astro from "../assets/icons/astro_dark.svg";
import css from "../assets/icons/css.svg";
import email from "../assets/icons/email.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import html from "../assets/icons/html5.svg";
import javascript from "../assets/icons/javascript.svg";
import linkedIn from "../assets/icons/Linkedin.svg";
import next from "../assets/icons/next.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import sass from "../assets/icons/sass.svg";
import styledcomponents from "../assets/icons/styledcomponents.svg";
import tailwindCSS from "../assets/icons/tailwindcss.svg";
import typeS from "../assets/icons/typescript.svg";
import whats from "../assets/icons/whatsapp.svg";
import animais from "../assets/images/animais.png";
import bikcraft from "../assets/images/bikcraft.png";
import disney from "../assets/images/disney.png";
import dogs from "../assets/images/Dogs.png";
import eplay from "../assets/images/eplay.png";
import zingen from "../assets/images/zingen.png";

export const PROJECTS = [
  {
    img: eplay,
    title: "Eplay",
    description:
      "Eplay é uma plataforma de venda de games on-line com os melhores games da atualidade",
    href: "projeto/eplay",
    alt: "projeto Dogs desenvolvido por Emmanuel Oliveira",
    tec1: react,
  },
  {
    img: bikcraft,
    title: "BikCraft",
    description: "Site de Bicicletas Elétricas",
    href: "projeto/bikcraft",
    alt: "projeto Bikcraft Desenvolvido por Emmanuel Oliveira",
    tec1: css,
  },
  {
    img: dogs,
    title: "Dogs",
    description: "Dogs é uma rede social de cachorros",
    href: "projeto/dogs",
    alt: "projeto Dogs desenvolvido por Emmanuel Oliveira",
    tec1: react,
  },
  {
    img: zingen,
    title: "Zingen",
    description:
      "É um aplicativo de música, encontre suas musicas favoritas aqui",
    href: "projeto/zingen",
    alt: "projeto zingen desenvolvido por Emmanuel Oliveira",
    tec1: astro,
  },

  {
    img: disney,
    title: "Clone do Disney+",
    description: "Venha conhecer o clone do Aplicativo Disney+",
    href: "projeto/disneyplus",
    alt: "projeto clone do Disney desenvolvido por Emmanuel Oliveira",
    tec1: sass,
  },
  {
    img: animais,
    title: "Animais Fantásticos",
    description:
      "Venha conhecer essa Landing page fantástica com as curiosidades dos animais do nosso planeta",
    href: "projeto/animaisfantasticos",
    alt: "projeto Animais Fantásticos desenvolvido por Emmanuel Oliveira",
    tec1: javascript,
  },
];

export const TECHS = [
  {
    name: "Next.JS",
    alt: "ícone da Tecnologia NextJS",
    image: next,
  },
  {
    name: "TailwindCSS",
    alt: "ícone da Tecnologia TailwindCSS",
    image: tailwindCSS,
  },
  {
    name: "React.Js",
    alt: "ícone da Tecnologia ReactJs",
    image: react,
  },
  {
    name: "TypeScript",
    alt: "ícone da Tecnologia TypeScript",
    image: typeS,
  },
  {
    name: "Astro.Js",
    alt: "ícone da Tecnologia Astro.Js",
    image: astro,
  },
  {
    name: "SASS",
    alt: "ícone da Tecnologia SASS",
    image: sass,
  },
  {
    name: "JavaScript",
    alt: "ícone da Tecnologia JavaScript",
    image: javascript,
  },

  {
    name: "Styled components",
    alt: "ícone do GitHub",
    image: styledcomponents,
  },
  {
    name: "GitHub",
    alt: "ícone do GitHub",
    image: git,
  },
  {
    name: "CSS3",
    alt: "ícone da  tecnologia CSS3",
    image: css,
  },
  {
    name: "HTML5",
    alt: "ícone da  tecnologia HTML5",
    image: html,
  },
  {
    name: "Redux@toolkit",
    alt: "ícone da  tecnologia Redux",
    image: redux,
  },
];

export const MENU = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Projetos",
    url: "/#projects",
  },
  {
    name: "Serviços",
    url: "/#services",
  },
  {
    name: "Contatos",
    url: "/#contacts",
  },
];

export const SOCIAL = [
  {
    img: whats,
    name: "WhatsApp",
    href: "https://wa.me/5511968336094",
    alt1: "acesso a linkedIn de Emmanuel Marcos de Oliveira",
    alt2: "ícone de seta de acesso a rede social LinkedIn",
    link: arrowBlue,
  },
  {
    img: linkedIn,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/oliveira-emmanuel/",
    alt1: "acesso a linkedIn de Emmanuel Marcos de Oliveira",
    alt2: "ícone de seta de acesso a rede social LinkedIn de Emmanuel Oliveira",
    link: arrowBlue,
  },
  {
    img: github,
    name: "GitHub",
    href: "https://github.com/emmanuelmarcosdeoliveira/",
    alt1: "acesso a gitHub de Emmanuel Marcos de Oliveira",
    alt2: "ícone de seta de acesso ao github de Emmanuel Oliveira",
    link: arrowBlue,
  },

  {
    img: email,
    name: "E-mail",
    href: "mailto:ofs.dev.br@gmail.com",
    alt1: "acesso a email de Emmanuel Oliveira",
    alt2: "ícone de seta de acesso a email",
    link: arrowBlue,
  },
];
