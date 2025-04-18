import "./profilePage.css";
import Image from "../../componets/image/image";
import { useState } from "react";
import Collections from "../../componets/collections/collections";
import Gallery from "../../componets/gallery/gallery";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  return (
    <div className="profilePage">
      <Image className="profileImage" path="/general/noAvatar.png" w={100} h={100} alt="" />
      <h1 className="profileName">Punya</h1>
      <span className="profileUsername">@Punya</span>
      <div className="profileCounts">10 followers . 20 followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" />
      </div>
      <div className="profileOptions">
        <span onClick={() => setType("created")} className={type === "created" ? "active" : ""}>
          Created
        </span>
        <span onClick={() => setType("saved")} className={type === "saved" ? "active" : ""}>
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
