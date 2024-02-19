import './App.css';

function App(props) {
  return (
    
    <div className="App">
      
      {/* <div className="person">
        <h1>Student Name : {props.name}</h1>
        <p> Roll Number : {props.num}</p>
        <p>Div : {props.division}</p>

        <div /> */}
      <div className='ImageFol'>
        <img src={props.src}></img>
        <p> Name : {props.name1}</p>
        <p>Color : {props.Color}</p>
        <p>Manufacturer : {props.Manufact}</p>
      </div>
      {/* <div> */}
        {/* <img src={props.src2} alt ="Chair"></img>
        <p> Name : {props.name2}</p>
        <p>Color : {props.Color2}</p>
        <p>Manufacturer : {props.Manufact2}</p>
      </div> */}
    </div>



  );
}

export default App;
