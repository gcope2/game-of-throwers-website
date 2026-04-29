const scheduleData = [
  // WEEK 1
  { date: "Monday June 1, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Tuesday June 2, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "5:00 PM", to: "6:30 PM", type: "Throws Session", team: "10U & 12U" }
  ]},
  { date: "Wednesday June 3, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Thursday June 4, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "5:00 PM", to: "6:30 PM", type: "Throws Session", team: "10U & 12U" }
  ]},
  { date: "Friday June 5, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Saturday June 6, 2026", events: [
    { from: "12:00 PM", to: "3:00 PM", type: "Competition", team: "10U & 12U", isComp: true },
    { from: "3:30 PM", to: "7:30 PM", type: "Competition", team: "14U & 15U", isComp: true }
  ]},
  { date: "Sunday June 7, 2026", events: [
    { from: "12:00 PM", to: "5:00 PM", type: "Competition", team: "17U & Varsity", isComp: true }
  ]},

  // WEEK 2
  { date: "Monday June 8, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Tuesday June 9, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "5:00 PM", to: "6:30 PM", type: "Throws Session", team: "10U & 12U" }
  ]},
  { date: "Wednesday June 10, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Thursday June 11, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "5:00 PM", to: "6:30 PM", type: "Throws Session", team: "10U & 12U" }
  ]},
  { date: "Friday June 12, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Saturday June 13, 2026", events: [
    { from: "12:00 PM", to: "3:00 PM", type: "Competition", team: "10U & 12U", isComp: true },
    { from: "3:30 PM", to: "7:30 PM", type: "Competition", team: "14U & 15U", isComp: true }
  ]},
  { date: "Sunday June 14, 2026", events: [
    { from: "12:00 PM", to: "4:00 PM", type: "Competition", team: "17U & Varsity", isComp: true }
  ]},

  // WEEK 3
  { date: "Monday June 15, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Tuesday June 16, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "5:00 PM", to: "6:30 PM", type: "Throws Session", team: "10U & 12U" }
  ]},
  { date: "Wednesday June 17, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Thursday June 18, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "5:00 PM", to: "6:30 PM", type: "Throws Session", team: "10U & 12U" }
  ]},
  { date: "Friday June 19, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Saturday June 20, 2026", events: [
    { from: "12:00 PM", to: "6:00 PM", type: "Competition", team: "All Ages", isComp: true }
  ]},
  { date: "Sunday June 21, 2026", events: [
    { from: "00:00", to: "00:00", type: "Off Day", team: "None"}
  ]},

  // WEEK 4
  { date: "Monday June 22, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Tuesday June 23, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "5:00 PM", to: "6:30 PM", type: "Throws Session", team: "10U & 12U" }
  ]},
  { date: "Wednesday June 24, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Thursday June 25, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "5:00 PM", to: "6:30 PM", type: "Throws Session", team: "10U & 12U" }
  ]},
  { date: "Friday June 26, 2026", events: [
    { from: "12:00 PM", to: "1:30 PM", type: "Throws Session", team: "17U & Varsity" },
    { from: "1:40 PM", to: "2:55 PM", type: "Lifts", team: "17U & Varsity" },
    { from: "4:30 PM", to: "6:00 PM", type: "Throws Session", team: "14U & 15U" },
    { from: "6:15 PM", to: "7:30 PM", type: "Lifts", team: "14U & 15U" }
  ]},
  { date: "Saturday June 27, 2026", events: [
    { from: "12:00 PM", to: "3:00 PM", type: "Competition", team: "10U & 12U", isComp: true },
    { from: "3:30 PM", to: "7:30 PM", type: "Competition", team: "14U & 15U", isComp: true }
  ]},
  { date: "Sunday June 28, 2026", events: [
    { from: "12:00 PM", to: "4:00 PM", type: "Competition", team: "17U & Varsity", isComp: true }
  ]}
];

export default scheduleData;