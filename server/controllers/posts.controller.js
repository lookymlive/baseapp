import Post from '../models/Post.js'


export const getPosts = async (req, res) => {
   const posts = await Post.find()
  res.send(posts)
}

export const createPost = async (req, res) => {
  const {title, description} = req.body
  const newPost = new Post({title, description})
  await  newPost.save()
return res.json(newPost)
}

export const updatePost = async (req, res) => {
console.log(req.body) 
console.log(req.params)
 const post = await Post.updateOne({_id :req.params.id}, req.body, {new: true}) 
 console.log(post)
return res.send('received a put request')
}
export const deletePost = async (req, res) => {
  const postRemoved = await Post.findByIdAndDelete(req.params.id)
 if(postRemoved) return res.sendStatus(404)
 else return res.send(204)

}
export const getPost= async (req, res) => {
  const post = await Post.findById(req.params.id)
  if(!post) return res.sendStatus(404)
    return res.json(post)


  res.send('getting a post')
}