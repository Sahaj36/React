import { useState } from "react";

function App() {
  // useState is a function which will return an Array
  // 1 -> initialValue
  // 2 -> function this function will change the initialValue

  const [userName, setUserName] = useState("Sahaj");
  const [number, setNumber] = useState(0);
  const [onOff, setOnOff] = useState(true);
  const [profileDetails, setProfileDetail] = useState({
    firstName: "Sahaj",
    lastName: "Khalasi",
    age: 21,
  });
  const [friendsList, setFriendsList] = useState([
    "Sahaj",
    "Priyang",
    "Lalu",
    "Sen",
    "Pavu",
    "Tanik",
    "Sugney",
  ]);

  const [formValue, setFormValue] = useState("");

  function change() {
    setProfileDetail({
      ...profileDetails,
      firstName: "Priyang",
    });
  }

  function addFriend() {
    setFriendsList([...friendsList, formValue])
    setFormValue("")
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3>
                friendsList{" "}
                <span className="badge bg-danger">{friendsList.length}</span>
              </h3>
            </div>
            <div className="card-body d-flex">
              <input
                className="form-control"
                value={formValue}
                placeholder="Add Your Friends..."
                onChange={(e) => setFormValue(e.target.value)}
              ></input>
              <button className="btn btn-info" onClick={addFriend}>Add</button>
            </div>
            <div className="card-body">
              {friendsList.map((items, index) => {
                return <h3 key={index}>{items}</h3>;
              })}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger mx-2"
                onClick={() => setFriendsList([])}
              >
                Clear
              </button>
              <button
                className="btn btn-primary"
                onClick={() =>
                  setFriendsList([
                    "Sahaj",
                    "Priyang",
                    "Lalu",
                    "Sen",
                    "Pavu",
                    "Tanik",
                    "Sugney",
                  ])
                }
              >
                Show All
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3>Profile</h3>
            </div>
            <div className="card-body">
              <h4>First Name :- {profileDetails.firstName}</h4>
              <h4>Last Name :- {profileDetails.lastName}</h4>
              <h4>Age :- {profileDetails.age}</h4>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={change}>
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h1>Working With Boolean :-</h1>
      <button className="btn btn-danger mx-1" onClick={() => setOnOff(false)}>
        Hide
      </button>
      <button className="btn btn-primary mx-1" onClick={() => setOnOff(true)}>
        Show
      </button>
      <button className="btn btn-info mx-1" onClick={() => setOnOff(!onOff)}>
        Hide/Show
      </button>
      <br />
      <br />
      {onOff ? (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdq5xss
      DWYFEfUFurMPXpkiaVUaVhVp70qaQ&usqp=CAU"
        ></img>
      ) : null}
      <hr />
      <h1>Working with number :-</h1>
      <h1>{number}</h1>
      <button className="btn btn-primary" onClick={() => setNumber(number + 1)}>
        +
      </button>
      <button className="btn btn-danger" onClick={() => setNumber(number - 1)}>
        -
      </button>
      <hr />
      <h1>Working with string :-</h1>
      <h1>My Name is {userName}</h1>
      <button className="btn btn-info" onClick={() => setUserName("Sahaj_109")}>
        Change
      </button>
    </div>
  );
}

export default App;
