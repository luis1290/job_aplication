const btn = document.getElementById("btn");

function getParameterValue(parameter) {
  const url = new URL(window.location.href);
  return url.searchParams.get(parameter);
}

const verifyEmail = () => {
  const id = getParameterValue('id');
  const password1 = document.getElementById("newPass").value;
  const password2 = document.getElementById("confirmPass").value;

  if (password1 === password2) {
    const data = {
      id: id,
      password: password1
    };

    axios.put(`http://localhost:8000/resetpassword/`, data)
      .then((resp) => {
        Swal.fire('Restablecimiento de contraseña exitoso')
        console.log(resp);
      })
      .catch(e => console.log(e));
    console.log(id);
  } else {
    Swal.fire('Las contraseñas no coinciden')
    return false;
  }
}

btn.addEventListener("click", verifyEmail);