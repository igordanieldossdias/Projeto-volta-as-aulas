

function validacao(){
    var usuario2 = document.getElementById("usuario").value;
    var senha2 = document.getElementById("senha").value;
    var email = document.getElementById("email")
    
    if (usuario2 === "" || senha2 === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
    }
    
    if (usuario2 === "Admin" || senha2 === 9999) {
        alert("bem-vindo")}

        else{
            alert ("senha ou usuário incoretos")
        }

    }



    document.getElementById("mostrarSenha").addEventListener("click", function () {
        var senhaInput = document.getElementById("senha");
        if (senhaInput.type === "password") {
          senhaInput.type = "text";
          this.textContent = "Ocultar Senha";
        } else {
          senhaInput.type = "password";
          this.textContent = "Mostrar Senha";
        }
      });

