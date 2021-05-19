 

export const onKeyDown = (key,matrix,i,j) =>{

   
    return(
        {
            type:key,
            payload:{matrix,i,j}
        }
    );

}
