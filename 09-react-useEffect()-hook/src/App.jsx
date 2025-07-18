import './App.css'
import Counter from "./components/Counter.jsx";
import DigitalWatch from "./components/DigitalWatch.jsx";
import UserListFromServer from "./components/UserListFromServer.jsx";
import Spinner from "./ui/Spinner.jsx";

function App() {

    return (
        <>
            {/*<Counter/>*/}
            {/*<DigitalWatch/>*/}
            <UserListFromServer/>
        </>
    )
}

export default App
