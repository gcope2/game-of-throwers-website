export default {
  title: "Game of Throws",
  items: [
    {
      id: "home",
      title: "Home",
      slug: "home",
      location: "?page=home",
    },
    {
      id: "schedule",
      title: "Schedule",
      slug: "schedule",
      location: "?page=schedule",
      children: [
        { id: "schedule-main", title: "Full Schedule", slug: "schedule" },
        { id: "comps", title: "Competition Schedule", slug: "comps" },
        { id: "practices", title: "Practice Schedule", slug: "practices" },
      ]
    },
    {
      id: "team",
      title: "Team",
      slug: "team",
      location: "?page=team",
      children: [
        { id: "team-main", title: "Our Team", slug: "team" },
        { id: "throwers", title: "Throwers", slug: "team" },
        { id: "coaches", title: "Coaches", slug: "team" }
      ]
    },
    {
      id: "about",
      title: "About",
      slug: "about",
      location: "?page=about",
      children: [
        { id: "about-main", title: "About Us", slug: "about" },
        { id: "mission", title: "Mission", slug: "about" },
        { id: "contact", title: "Contact", slug: "about" }
      ]
    }
  ]
};