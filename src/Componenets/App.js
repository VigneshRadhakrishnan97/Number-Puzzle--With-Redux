import React from 'react'
import Matrix from './Matrix'
import Timer from './Timer'


class App extends React.Component
{

    componentDidMount(){
        alert('Use 100% Zoom for better experience');
    }
 
    render(){
        return(
            <div className="back" >
                <div className="row Header">
                    <div className="col-md-2 " />
                    <div className="col-md-8 ">
                        <div className="temp">
                            <div className="temp-text" >
                        <p>Welcome to Number Solving</p>
                        </div>
                        </div>

                    </div>
                    <div className="col-md-2 " />
                </div>
                <br />
                <div className="row"> 
                <div className="col-md-2 " >
                    <div className="Inst" >
                        <div className="Inst-text" >
                            <p>1.Click on START to start the game</p>
                            <p>2.Click on STOP to stop it</p>
                            <p>3.Use Only Arrow Keys to move the EMPTY box on Right corner</p>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-8  " >
                <div className="Content">
                    <br /> 
                <Timer  />
                <br /><br /><br />
                <Matrix  />
                </div>
                </div>
                
                <div className="col-md-2 " >
                    <div className="Inst">
                    <div className="Inst-text" >
                            <p>1.Arrage the numbers as </p>
                            <p>~ 1's in first row</p>
                            <p>~ 2's in second row</p>
                            <p>~ 3's in third row</p>
                            <p>~ 4's in fourth row</p>
                            <p>2.The Maximum Time limit is 3 Minutes</p>
                            
                            
                        </div>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}

export default App;