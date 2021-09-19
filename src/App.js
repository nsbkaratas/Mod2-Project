import React, {useState, useEffect} from 'react'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import "./App.css"
import Home from "./pages/Home"
import Cakes from "./pages/Cakes"
import Breakfast from "./pages/Breakfast"
import Cookies from "./pages/Cookies"
import {Route, Switch} from "react-router-dom"
import axios from 'axios'


const App=()=> {  

 //state for data
 const [recipesURL, setRecipeURL] = useState([])

 //state for input field
 const [search, setSearch] = useState("")

 //state for cakes request
// const [cakes, setCakeURL]= useState([])

 //state for cookies request
const [cookies, setCookieURL]= useState([])

 //state for breakfast request
const [breakfast, setBreakfastURL]= useState([])


 //API information
 const API_ID="3b319b91"
 const API_KEY="49c4670d46b4b30b4efafbaaca0ba09c"
 //https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}

 //api call for search button
 const getRecipe = async()=>{
   const response = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`)
   setRecipeURL(response.data.hits)
   console.log(response)   
 }

 //api call for cakes
  // useEffect(()=>{
  //   console.log("useEffect")
  //   const getCakesRecipes= async()=>{
  //     try {
  //       const response = await axios.get(`https://api.edamam.com/search?q=cake&app_id=${API_ID}&app_key=${API_KEY}`)
  //       console.log(response)
  //       setCakeURL(response.data.hits)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   getCakesRecipes()
  // },[])

   //api call for cookies
   useEffect(()=>{
    console.log("useEffect")
    const getCookieRecipes= async()=>{
      try {
        const response = await axios.get(`https://api.edamam.com/search?q=cookie&app_id=${API_ID}&app_key=${API_KEY}`)
        console.log(response)
        setCookieURL(response.data.hits)
      }catch(err){
        console.log(err)
      }
    }
    getCookieRecipes()
  },[])
  
  //api call for breakfast
  useEffect(()=>{
    console.log("useEffect")
    const getBreakfastRecipes= async()=>{
      try {
        const response = await axios.get(`https://api.edamam.com/search?q=breakfast&app_id=${API_ID}&app_key=${API_KEY}`)
        console.log(response)
        setBreakfastURL(response.data.hits)
      }catch(err){
        console.log(err)
      }
    }
    getBreakfastRecipes()
  },[])



 //submit event
 const handleSubmit=(e)=>{
   e.preventDefault()
   getRecipe()
   setSearch("")
 }


  return (
    <div id="app">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home recipesURL={recipesURL} onChange={e=>setSearch(e.target.value)} onSubmit={handleSubmit} value={search}/>
        </Route>
        <Route exact path="/cakes"  >
          <Cakes />
        </Route>              
        <Route exact path="/cookies">
          <Cookies cookies={cookies}/>
        </Route>              
        <Route exact path="/breakfast">
          <div className="comp-recp-list">
            <Breakfast breakfast={breakfast}/>
          </div>          
        </Route>                                      
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
