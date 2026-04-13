export default {
  title: "Game of Throws",
  items: [
    {
      id: "home",
      title: "Home",
      slug: "home",
      location: "/game-of-throwers/home",
    },
    {
      id: "schedule",
      title: "Schedule",
      slug: "schedule",
      children: [
        { id: "schedule-main", title: "Schedule", slug: "schedule" },
        { id: "comps", title: "Comps.", slug: "schedule" },
        { id: "practice", title: "Practice", slug: "schedule" },
      ]
    },
    {
      id: "team",
      title: "Team",
      slug: "team",
      children: [
        { id: "team-main", title: "Team", slug: "team" },
        { id: "throwers", title: "Throwers", slug: "team" },
        { id: "coaches", title: "Coaches", slug: "team" }
      ]
    },
    {
      id: "about",
      title: "About",
      slug: "about",
      children: [
        { id: "about-main", title: "About", slug: "about" },
        { id: "mission", title: "Mission", slug: "about" },
        { id: "contact", title: "Contact", slug: "about" }
      ]
    }
  ]
};