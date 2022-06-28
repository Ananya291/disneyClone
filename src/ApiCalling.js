import React, { useEffect, useState } from "react";
 
function Name() {
 
 const [data, setData] = useState();
 
 function callApi() {
   fetch("https://jsonplaceholder.typicode.com/todos/1")
   .then((response) => response.json())
   .then((json) => setData(json))
   .catch(err => console.log(err))
 }
 
 useEffect(() => {
   console.log("its working");
   callApi()
 },[]);
 
 
 
 return (
   <div>
 
     <div>{data?.userId}</div>
     <div>{data?.id}</div>
     <div>{data?.title}</div>
     <div>{data?.completed}</div>
   </div>
 );
}
export default Name;

