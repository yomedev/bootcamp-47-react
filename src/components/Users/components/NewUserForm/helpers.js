export function getRandomIndex() {
  return Math.floor(Math.random() * 4);
}

const newUsers = [
  {
    id: 11,
    name: "Terry Medhurst",
    email: "atuny0@sohu.com",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima nemo laborum molestiae aspernatur",
    skills: ["react"],
    isOpenToWork: false
  },
  {
    id: 12,
    name: "Sheldon Quigley",
    email: "hbingley1@plala.or.jp",
    bio: "Non accusamus exercitationem saepe eos ea odit quibusdam quod cum dignissimos reprehenderit! Deserunt minima beatae voluptatibus praesentium, consectetur pariatur",
    skills: ["angular"],
    isOpenToWork: true
  },
  {
    id: 13,
    name: "Terrill Hills",
    email: "rshawe2@51.la",
    bio: "Ipsa ducimus fuga totam necessitatibus quasi labore minus quisquam animi incidunt quos magni velit illum. Quo, beatae aspernatur",
    skills: ["vue"],
    isOpenToWork: false
  },
  {
    id: 14,
    name: "Miles Cummerata",
    email: "yraigatt3@nature.com",
    bio: "Eligendi sapiente neque, possimus inventore repellat perferendis, quia porro beatae qui incidunt nihil voluptatibus libero corporis",
    skills: ["vue", "react"],
    isOpenToWork: true
  },
]

export const getNewUserInfo = () => {
  return ({
    name: newUsers[getRandomIndex()].name,
    email: newUsers[getRandomIndex()].email,
    bio: newUsers[getRandomIndex()].bio,
    skills: newUsers[getRandomIndex()].skills,
    isOpenToWork: newUsers[getRandomIndex()].isOpenToWork,
  })
}