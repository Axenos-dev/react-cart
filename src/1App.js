import React, { useState } from "react";
import './App.css';
import CItem from './CItem';
import CHeader from './CHeader';

function App() {
  const [data , setData] = useState([])

  fetch("./data.json").then(
    function(res){
    return res.json()
  }).then(function(data){
  // store Data in State Data Variable
    setData(data)
  }).catch(
    function(err){
      console.log(err, "error")
    }
  )

  return (
    <div>
      < CHeader />
        <div className="container d-flex justify-content-around" id='content'>
        {

         data? data.map(
            function(data){
              return(
                
                  <CItem name = {data.name} price = {data.price} descrs = {data.description} image = {data.image}/>
                
              )
            }
          ):""

        }
        </div>
    </div>
    
  );
}
export default App;
