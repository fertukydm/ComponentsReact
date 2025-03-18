
//propiedades en un compoenente


function Boton({nombre, color}) {
    return (
        <>
        {color === "rojo" ? (
            <button type="button" class="btn btn-danger">
            {nombre}    
            </button>
        ) : (   
        <button type="button" class="btn btn-primary">
            {nombre}
            </button>
        )}
          
            
       
        
        </>  

      
    );
  }

export default Boton;