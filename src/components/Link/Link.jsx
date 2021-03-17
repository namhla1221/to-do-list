import styled from 'styled-components';

const Base = styled.a`
font-weight: 700;
display: inline-block;
background: #EEE;
padding: 1rem;
text-transform: uppercase;
user-select: none;
font-family: Arial, sans-serif;
border: 1px solid #CCC;
border-radius: 4px;
text-decoration: none;
text-align: center;
white-space: nowrap;
width: ${props => props.fullWith ? '100%' : 'auto'};
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
color: ${props => props.disabled ? '#999' : '#222'};

&:hover {
    background: ${props => props.disabled ? '#EEE' : '#BBB'};
}

&:active {
    background: ${props => props.disabled ? '#999' : '#222'};
}
`
const Link = (props) => {
    const {children, disabled, url} = props;

    return (
    <Base 
    href= {disabled ? undefined : url}
    disabled = {disabled}
    >
    {children}
    </Base>
    )
}

export default Link;