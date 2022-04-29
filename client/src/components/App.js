import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'
import Login from './Login/Login.jsx'
import Cart from './Cart/Cart.jsx'
import Footer from './Footer/Footer.jsx'
import ShoeCard from './ShoeCard/ShoeCard.jsx'
import Product from './Product/Product.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import ProductDetail from './ProductDetail/ProductDetail.jsx'
import ProfilePage from './ProfilePage/ProfilePage'
import Reset from './PasswordReset/Reset.jsx'
import axios from 'axios'


const App = () => {
  let history = useHistory();

  const [ sneakers, setSneakers ]= useState([]);
  //User Auth:

  // Sign Up:
  const [signUpFirstName,setSignUpFirstName] = useState("");
  const [signUpLastName,setSignUpLastName] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordConfirmation, setSignUpPasswordConfirmation] = useState("");

  // Log In:
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Signed In:
  const [signedIn, setSignedIn] = useState(false);
  const [user,setUser] = useState("")

  useEffect(()=>{
    // axios.get('/me').then(r=>{console.log(r)})
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setSignedIn(true)
        }
        );
      }
    });

  },[])

  function handleLogOut(){
    axios.delete('/logout')
    .then(r=>{
      setSignedIn(false);
      setUser(null);
      history.push('/')
    })
    .catch(function(error){
      if (error.response){
        console.log(error.response.data.errors)
      }
    })
  }

  function handleSignUpSubmit(e) {
    e.preventDefault();
    const signUpDetails = {
      "first_name": signUpFirstName,
      "last_name": signUpLastName,
      username: signUpUsername,
      password: signUpPassword,
      "password_confirmation": signUpPasswordConfirmation
    }
    axios.post("/signup", signUpDetails)
      .then(r=>{
          console.log(r)
          setSignedIn(true)
          alert("Account Successfully Created")
        })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data.errors);
          alert(error.response.data.errors)
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
    
  }

  function handleLogInSubmit(e){
    e.preventDefault();
    const logInDetails ={
      username,
      password
    }
    

    axios.post("/login", logInDetails)
    .then((r)=>{
      console.log(r)
      // console.log(r)
      setSignedIn(true)
      setUser(r.data)
      history.push('/')
      window.location.reload();
      
  
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data.errors);
        alert(error.response.data.errors)
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    });

  }

  function handleLogOut(){
    axios.delete('/logout')
    .then(r=>{
      setSignedIn(false);
      setUser(null);
      history.push('/')
      window.location.reload();
    })
  }

  const fetchData = async () => {
    try {
      const resp = await axios.get('/sneakers');
      setSneakers(resp.data);
    } catch(err) {
      console.error(err.response)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  

  const handleButtonClick = () => {
    fetchData();
    console.log("click")
  }


  return (
    <>
      <Router>
        <Navbar signedIn={signedIn} setSignedIn={setSignedIn}/>
        <Route exact path="/">
          <LandingPage sneakers={sneakers}/>
        </Route>
        <Route exact path="/cart">
          <Cart sneakers={sneakers} user={user} handleButtonClick={handleButtonClick}/>
        </Route>
        <Route exact path="/login">
          <Login 
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogInSubmit={handleLogInSubmit}
            signedIn={signedIn}
            signUpFirstName={signUpFirstName}
            setSignUpFirstName={setSignUpFirstName}
            signUpLastName={signUpLastName}
            setSignUpLastName={setSignUpLastName}
            signUpUsername={signUpUsername}
            setSignUpUsername={setSignUpUsername}
            signUpPassword={signUpPassword}
            setSignUpPassword={setSignUpPassword}
            signUpPasswordConfirmation={signUpPasswordConfirmation}
            setSignUpPasswordConfirmation={setSignUpPasswordConfirmation}
            handleSignUpSubmit={handleSignUpSubmit}
            handleLogOut={handleLogOut}/>
        </Route>
        <Route path='/profile'>
              <ProfilePage
                signedIn={signedIn}
                handleLogOut={handleLogOut}
                user={user}
              />
          </Route>
        <Route exact path="/shoecard">
          <ShoeCard />
        </Route>
        <Route exact path="/product">
          <Product sneakers={sneakers} handleButtonClick={handleButtonClick}/>
        </Route>
        <Route exact path="/sneakers/:id">
          <ProductDetail user={user} />
        </Route>
        <Route exact path="/reset">
          <Reset user={user}/>
        </Route>
      </Router>
      <Footer />
    </>
  )
}

export default App