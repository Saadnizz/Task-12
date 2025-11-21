const user = [
  {
    id: 1,
    name: "Saad",
    post: "I have completed my frontend course",
    Comments: ["good job", "Mubarakoon"],
  },
  {
    id: 2,
    name: "Darakhshan",
    post: "fronted expert",
    Comment: ["Thoughtfull", "helpfull"],
  },
  {
    id: 3,
    name: "Rayyan",
    post: "Today is our session # 29 error handling",
    Comment: "hardworking",
  },
];


const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = user;

      if (data) {
        resolve(data);
      } else {
        reject("User array not found");
      }
    }, 3000);
  });
};


const fetchdatabyId = (recData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = recData.find((user) => {
        return user.name === "Darakhshan";
      });

      if (person) {
        resolve(person);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
};


async function displayUser() {
  try {
    console.log("Fetching data...");

    const data = await fetchData();
    const person = await fetchdatabyId(data);
    console.log(person.name.toLowerCase());
  } catch (err) {
    console.log("Error: " + err);
  }
}

displayUser();
