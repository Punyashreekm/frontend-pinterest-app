import "./postPage.css";
import Image from "../../componets/image/image";

const PostPage = () => {
  return (
    <div className="postPage">
      <div className="postContainer">
        <div className="postImg">
          <Image path="/pins/pin1.jpeg" alt="" w={736} />
        </div>
        <div className="postDetails"></div>
      </div>
    </div>
  );
};

export default PostPage;
