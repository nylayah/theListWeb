import Header from '../components/Header';


export default function HomePage() {
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