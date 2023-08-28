import Header from '../components/Header';
import {useNavigate} from "react-router-dom";


export default function HomePage() {
    let navigate = useNavigate();
    return (
        <div>
            <Header/>
            <h2>Home Page</h2>
            {/* TODO: view of current list, not editable */}
            <button onClick = {() => {
            navigate("/managelistpage")
            }}>Manage Your List</button>
            <button onClick = {() => {
            navigate("/joinlistpage")
            }}>Join a List</button>
            <button onClick = {() => {
            navigate("/login")
            }}>Logout</button>
        </div>
    )
}