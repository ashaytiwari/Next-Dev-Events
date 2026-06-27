import React from 'react';

interface FormInputControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
  placeholder?: string;
  className?: string;
}

const FormInputControl: React.FC<FormInputControlProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  className = '',
  type = 'text',
  ...rest
}) => {

  const inputAttributes = {
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    type,
    id: name,
    className: `bg-dark-200 text-light-100 rounded-[6px] px-5 py-2.5 border outline-none placeholder:text-light-200/50 transition-all duration-200 ${error
      ? 'border-red-500 focus:border-red-500'
      : 'border-white/10 focus:border-blue'
      }`,
    ...rest
  };

  function renderError() {

    if (!error) {
      return;
    }

    return (
      <span className="text-red-500 text-sm mt-1">
        {error}
      </span>
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>

      <label htmlFor={name} className="text-light-100 text-sm font-medium">
        {label}
      </label>

      <input {...inputAttributes} />

      {renderError()}
    </div>
  );
};

export default FormInputControl;
