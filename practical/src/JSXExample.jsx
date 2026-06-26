//  Create a React component that renders the following JSX elements:
//  A heading with the text "Welcome to JSX".
//  A paragraph explaining JSX with dynamic data (use curly braces to insert
// variables)

const JSXExample = () => {
  const topic = "JSX (JavaScript XML)";
  const description =
    "JSX allows you to write HTML-like syntax inside JavaScript.";

  return (
    <>
      <h1>Welcome to JSX</h1>
      <p>
        {topic} is used in React. {description}
      </p>
    </>
  );
};

export default JSXExample;
