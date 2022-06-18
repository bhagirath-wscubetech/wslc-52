import Header from "./Header";
import Person from "./Person"
import Counter from "./Couter";
const data = [
  {
    name: "John",
    age: 23,
    gender: "Male"
  },
  {
    name: "Jenny",
    age: 35,
    gender: "Female",
    city: "New York"
  },
  {
    name: "Bhagirath",
    age: 23,
    gender: "Male"
  }
]

function App() {
  const PersonBox = data.map(
    (value, id) => {
      return <Person key={`person${id}`} username={value.name} age={value.age} gender={value.gender} city={value.city} />
    }
  )
  return (
    <>
      {/* <Header /> */}
      <Counter amount="1000"/>
      {/* {PersonBox} */}
      {/* to print variables */}
    </>
    // Fragments
  )
}

export default App;