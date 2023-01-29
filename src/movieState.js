//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "Hidexe Sa",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/hidexe-sa",
      awards: [
        {
          title: "Angular Job",
          description:
            "“My love for angular started here, I really enjoy working with this framework.”",
        },
        {
          title: "First professional experience as a developer.",
          description:
            "“I cannot thank Korian Edeline, who is the project manager, enough for giving me this chance.”",
        },
        {
          title: "Startup vision.",
          description:
            "“I am glad that I know now how a startup works, the team spirit is the main thing here!”",
        },
      ],
    },
    {
      title: "BeCode",
      mainImg: goodtimes,
      url: "/work/becode",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Personal Projects",
      mainImg: theracer,
      url: "/work/personal-projects",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
