import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trin: true,
  },
  description: {
    type: String,
    required: true,
    trin: true,
  },
  image: {
    url: String,
   pubvlic: String,
  },
});

export default mongoose.model("Post", postSchema)
