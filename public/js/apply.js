  
  const applyButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log("If job_id is working this is it: " + id);
  
    //   const response = await fetch(`/api/users/${id}`, {
    //     method: 'UPDATE',
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Failed to delete project');
    //   }
    }
  };
  
    
  document
    .querySelector('.container')
    .addEventListener('click', applyButtonHandler);