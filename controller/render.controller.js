let renderIndex = (rek, res, next) => {
  res.render("index"),
    {
      title: "Salom",
    };
};
let renderClass = (rek, res, next) => {
  res.render("Class"),
    {
      title: "Salom",
    };
};
let renderBlog = (rek, res, next) => {
  res.render("Blog"),
    {
      title: "Bosh sahifa",
    };
};
let renderAbout = (rek, res, next) => {
  res.render("About"),
    {
      title: "Salom",
    };
};

module.exports = {
  renderIndex,
  renderAbout,
  renderClass,
  renderBlog,
};
