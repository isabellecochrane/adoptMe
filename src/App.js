const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),

    ])
}

const App = () => {
    return React.createElement (
        "div",
        {},
        [
        React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
        // ...[1,2,3].map((i) => React.createElement("h2", {}, i)),
        React.createElement(Pet, {name: "bria", animal: "dog", breed: "labrador"}),
        React.createElement(Pet, {name: "lily", animal: "dog", breed: "spaniel"}),
        React.createElement(Pet, {name: "lily", animal: "dog", breed: "spaniel"}),
        ]
    );
};

ReactDOM.render(React.createElement(App, {}, null), document.getElementById('root'));
