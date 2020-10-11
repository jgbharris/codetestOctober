import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: fit-content;
`

const Description = styled.p`
  color: black;
  font-weight: 300;
  textalign: center;
  font-size: 15px;
`

const StyledPhoto = styled.img`
  width: 30%;
  height: 30%;
  object-fit: cover;
`

const ImageCard = (props) => (
  <Container>
      <StyledPhoto src={props.src}></StyledPhoto>
      <Description>
        {props.text}
      </Description>
  </Container>
    
  )
  
  export default ImageCard