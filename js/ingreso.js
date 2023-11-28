
    function loguear(){
        let correo=document.getElementById("txtCorreo").value;
        let  pas=document.getElementById("txtContrasenna").value;
        
        if(correo=="fernanda@gmail.com" && pas=="123471"){
            window.location="index.html";
        }
        else{
            alert("DATOS INCORRECTOS");
        }
    }
    
    
    
