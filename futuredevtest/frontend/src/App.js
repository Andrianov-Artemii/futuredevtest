import { render } from "react-dom";
import React from 'react';


export default function App(props){

  function componentDidMount() {
    fetch("api/lead")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return "Something went wrong!";
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

    return (
      <div>{console.log(componentDidMount())}</div>
    );
}
