
export const initialMatrix = ()=>{

    
    return [[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,0]];
}



const INIT_STATE ={
    matrix:[[1,1,2,2],[4,2,1,4],[3,1,3,3],[2,3,4,0]],
    i:3,
    j:3
} 
export const currentMatrix = (state=INIT_STATE, action) => {
    var t;
    
    switch(action.type)
    {
        //--------------
        case 'ArrowUp':
            { 
                
                const {matrix,i,j}=action.payload
                if(i!==0)
            {
            t=matrix[i][j];
            matrix[i][j]=matrix[i-1][j];
            matrix[i-1][j]=t;
            

           return ({...state,matrix :matrix,i:(i-1),j:j});
            
            }
            else return(state);
            }

        //--------------
        case 'ArrowLeft':
            { 
                
                const {matrix,i,j}=action.payload
                
                if(j!==0)
                {
                t=matrix[i][j];
                matrix[i][j]=matrix[i][j-1];
                matrix[i][j-1]=t;

           return ({...state,matrix:matrix,i:(i),j:(j-1)});
            
            }
            else return(state);
            } 
            
         //--------------
         case 'ArrowRight':
            { 
                
                const {matrix,i,j}=action.payload
                
                if(j!==3)
                {
                t=matrix[i][j];
                matrix[i][j]=matrix[i][j+1];
                matrix[i][j+1]=t;

           return ({...state,matrix:matrix,i:(i),j:(j+1)});
            
            }
            else return(state);
            }    
        
        //--------------
        case 'ArrowDown':
            { 
                
                const {matrix,i,j}=action.payload
                
                if(i!==3)
                {
                t=matrix[i][j];
                matrix[i][j]=matrix[i+1][j];
                matrix[i+1][j]=t;

           return ({...state,matrix:matrix,i:(i+1),j:(j)});
            
            }
            else return(state);
            }     

        //---------------    
            default :{

                return(state);
            }        

    }
}