import React from 'react';
import styled from 'styled-components';

type Props = {
    width: number;
    height: number;
};

const CircleDiv = styled.div<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: #FFFFFF;
  box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 70px;

  @media (min-width: 768px) {
    width: ${(props) => props.width * 0.5}px;
    height: ${(props) => props.height * 0.5}px;
  }

  @media (min-width: 1024px) {
    width: ${(props) => props.width * 2}px;
    height: ${(props) => props.height * 2}px;
  }
`;

const Circle: React.FC<Props> = ({ width, height }) => {
  return <CircleDiv width={width} height={height} />;
};

export default Circle;


// export const Circle: FC<Props> = ({ width, height}) => {
//   return (
//     <CircleArea width={width} height={height}/>
//   )
// }
