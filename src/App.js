import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDO, updateToDo, deleteToDo} from "./utils/handleApi";

function App() {

  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  useEffect(() => {
    getAllToDO(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input 
            type="text" 
            placeholder=" Add TODO..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
          <div 
            className="add" onClick={isUpdating ? 
            () => updateToDo(toDoId, text, setIsUpdating, setText, setToDo) 
            : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          updateMode={() => updateMode(item._id, item.text)}
          deleteToDo={() => deleteToDo(item._id, setToDo)}/>)}

        
      </div>
    </div>
  );
}

export default App;
