const loadCommentsButtonElement = document.getElementById('load-comments-btn');

function fetchCommentsForPost(event) {
  const postId = loadCommentsButtonElement.dataset.postid;
  fetch(`/posts/${postId}/comments`);
}

loadCommentsButtonElement.addEventListener('click', fetchCommentsForPost);
