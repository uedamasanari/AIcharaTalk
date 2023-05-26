import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import styles from '@/styles/Circle.module.scss'

type Props = {
  width: number
  height: number
  path: string
  alt: string
  imgWidth?: number
  imgHeight?: number
}

const CircleDiv = styled.div<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: #ffffff;
  box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: ${(props) => props.width * 0.5}px;
    height: ${(props) => props.height * 0.5}px;r
  }

  @media (min-width: 1024px) {
    width: ${(props) => props.width * 1.9}px;
    height: ${(props) => props.height * 1.9}px;
  }
`

const Circle: React.FC<Props> = ({
  width,
  height,
  path,
  alt,
  imgWidth,
  imgHeight,
}) => {
  return (
    <CircleDiv width={width} height={height} path={path} alt={alt}>
        <Image src={path} alt={alt} width={imgWidth ?? width * 0.6} height={imgHeight ?? height * 0.6} />
    </CircleDiv>
  )
}

export default Circle
