import Person from "./Person";
import { useState } from "react";
const personData = [
  {
    name: "John",
    age: 23
  },
  {
    name: "Jenny",
    age: 35
  },
  {
    name: "Bhagirath",
    age: 23
  }
]
function App() {
  const [data, setData] = useState(personData) // init
  const [toggle, setToggle] = useState(1) // 1 = show, 0 = hide

  const removeItem = (removeIndex) => {
    const newData = data.filter(
      (d, index) => {
        if (removeIndex == index) {
          return false;
        } else {
          return true;
        }
      }
    )
    setData(newData); // state update
    // state -> component re-render 
  }

  const PersonBox = data.map(
    (person, index) => {
      return <Person click={removeItem} index={index} key={"person" + index} name={person.name} age={person.age} />
    }
  )
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Show</button>
      <h1 style={{ textAlign: "center" }}>List of All Person</h1>
      {toggle == 1 ? PersonBox : ""}
    </>
  );
}

export default App;
