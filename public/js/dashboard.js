const deletePostHandler = async (event) => {
    console.log(event.target.getAttribute("post"));

    const response = await fetch('/deleteblog', {
        method: 'POST',
        body: JSON.stringify({id: event.target.getAttribute("post")}),
        headers: { 'Content-Type': 'application/json' },
    });
        console.log(response.status == 200);
    if (response.status == 200) {
        // document.location.reload();
        console.log(event.target.parentElement);
        event.target.parentElement.remove();

      } else {
        alert('Failed to delete post');
      }

}
 
const buttons = document.querySelectorAll('.delete-post')
for (let b of buttons) {
    b.addEventListener('click', deletePostHandler)
}