const editBlogPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const blogtext = document.querySelector('#blog-text').value.trim();
    const blogID = document.querySelector('#blog-id').value.trim(); //value + trim give just the value of the textinput
    if (title && blogtext) {
        const response = await fetch('/editblog', {
            method: 'PUT',
            body: JSON.stringify({ title: title , content: blogtext, id: blogID }), //transform JS obj into string
            headers: { 'Content-Type': 'application/json' },  //tell the mailman in HTTP what is inside the letter (JSON object) e.g. fragile sticker on box
        });

        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to edit post');
          }
        }
      };
      
      document.querySelector('.editblog-form').addEventListener('submit', editBlogPostHandler);