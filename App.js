const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am Heading"),
    React.createElement("h2", {}, "h2 heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "h3"),
    React.createElement("h3", {}, "h3"),
  ]),
]);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
