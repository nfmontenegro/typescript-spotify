import React from 'react'

import {Card, CardImage, Column, SubTitle, Button, ButtonContainer} from '../styled'

function FullCard({id, name, image, tab, renderItem}) {
  function openInNewTab(url) {
    const windowTab = window.open(url, '_blank')
    return windowTab.focus
  }

  return (
    <Column key={id}>
      <Card size="300px" onClick={() => renderItem(id)}>
        <SubTitle>{name}</SubTitle>
        <CardImage size="300px" image={image} />
        {tab && (
          <ButtonContainer>
            <Button
              backgroundColor="#31bb3c"
              fontSize="16px"
              color="white"
              onClick={() => openInNewTab(tab)}
            >
              Open Playlist
            </Button>
          </ButtonContainer>
        )}
      </Card>
    </Column>
  )
}

export default FullCard
