import React from 'react' 
import { connect } from 'react-redux'
import '../Design/Design.css'
import SubMatrix from './SubMatrix'
import { onKeyDown } from '../Actions'



class Matrix extends React.Component
{
   
    state={ currentMatrix:this.props.currentMatrix.matrix }

    render(){
        return(
            <div className="row" >
                <div className="col-4" />
                <div className="col-8">
                
                <SubMatrix currentMatrix={this.state.currentMatrix} />
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) =>{

    //console.log(state);

    return state;

}

export default connect(mapStateToProps,{onKeyDown})(Matrix);