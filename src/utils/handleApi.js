import axios from "axios";
const baseUrl = "https://fullstacktodo-backend-sm5t.onrender.com";

const getAllToDO = (setToDo) => {
    axios
    .get(baseUrl)
    .then((data) => {
        console.log('data ---->', data);
        setToDo(data.data)
    })
    .catch((err) => console.log(err))
}

const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("");
        getAllToDO(setToDo)
    })
}

const updateToDo = (toDoId, text, setIsUpdating, setText, setToDo) => {
    axios
    .post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        setText("");
        setIsUpdating(false)
        getAllToDO(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data)
        getAllToDO(setToDo)
    })
    .catch((err) => console.log(err))
}

export {getAllToDO, addToDo, updateToDo, deleteToDo}