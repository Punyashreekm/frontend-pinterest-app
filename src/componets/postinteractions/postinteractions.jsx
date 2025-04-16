import Image from "../image/image";
import "./postinteractions.css";

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcon">
        <Image path="/general/react.svg" alt="" />
        273
        <Image path="/general/share.svg" alt="" />
        <Image path="/general/more.svg" alt="" />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostInteractions;
