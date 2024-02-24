import React from 'react'
import {Card} from 'react-bootstrap';
function Post({title,description,imageUrl}) {
  return <>
    <Card style={{ width: '20rem',margin:"20px" }}>
      <Card.Img variant="top" src={imageUrl?imageUrl:"https://a-z-animals.com/media/2023/08/shutterstock-735713020-huge-licensed-scaled.jpg"} />
      <Card.Body>
        <Card.Title>{title?title:"Title Here"}</Card.Title>
        <Card.Text>
          {description?description:"Description here"}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
}

export default Post