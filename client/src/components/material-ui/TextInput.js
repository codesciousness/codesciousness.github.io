import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ name, type, placeholder, multiline }) => {
    const id = name.split(' ').join('');

    return (
        <TextField
            id={id}
            name={name}
            type={type}
            //label={name.toUpperCase()}
            placeholder={placeholder ? placeholder : `Enter your ${name.toLowerCase()}`}
            multiline={multiline}
            minRows={multiline ? 2 : null}
            maxRows={multiline ? 4 : null}
            margin='normal'
            fullWidth
            required
            InputLabelProps={{
                style: { color: 'LightSeaGreen' }
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    backgroundColor: 'White',
                    '&.Mui-focused fieldset': {
                        borderColor: 'LightSeaGreen',
                    }
                }
            }}
        />
    );
};

export default TextInput;