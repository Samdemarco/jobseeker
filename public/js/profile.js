const updateProfile = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-profile').value.trim();
  const email = document.querySelector('#email-profile').value.trim();
  const resume_URL = document.querySelector('#resume-profile').value.trim();

  console.log(`name: ${name} email: ${email} resume_url: ${resume_URL}`);

  // Update user's profile if any of their information has changed
  if (name || email || resume_URL) {
    const response = await fetch(`/profile`, {
      method: 'PUT',
      body: JSON.stringify({ name, email, resume_URL }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update profile information');
      return;
    }
  }
};
/*
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};
*/
document
  .querySelector('.profile-form')
  .addEventListener('submit', updateProfile);
/*
document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
*/