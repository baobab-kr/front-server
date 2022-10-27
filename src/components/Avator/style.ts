import styled from "styled-components";

type tImgSize = {
  width: string;
  height: string;
};

export const Avatar = styled.div<tImgSize>`
  display: inline-block; /* circle wraps image */
  border-radius: 50%; /* relative value */
  /* transition: linear 0.25s; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const ImageAvator = styled.img`
  image-rendering: -webkit-optimize-contrast;
  transform: translateZ(0);
  backface-visibility: hidden;
  width: 78%;
  height: 100%;
  object-fit: cover;
`;
