import styled from 'styled-components';
import TextField from '@mui/material/TextField';

interface textFiledType {
  label: string;
  placeholder?: string;
  id?: string;
  defaultValue?: string;
  helperText?: string;
  type?: 'address' | 'password';
  value?: string;
  error: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}

export const ChangeTextfiled = ({ label, placeholder, id, defaultValue, helperText, onChange, type, value, error }: textFiledType) => {

  return (
    <>
      <TextField
        id={id}
        label={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        helperText={helperText || ''}
        sx={{ width: '100%', height: '63.91px', '& .MuiInputBase-input.Mui-disabled': { WebkitTextFillColor: '#000000' } }}
        margin="none"
        disabled={type === 'address'}
        type={type !== 'password' ? 'text' : 'password'}
        size='small'
        error={error}
      />
    </>
  );
};