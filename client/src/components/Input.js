import React, { Fragment, useState } from 'react';


const Input = () => {

    const [name, setName] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault(); 
      try {
          
          const body = { name };
          const response =  await fetch("http://localhost:5000/students", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
          });

          window.location = "/";

    
         
      } catch (error) {
          console.error(error.message)
      }
    };

  return (
  <Fragment>
      {" "}
      <br />
      <h2 align="center">Student Register</h2>
      <br></br>
      <form align="center" onSubmit={onSubmitForm}>
          <input type="text" placeholder="Enter student name" value={name} 
          onChange={(e) => setName(e.target.value)}>
          </input>
          <button>Add Student</button>
      </form>
  </Fragment>
  );
};

export default Input;