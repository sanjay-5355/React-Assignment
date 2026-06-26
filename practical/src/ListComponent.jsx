// o Create a React component that renders a list of items (e.g., a list of fruit names). Use
// the map() function to render each item in the list.

// o Create a list of users where each user has a unique id. Render the user list using
// React and assign a unique key to each user.

const ListComponent = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  const users = [
    { id: 1, name: "JAVA" },
    { id: 2, name: "REACt" },
    { id: 3, name: "DOTNET" },
  ];
  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <hr></hr>

      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
