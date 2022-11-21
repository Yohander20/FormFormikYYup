
import './App.css';
import React from 'react';
import {Form} from  "semantic-ui-react";



function App() {
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:"100vh"

    }}>
      <Form style={{width:"300"}}>
        <Form.Input name="title" placeholder="titulo"/>
        <Form.Dropdown
          options={categoriesOptions}
          selection
         />
        <Form.Checkbox
        label="aceptar condiciones"/>
        <Form.Button type='Submit'>Enviar</Form.Button>
      </Form>
    </div>
  );

}

const categoriesOptions=[
  {key:"react", value:"react",text:"react"},
  {key:"next", value:"next",text:"next"}
];


export default App;
