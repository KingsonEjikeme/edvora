import "./topContainer.css";

function TopContainer(props) {
  console.log(props.name);
 
  return (
    <div className="top-container">
        
        <div className="top-title">Edvora</div>
        <div className="top-profile">
        <div className="top-profile-name">{props.name}</div>
        <div className="top-profile-image">
            <img src="https://picsum.photos/200" alt="" className="top-profile-image" />
        </div>
        </div>
    </div>
  )
}

export default TopContainer