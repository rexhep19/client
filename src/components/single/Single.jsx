import "./single.css";

function Single() {
  return (
    <div className="singlePost">
      <img
        className="singlePostImg"
        src="https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <h3 className="singlePostTitle">
        Detta är ett nytt inlägg
        <div className="singlePostEdit">
          <i className="fa-solid fa-pen-to-square"></i>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
      </h3>
      <div className="singlePostInfo">
        <span>Author:Rexhep</span>
        <span>1 hour ago</span>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam
        exercitationem, tenetur eius ex delectus voluptatem optio! Placeat porro
        eos provident, ex dicta voluptate harum delectus debitis modi libero
        fuga doloribus, quod accusantium sint ea praesentium voluptas hic
        suscipit dolores repudiandae similique beatae, iusto minus. Ratione id
        mollitia ipsa modi.Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Sunt quisquam exercitationem, tenetur eius ex delectus voluptatem
        optio! Placeat porro eos provident, ex dicta voluptate harum delectus
        debitis modi libero fuga doloribus, quod accusantium sint ea praesentium
        voluptas hic suscipit dolores repudiandae similique beatae, iusto minus.
        Ratione id mollitia ipsa modi.
      </p>
    </div>
  );
}

export default Single;
