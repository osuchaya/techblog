const addBlogPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const blogtext = document.querySelector('#blog-text').value.trim();

    if (title && blogtext) {
        const response = await fetch('/addblog', {
            method: 'POST',
            body: JSON.stringify({ title: title , content: blogtext, date_created: new Date(), user_id: 0 }), //transform JS obj into string
            headers: { 'Content-Type': 'application/json' },  //tell the mailman in HTTP what is inside the letter (JSON object) e.g. fragile sticker on box
        });

        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to add post');
          }
        }
      };
      
      document.querySelector('.addblog-form').addEventListener('submit', addBlogPostHandler);
    