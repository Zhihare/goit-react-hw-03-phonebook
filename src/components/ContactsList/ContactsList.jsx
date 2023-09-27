import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ContactsListButton, ContactsListContainer, ContactsListName } from './ContactsListStyle';

export const ContactsList = ({ handleDelete, renderFilter }) => {


	return (
		<ContactsListContainer>
			{renderFilter.map(({ name, number, id }) => {
				return (
					<ContactsListName key={id}>
						<p>{name}: {number}</p>
						<ContactsListButton onClick={() => handleDelete(name)}><RiDeleteBin6Line /> </ContactsListButton>
					</ContactsListName>
				);
			})
			}
		</ContactsListContainer>
	);
};
