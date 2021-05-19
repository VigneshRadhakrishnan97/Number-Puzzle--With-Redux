import React from 'react' 
import '../Design/Design.css'

const SubMatrix = (props) => {

    return(
        <div >
        {props.currentMatrix.map( (singleDimension,index)=>{
            return(
            <div key={index} >
            {singleDimension.map( (value , index)=>{
                   return (
                       <div className={value===0 ? 'box-empty':'box'} key ={index}>
                           {value}
                       </div>
                   ) 
            })}
            <br />
            </div>
            )
        })}
        </div>
    );

}

export default SubMatrix;