

export const Register = (props) => {
  const [phonenumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  }
  
  return (
    <>
      <form onSubmit = {handleSubmit}>
        <label htmlfor = "phonenumber">phone number</label>
        <input value = {phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} type = "phonenumber" placeholder = "201-555-5555"></input>

        <label htmlfor = "username">create username: </label>
        <input value = {username} onChange={(e) => setUsername(e.target.value)} type = "username" placeholder = "abcdefg"></input>

        <label htmlfor = "passcode">create a passcode</label>
        <input value = {passcode} onChange={(e) => setPasscode(e.target.value)} type = "number" placeholder = "*****"></input>

        <button onClick = {() => {
            navigate("/home")
          }}>register</button>
      </form>
      <button onClick = {() => props.onFormSwitch('login')}>already have an account? click here...</button>
    </>
  ) 
  }
