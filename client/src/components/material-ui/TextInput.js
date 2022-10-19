import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ name, type, placeholder, multiline }) => {
    const id = name.split(' ').join('');

    return (
        <TextField
            id={id}
            name={name}
            type={type}
            label={name.toUpperCase()}
            placeholder={placeholder ? placeholder : `Enter your ${name.toLowerCase()}`}
            multiline={multiline}
            minRows={multiline ? 2 : null}
            maxRows={multiline ? 4 : null}
            margin='normal'
            fullWidth
            required
            sx={{
                margin: '0.5rem 1rem',
                '& .MuiOutlinedInput-root': {
                    backgroundColor: 'White',
                    '& fieldset': {
                        border: '1px solid Black',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'LightSeaGreen',
                    }
                },
                '& .MuiInputLabel-root': {
                    color: 'LightSeaGreen'
                }
            }}
        />
    );
};

export default TextInput;