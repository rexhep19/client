import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <span className="sidebarHeader">About me</span>
      <img
        className="sidebarImg"
        src="https://images.pexels.com/photos/7713199/pexels-photo-7713199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <p className="sidebarDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut cumque
        ut ea expedita quidem sapiente distinctio. Ad dolorem voluptates
        necessitatibus, consequatur atque, accusamus incidunt impedit voluptatem
        omnis sint illo.
      </p>
      <span className="catHeader">Categoires</span>
      <div className="categories">
        <span className="catItem">Life</span>
        <span className="catItem">Music</span>
        <span className="catItem">Sport</span>
        <span className="catItem">Tech</span>
        <span className="catItem">Cinema</span>
        <span className="catItem">Movies</span>
      </div>
    </div>
  );
}

export default Sidebar;
