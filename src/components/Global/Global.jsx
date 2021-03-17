import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}

body {
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: arial, sans-serif;
    padding: 0 0 8rem 0 !important;
    margin: 0 !important;
}
`

const Global = (props) => {
    const { children } = props;

    return (
<>
<GlobalStyles />
{children}
</>
    )
}


export default Global;