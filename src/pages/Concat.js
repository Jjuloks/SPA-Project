import React from 'react';
import { useNavigate,Outlet } from 'react-router-dom';


const Concat = () => {
    const naw=useNavigate()
    
    const handCl=(id)=>{
        if(id===1){
            return naw('/concat/pl')
        }
        if(id===2){
            return naw('/concat/en')
        }

    }

    return (
        <div>
          Wynik danych
        </div>
    );
}

export default Concat;
