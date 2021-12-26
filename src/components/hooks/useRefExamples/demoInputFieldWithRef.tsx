import React, {
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
  useRef
} from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, ...props }, ref): ReactElement => (
    <div>
      <label>{label}</label>
      <input type="text" ref={ref} {...props} />
    </div>
  )
);

export function InputFieldWithRefDemo(): ReactElement {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.value = "It's value";
    }
  }, []);

  return (
    <InputField
      label={
        <>
          An <b>unbound</b> input
        </>
      }
      ref={ref} // behaviour depends how the underlaying component is setup
    />
  );
}
