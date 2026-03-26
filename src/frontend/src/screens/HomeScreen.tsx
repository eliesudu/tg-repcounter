import CustomButton from "../components/CustomButton";


function HomeScreen() {
  return (
    <div>
      <h1>Welcome to the Home Screen</h1>
      <CustomButton label="Click me" onClick={() => alert('Button clicked!')} />
    </div>
  );
}

export default HomeScreen;
