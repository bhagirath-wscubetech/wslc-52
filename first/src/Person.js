import "./App.css"
function Person(props) {
    return (
        <div className="person-container">
            <div>Name: {props.username}</div>
            <div>Age: {props.age}</div>
            <div>Gender: {props.gender}</div>
            <div>City: {props.city}</div>
        </div>
    )
}
export default Person;