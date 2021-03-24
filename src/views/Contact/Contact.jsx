import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { Button, TextField, CircularProgress } from "@material-ui/core";

const Form = styled.form`
  display: flex;
  align-items: stretch;
  max-width: 600px;
  margin: 0 auto;
  justify-content: centre;
  flex-direction: column;
`;

const InputWrap = styled.div`
  padding: 1rem;
`;

const Contact = (props) => {
  const { onSave } = props;

  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = ({ target }) => setName(target.value);
  const handleEmailChange = ({ target }) => setEmail(target.value);
  const handleMessageChange = ({ target }) => setMessage(target.value);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setSending(true)
    await onSave(name, email, message);
    setSending(false)
  };

  return (
    <Layout activePage="contact">
      <Form onSubmit={handleOnSubmit}>
        <InputWrap>
          <TextField
            fullWidth
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            label="Name"
          />
        </InputWrap>

        <InputWrap>
          <TextField
            fullWidth
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            label="Email"
          />
        </InputWrap>

        <InputWrap>
         <TextField
            fullWidth
            varient="outlined"
            value={message}
            onChange={handleMessageChange}
            label="Message"
            multline
            rows={6}
          />
        </InputWrap>

        <Button variant="contained" type="submit" disabled={sending} size="large">
          {
            sending ? 
            <><span>Sending ...</span><CircularProgress size={12} /></> :
            'Send message'
          }
          
        </Button>
      </Form>
    </Layout>
  );
};
export default Contact;
