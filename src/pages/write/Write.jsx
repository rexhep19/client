import "./write.css";

function Write() {
  return (
    <div className="write">
      <div className="writeGroup">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/3762284/pexels-photo-3762284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="headerWrite">
          <label htmlFor="writeFile">
            <i className=" writeIcon fa-thin fa-plus"></i>
          </label>
          <input id="writeFile" type="file" style={{ display: "none" }} />
          <input placeholder="Title" className="writeTitle" type="text" />
          <button className="publishButton">Publish</button>
        </div>
      </div>
      <div className="writeGroup">
        <textarea
          placeholder="Tell your story"
          type="text"
          className="writeText"
        ></textarea>
      </div>
    </div>
  );
}

export default Write;
