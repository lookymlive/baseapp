
export const getPosts = (req, res) => res.send([])

export const createPost = (req, res) => {
  res.send('New post created')
}
export const updatePost = (req, res) => {
  res.send('Post updated')
}
export const deletePost = (req, res) => {
  res.send('Post deleted')
}
export const getPost=(req, res) => {
  res.send('getting a post')
}