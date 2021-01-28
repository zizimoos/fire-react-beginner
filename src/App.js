import Bora from "./components/Bora";

function App() {
  return (
    <div>
      <Bora
        zombie="string"
        action={true}
        banco={["hello", 1, 2, 3, "4"]}
      ></Bora>
    </div>
  );
}

export default App;
