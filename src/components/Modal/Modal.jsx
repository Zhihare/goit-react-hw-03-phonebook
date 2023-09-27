import React, { Component } from 'react'
import { Overlay, ModalWindow } from './ModalStyle'
import { ConteinerContactsButton } from 'components/ContactsForm/CotactsFormStyle';

export default class Modal extends Component {
	render() {
		return (
			<Overlay>
				<ModalWindow>New contact {this.props.newContactName} added to the list
					<ConteinerContactsButton type="button"
						style={{
							width: '150px', height: '60px',
						}}
						onClick={() => this.props.onCloseModal()}>OK</ConteinerContactsButton>
				</ModalWindow>
			</Overlay>
		)
	}
}
