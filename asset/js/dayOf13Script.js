function Person(props) {
    return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>your age: {props.age}</p>
    </div>
    );
  }
  var app = (
    <div>
      <Person name="Lucy" age="14"/>
      <Person name="Gary" age="33"/>
      <Person name="Michelle" age="26"/>
    </div>
  );
  ReactDOM.render(app, 
  document.querySelector("#app"));