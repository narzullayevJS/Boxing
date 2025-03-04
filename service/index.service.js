const fs = require("fs");
const { v4: uuid } = require("uuid");

let getAllIndex = () => {
  let index = fs.readFileSync("./config/index.json", "utf-8");
  return index ? JSON.parse(index) : [];
};

let addIndex = (data) => {
  let index = getAllIndex();
  data.id = uuid();

  index.push(data);

  fs.writeFileSync("./config/index.json", JSON.stringify(index), "utf-8");

  return data;
};
module.exports = { getAllIndex, addIndex };
