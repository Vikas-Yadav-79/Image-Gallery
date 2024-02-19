import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const components_add =[];

for (var i = 1 ; i < 16 ; i++){
    const src1 = `https://source.unsplash.com/featured/300x20${i}`;
    components_add.push(
    <App 
    key ={i}
    src = {src1}
    name1 ="SOFA" 
    Color = "GREY" 
    Manufact="KARAN Industries"/>
  )
}

root.render(
  <React.StrictMode>
    {/* <App name = "Vikas" num ="1" division = "379"/>
    <App name = "Karan" num = "2" division = "377" /> */}
    {/* <App src="https://picsum.photos/536/354" name1 ="YAK" Color = "Yellowyish" Manufact="GOD"/> */}
    <div>
      <h1 className='Images '>Image Gallery </h1>
      {components_add}
    {/* <App src="https://source.unsplash.com/featured/300x201" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x202" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x203" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x204" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x205" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x206" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x207" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x208" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x209" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x217" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x215" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/>
    <App src="https://source.unsplash.com/featured/300x216" name1 ="SOFA" Color = "GREY" Manufact="KARAN Industries"/> */}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
