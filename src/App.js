import Todo from "./components/todoList";

function App() {
  return (
    <div className="w-full h-screen bg-blue-200">
      <div className="w-full h-full flex justify-center flex-col items-center px-5">
        <Todo />
      </div>
    </div>
  );
}

export default App;
