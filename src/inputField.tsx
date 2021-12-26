import React, { InputHTMLAttributes, ReactElement, ReactNode } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, ...props }, ref}): ReactElement => (
    <div>
    <label>{label}</label>
    <input type="text" ref={ref} {...props}/>
    </div>
  )
);