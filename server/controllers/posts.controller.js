import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (req.files.image) {
      

      return res.sendStatus(400);
    }
    const newPost = new Post({ title, description });
    await newPost.save();
    return res.json(newPost);
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedpost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(post);
    return res.send(updatedpost);
  } catch (error) {
    return res.Status(500).json({ message: error.message });
  }
};
export const deletePost = async (req, res) => {
  try {
    const postRemoved = await Post.findByIdAndDelete(req.params.id);
    if (postRemoved) return res.sendStatus(404);
    else return res.send(204);
  } catch (error) {
    return res.Status(500).json({ message: error.message });
  }
};
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.json(post);
  } catch (error) {
    return res.Status(500).json({ message: error.message });
  }

  res.send("getting a post");
};
