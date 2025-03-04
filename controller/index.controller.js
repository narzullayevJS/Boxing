const IndexService = require("../service/index.service");

let addIndex = (req, res, next) => {
  try {
    let body = req.body;
    console.log(body);
    if (!body.name || !body.phoneNumber || !body.email || !body.message) {
      throw new Error("Malumotlar to'liq emas");
    }

    let contact = IndexService.addIndex(body);
    res.status(201).json(contact);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { addIndex };
