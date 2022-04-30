import React, { useState } from 'react';
import './Contact.css';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';

const Contact = () => {
    const [loading, setLoading] = useState(false);

    return (
        <section id="contact" className="Contact">
            <h2 className="Contact__title">Reach out! Let's start something together.</h2>
            <form className="Contact__form" method="post" action="" role="presentation">
                <TextField id="name" label="NAME" variant="outlined" placeholder="Enter your name" inputProps={{ pattern: '[A-Za-z]' }} margin="normal" fullWidth required />
                <TextField id="email" label="EMAIL" variant="outlined" placeholder="Enter your email address" type="email" margin="normal" fullWidth required />
                <TextField id="message" label="MESSAGE" variant="outlined" placeholder="Enter your message" margin="normal" multiline fullWidth required />
                <LoadingButton
                    className="Contact__button"
                    variant="contained"
                    loading={loading}
                    endIcon={<SendIcon />}
                    loadingPosition="end"
                    sx={{ backgroundColor: 'lightseagreen', marginTop: '1rem' }}
                >
                    SEND
                </LoadingButton>
            </form>
        </section>
    );
}

export default Contact;