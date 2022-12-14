 
 const applyButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const job_id = event.target.getAttribute('data-id');
      console.log("If job_id is working this is it: " + job_id);

      const btnId = "btn_" + job_id;
      console.log("btn_id is " + btnId);
      const btn = document.getElementById(btnId);

      btn.style.fontWeight = "bold";
      btn.style.backgroundColor = "#ffa500" ;

      btn.innerText = "Applied!"
  
      const response = await fetch(`/api/users/application`, {
        method: 'PUT',
        body: JSON.stringify({ job_id }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log("job added");
      } else {
        alert(response.statusText);
      }
    }
  };
  
    
  document
    .querySelector('.container')
    .addEventListener('click', applyButtonHandler);