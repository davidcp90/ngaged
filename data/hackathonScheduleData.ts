const data: Array<any> = [
  {
    day: 1,
    key: 1,
    activity: "Open Keynote",
    time: "9:00"
  },
  {
    day: 1,
    key: 2,
    activity: "Icebreakers",
    time: "9:30"
  },
  {
    day: 1,
    key: 3,
    activity: "Workshop: Innovation - Ideas to get the most of the hackathon - Guest speaker",
    time: "10:30"
  },
  {
    day: 1,
    key: 4,
    activity: "Lunch",
    time: "12:30"
  },
  {
    day: 1,
    key: 5,
    activity: "Kick-off (Team formation, rules)",
    time: "14:00"
  },
  {
    day: 1,
    key: 6,
    activity: "Q&A",
    time: "14:30"
  },
  {
    day: 1,
    key: 7,
    activity: "Hacking Slot",
    time: "15:00"
  },
  {
    day: 1,
    key: 8,
    activity: "Break",
    time: "16:30"
  },
  {
    day: 1,
    key: 9,
    activity: "Hacking Slot",
    time: "17:00"
  },
  {
    day: 2,
    key: 10,
    activity: "Energizing talk - Guest speaker",
    time: "9:00"
  },
  {
    day: 2,
    key: 11,
    activity: "Hacking Slot",
    time: "10:00"
  },
  {
    day: 2,
    key: 12,
    activity: "Lunch",
    time: "12:30"
  },
  {
    day: 2,
    key: 13,
    activity: "Icebreaker",
    time: "14:00"
  },
  {
    day: 2,
    key: 14,
    activity: "Hacking Slot",
    time: "14:30"
  },
  {
    day: 2,
    key: 15,
    activity: "Break",
    time: "16:30"
  },
  {
    day: 2,
    key: 16,
    activity: "Hacking Slot",
    time: "17:00"
  },
  {
    day: 3,
    key: 17,
    activity: "Energizing talk - Guest speaker",
    time: "9:00"
  },
  {
    day: 3,
    key: 18,
    activity: "Hacking slot",
    time: "9:30"
  },
  {
    day: 3,
    key: 19,
    activity: "Lunch",
    time: "12:30"
  },
  {
    day: 3,
    key: 20,
    activity: "Final Hacking Slot",
    time: "14:00"
  },
  {
    day: 3,
    key: 21,
    activity: "Demos (judges)",
    time: "15:00"
  },
  {
    day: 3,
    key: 22,
    activity: "Decide winners",
    time: "17:30"
  },
  {
    day: 3,
    key: 23,
    activity: "Exit talk and announce winners",
    time: "17:30"
  },
  {
    day: 3,
    key: 24,
    activity: "Party",
    time: "18:30"
  }
];

const schedulePerDay = (data: Array<any>, day: number) => {
  return data.filter((item: any) => item.day === day);
};
const hackathonScheduleData = {
  one: schedulePerDay(data, 1),
  two: schedulePerDay(data, 2),
  three: schedulePerDay(data, 3)
}
export default hackathonScheduleData;