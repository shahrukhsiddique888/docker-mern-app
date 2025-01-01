const Post =require("../models/postModel");
exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: "success",
            results: posts.length,
            data:{
                posts,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: "faild",
        }
        )
        
    }
};
exports.getOnePost= async(req, res , next) => {
    try {
        const post = await Post.findById(req.prams.id);
        res.status(200).json({
            status: sucess,
          
            data:{
                post,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: "faild",
        }
        )
        
    }

};

exports.createPost = async(req, res , next) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json({
            status: "sucess",
          
            data:{
                post,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: "faild",
        }
        )
        
    }

};



exports.updatePost= async(req, res , next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.prams.id, req.body , {
            new : true ,
            runValidators : true

        });
        res.status(200).json({
            status: "sucess",
          
            data:{
                post,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: "faild",
        }
        )
        
    }

};

exports.deletePost= async(req, res , next) => {
    try {
        const post = await Post.findByIdAndDelete(req.prams.id);
        res.status(200).json({
            status: "sucess",
          
        
        });
    } catch (e) {
        res.status(400).json({
            status: "faild",
        }
        )
        
    }

};