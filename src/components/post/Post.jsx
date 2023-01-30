import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/3672776/pexels-photo-3672776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="headerInfo">
        <span className="category">Music</span>
        <span className="postTitle">New post</span>
        <span className="postTime">I hour ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          dolores aspernatur alias cumque harum sunt beatae veniam quam. Quam
          dolorem suscipit eum, consequuntur totam voluptatem ex inventore
          quaerat. Distinctio cupiditate excepturi voluptates quam at temporibus
          natus repellendus fuga unde laborum quod recusandae quo dolores
          necessitatibus eum voluptas aspernatur, officia cumque.
        </p>
      </div>
      <p></p>
    </div>
  );
}

export default Post;
