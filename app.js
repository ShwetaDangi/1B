const uname = document.getElementById('name');
const email = document.getElementById('email');
const branch = document.getElementById('branch');



const post = () => {
  const user = {
    name: uname.value,
    email: email.value,
    branch: branch.value,
  };

  const req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    localStorage.setItem('name', uname.value);
    localStorage.setItem('email', email.value); 
    localStorage.setItem('branch', branch.value);
    

    window.location.href = 'result.html';
  };
  req.open('POST', 'http://127.0.0.1:5500/lab1-B/index.html', true);
  req.send();
};

