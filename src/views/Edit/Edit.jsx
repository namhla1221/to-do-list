import React, { useState } from 'react';
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { TextField, Button } from "@material-ui/core";


const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
`;

const StyledButton = styled(Button)`
&& {
    margin-top: 1rem;
}
`

const Edit = (props) => {
    const { onSave, initialName, taskId } = props;
    const [name, setName] = useState(initialName || "");

    const handleTextChange = (event) => {
        const { value } = event.target;
        setName(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(taskId, name);
    };
    return (
        <Layout activePage="edit">
            <Form onSubmit={handleSubmit}>
                <TextField
                onChange={handleTextChange}
                label="Task Name"
                variant="outlined"
                fullWidth
                value={name}
                />

              

                <StyledButton 
                type="submit" 
                variant="contained"
                color="primary" 
                size="large"
                disabled={name.trim() === ''}
                >
                    Save Task
                </StyledButton>

            </Form>
        </Layout>
    );
    };

export default Edit;