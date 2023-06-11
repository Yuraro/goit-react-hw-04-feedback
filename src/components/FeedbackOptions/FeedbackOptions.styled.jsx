import styled from '@emotion/styled';

export const ButtonList = styled.ul`
list-style:none;
display: flex;
flex-direction: row;
margin: 0 auto;
padding: 0;`

export const ListItem = styled.li`
&:not(:last-child) {
	margin-right: 20px;
}`

export const ButtonOption = styled.button`
padding: 10px 20px;
font-size: 16px;
border-radius: 4px;
border: none;
color: #fff;
background-color: #76b5c5;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
    background-color: #a2e1e8;
}
&:active {
    background-color: #a2e1e8;
}
`;