import React from 'react'
import { onKeyDown } from '../Actions'
import { connect } from 'react-redux' 
import _ from 'lodash'

var interval;
class Timer extends React.Component
{
    state = {seconds:0,minutes:0}

   
    componentDidUpdate(){
        if(this.state.minutes===3 || this.props.status)
        {
            this.stopEvent();
            
            if(this.props.status)
            
            alert(`Completed in : ${this.state.minutes} Minutes and ${this.state.seconds} Seconds`);
            else
            alert('Time Exceeds the Limit ');
            
        }
        
    }

    startEvent=()=>{

        console.log('start');
        document.addEventListener('keydown',this.addevent);
        interval=setInterval(()=> {
            if(this.state.seconds===59)
            this.setState({minutes:(this.state.minutes+1),seconds:0});
            else
            this.setState({seconds:(this.state.seconds+1)});
        } , 1000);
    }

    stopEvent=()=>{
        clearInterval(interval);
        document.removeEventListener('keydown',this.addevent);
    }

    addevent=(e)=>{
        
        this.props.onKeyDown(e.key,this.props.currentMatrix.matrix,this.props.currentMatrix.i, this.props.currentMatrix.j)
    }



    render(){
        return(
            <div className="container-fluid form " >
                <div className="row form-group " >
                    <div className="col-md-2 " >
                        <button className="btn btn-outline-danger form-control " onClick={this.startEvent} >Start</button>
                    </div>
                    <div className="col-md-1" />
                    <div className="col-md-2" >
                        <button className="btn btn-outline-danger form-control " onClick={this.stopEvent} >Stop</button>
                    </div>
                    <div className="col-md-5" />
                    <div className="col-md-2 " >
                       
                            <button className="btn btn-danger form-control">
                    {this.state.minutes<=9 ? `0${this.state.minutes}`:this.state.minutes}:{this.state.seconds<=9 ? `0${this.state.seconds}`:this.state.seconds}
                    
                    </button>
                    
                    </div>
                </div>
                
            </div>
        );

    }
}

const mapStateToProps = (state) =>{
    const status =_.isEqual(state.currentMatrix.matrix,state.initialMatrix);
    //console.log({...state,status:status});
    return ({...state,status:status});

}


export default connect(mapStateToProps,{onKeyDown})(Timer);