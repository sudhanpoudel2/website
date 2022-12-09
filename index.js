import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import sdata from "./Array"

function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="My pic" className="Array_img"/>
                <div className="card_info">
                    <span className ="card_category">{props.title}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link} >
                    <button>Play</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

function ncard(val){
  return(
    <Card 
  sname = {val.sname}
  imgsrc= {val.imgsrc}
  title= {val.title}
  link= {val.link}/> 

  );

}

ReactDOM.render(
   <>
   <h1 className="heading_style">Sajan Raj Vaidya Song Collection</h1>
   {sdata.map(ncard)};
 </>,
    document.getElementById('root')
);
