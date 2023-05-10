const addCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const blog_id = document.querySelector('#blog-id').value.trim();
    if (comment) {
        const response = await fetch('/addcomment', {
            method: 'POST',
            body: JSON.stringify({ content: comment, date_created: new Date(), user_id: 0, blog_id: blog_id }), //transform JS obj into string
            headers: { 'Content-Type': 'application/json' },  //tell the mailman in HTTP what is inside the letter (JSON object) e.g. fragile sticker on box
        });
        console.log(response);
        if (!response.redirected) {
            document.location.reload();
          } else {
            alert('You need to log in to add comment!');
            console.log('failed to add comment');
          }
        }
      };
      
      document.querySelector('.comment-form').addEventListener('submit', addCommentHandler);
    