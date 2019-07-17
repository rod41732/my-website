export default {
  get: "see more api's",
  children: {
    api: {
      get: ["article", "login", "tags", "search", "user"],
      children: {
        article: {
          get: "there are 4 articles",
          children: {
            "1": { content: "Hello world", on: "24 Jan" },
            "2": { content: "Doge", on: "12 May" },
            "3": { content: "Wow very article", on: "5 Jul" },
            "4": { content: "Shibe", on: "6 Dec" },
          },
        },
        user: {
          get: "users in this system",
          children: {
            road: { username: "road", password: "1234" },
            doge: { username: "doge", password: "shibe" },
            john: { username: "john", password: "doe" },
          },
        },
        tags: {
          get: "there are 3 tags",
          children: {
            a: ["1"],
            b: ["2"],
            c: ["3"],
            d: ["4"],
          },
        },
      },
    },
  },
}
