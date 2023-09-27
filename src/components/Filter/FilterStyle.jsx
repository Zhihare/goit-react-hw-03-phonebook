import styled from 'styled-components';


export const FilterLabel = styled.label`
	display: flex;
    flex-direction: column;
    align-items: center;
	gap: 3px;
	margin-bottom: 10px;
	position: relative;
	`
export const FilterInput = styled.input`
    padding: 4px 0px 4px 24px;
	background-color: ${(props) => props.theme.tagLineColor};
	border-style: ridge;
    color: ${(props) => props.theme.titleColor};

`
export const FilterSpan = styled.span`
    position: absolute;
	left: 27%;
    top: 20%;
	
`