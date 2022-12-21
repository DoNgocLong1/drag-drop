import React from 'react'
import PopupButton from '../common/Popup/PopupButton'
import { 
    Container
} from './Popup.styled'

const Popup = () => {
  return (
    <Container>
        <PopupButton 
        title='Demo model'
        >
            <p>This library continues to be relied upon heavily by Atlassian products, but we are focused on other priorities right now and have no current plans for further feature development or improvements.</p>
        </PopupButton>
    </Container>
  )
}

export default Popup