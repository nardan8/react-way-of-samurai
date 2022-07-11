import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://picsum.photos/id/0/500/300"
          alt=""
          className={s.img_wrapper}
        />
      </div>
      <div>Ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
          <div className={s.item}>Post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
