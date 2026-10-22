import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Saludo(){
  return(
    <p>Bienvenido al curso guia</p>
  )
}

function Estudiante({nombre}: {nombre:string}){
  return(
    <p>Bienvenido, {nombre}</p>
  )
}

function MostrarNota({nota}: {nota:number}){
  return(
    <p>{nota*3}</p>
  )
}

function MostrarPromedio({promedio1,promedio2,promedio3} : {promedio1:number;promedio2:number;promedio3:number}){

  const prom = promedio1+promedio2+promedio3;

  return(
    <p>{prom / 3}</p>
  )
}

function MostrarRedondeado({promedio1,promedio2,promedio3} : {promedio1:number;promedio2:number;promedio3:number}){

  const prom = promedio1+promedio2+promedio3;
  const resultado = Math.round(prom / 3);

  return(
    <p>{resultado}</p>
  )
}


function App() {
  const alu = "Luis";

  return (
    <div>
      <h1>Semana 11</h1>
      <p>{alu}</p>
      <Saludo />
      <Estudiante nombre="Pedro"/>
      <MostrarNota nota={3}/>
      <MostrarPromedio promedio1={12} promedio2={15} promedio3={16}/>
      <MostrarRedondeado promedio1={12} promedio2={15} promedio3={16}/>
    </div>
  )
}

export default App
