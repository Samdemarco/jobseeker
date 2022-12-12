const updateProfile = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-profile').value.trim();
  const email = document.querySelector('#email-profile').value.trim();
  const resume = document.querySelector('#resume-profile').value.trim();

  // Update user's profile if any of their information has changed
  if (name || email || resume) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, email, resume }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

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

document
  .querySelector('.new-project-form')
  .addEventListener('submit', updateProfile);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
