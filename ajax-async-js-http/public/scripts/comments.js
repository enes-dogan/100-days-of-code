const loadCommentsButtonElement = document.getElementById('load-comments-btn');

async function fetchCommentsForPost(event) {
  const postId = loadCommentsButtonElement.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`);
  const responseData = await response.json();

  const commentsSectionElement = document.getElementById('comments');
  commentsSectionElement.innerHTML = responseData;

  console.log(responseData);
  console.log(responseData[1]);

}

loadCommentsButtonElement.addEventListener('click', fetchCommentsForPost);
