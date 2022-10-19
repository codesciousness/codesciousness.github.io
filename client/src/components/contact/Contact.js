import React, { useState } from 'react';
import './Contact.css';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import TextInput from '../material-ui/TextInput';
import BackgroundImg from '../../resources/images/christopher-gower-m_HRfLhgABo-unsplash.jpg';

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <section id="contact" className="Contact" style={style}>
            <h2 className="Contact__title">Reach out! Let's start something together.</h2>
            <form className="Contact__form" action="https://fabform.io/f/veBpK-v" method="post">
                <TextInput name="name" />
                <TextInput name="email" type="email" />
                <TextInput name="message" multiline/>
                <LoadingButton
                    className="Contact__button"
                    type="submit"
                    variant="contained"
                    disableElevation
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    sx={{
                        backgroundColor: 'lightseagreen',
                        padding: '1rem 3rem',
                        marginTop: '1rem',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.25rem',
                        fontFamily: 'Rajdhani, sans-serif',
                        '&:hover': {
                            background: 'rgba(255, 255, 255, 0.3)'
                        }
                    }}
                >
                    Send
                </LoadingButton>
            </form>
        </section>
    );
}

export default Contact;