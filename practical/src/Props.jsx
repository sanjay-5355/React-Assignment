
// Create a React component UserCard that accepts name, age, and location as
// props and displays them in a card format.



const Props = (props) =>{
    return (
       <div style={{
        border: "1px solid black",
        padding:"15px",
        width:"250px",
        borderRadius:"10px",
        marginBottom:"20px"
       }}>
        <h2>{props.name}</h2>
        <p>Age:{props.age}</p>
        <p>Location: {props.location}</p>
       </div>
    )
}

export default Props;