const database = 'blog';
// Create a new database named 'blog'
use(database);

// Create a collection for posts
db.createCollection('posts');

// Create a collection for authors
db.createCollection('authors');

// Create a collection for comments
db.createCollection('comments');

// Insert author 1
db.authors.insertOne({
  name: 'John Doe',
  email: 'john@example.com',
});

// Insert author 2
db.authors.insertOne({
  name: 'Jane Smith',
  email: 'jane@example.com',
});
