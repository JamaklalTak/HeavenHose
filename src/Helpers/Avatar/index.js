import React, { useState, useEffect } from 'react';
import StyledAvatar from './Avatar.styled';

const Avatar = React.memo(function Avatar(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(props.image);
  }, [props.image]);

  return (
    <StyledAvatar
      className={props.className}
      size={props.size}
      bgColor={props.bgColor}
    >
      <div className="avatarContainer">
          <img
            className="defaultImage"
            src={image}
            alt="avatar"
            id="image"
            hidden={image == null}
          />
      </div>
    </StyledAvatar >
  );
});

export default Avatar;