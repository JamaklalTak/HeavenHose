import React from 'react';

const Image = React.memo((props) => {
  const { src, alt, _onImgClick, height, width, className, children } = props;
  return(
    <>
      <img
        className={className}
        src={src}
        alt={alt}
        height={height}
        width={width}
        onClick={_onImgClick}
      />
      {children}
    </>
  );
})

export default Image;