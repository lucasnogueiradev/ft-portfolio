import { useId, useState } from "react";
import * as S from "./styles";
import { InputProps, CheckboxProps } from "./Input";

// Input de checkbox
const Checkbox = ({ label, type }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <S.CheckboxContainer>
      <S.CheckboxInput
        type={type}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <S.CheckboxLabel>{label}</S.CheckboxLabel>
    </S.CheckboxContainer>
  );
};

// Input de texto
const InputText = ({
  label,
  name,
  type,
  startAdornment,
  endAdornment,
  ...rest
}: InputProps) => {
  const labelId = useId();
  return (
    <>
      {label && <S.Label htmlFor={label}>{label}</S.Label>}
      <S.ContainerInput>
        {startAdornment && (
          <S.StartAdornment>{startAdornment}</S.StartAdornment>
        )}
        <S.Input id={labelId} name={name} type={type} {...rest} />
        {endAdornment && <S.StartAdornment>{endAdornment}</S.StartAdornment>}
      </S.ContainerInput>
    </>
  );
};

export { Checkbox, InputText };
