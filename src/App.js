import React from 'react';
import {Form} from  "semantic-ui-react";
import {useFormik} from "formik";
import * as Yup from "yup";

export default function App() {

  const formik=useFormik({
    initialValues:{
      title:"",
      category:"",
      accepted:false,
    },

    validationSchema: Yup.object({
      title:Yup.string().required(true),
      category:Yup.string().required(true),
      accepted:Yup.bool().isTrue(true),
    }),
    
    onSubmit: (formValue)=>{
      console.log("Formulario Enviado");
      console.log(formValue);
    }
  });

  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:"100vh"
    }}>
      <Form style={{width:"300"}} onSubmit={formik.handleSubmit}>
        <Form.Input name="title" 
        placeholder="titulo"
        value={formik.values.title}
        error={formik.errors.title}
        onChange={formik.handleChange}
        />
        <Form.Dropdown
         placeholder='Categorias'
        selection
        options={categoriesOptions}
        value={formik.values.category}
        error={formik.errors.title}
        onChange={(_,data)=>formik.setFieldValue("category",data.value)}
        />
        <Form.Checkbox
        style={{padding:"1em"}}
        label="aceptar condiciones"
        checked={formik.values.accepted}
        error={formik.errors.title}
        onChange={(_,data)=>formik.setFieldValue("accepted",data.checked)}
        />

        <Form.Button type='submit'>Enviar</Form.Button>
      </Form>
    </div>
  );

}

const categoriesOptions=[
  {key:"react", value:"react",text:"react"},
  {key:"next", value:"next",text:"next"}
];



