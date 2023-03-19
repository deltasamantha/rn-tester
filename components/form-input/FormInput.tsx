import React, {useMemo} from "react";
import {
  useController,
  UseControllerProps,
  useFormContext,
  useFormState,
} from "react-hook-form";
import {Box, Input, Text} from "native-base";

interface Props extends UseControllerProps {
  placeholder?: string;
  type?: "text" | "password";
}

const FormInput: React.FC<Props> = ({
  placeholder,
  type = "text",
  ...rest
}: Props) => {
  const formContext = useFormContext();
  const {name, rules, defaultValue} = rest;

  const {field} = useController({name, rules, defaultValue});
  const {onBlur, value, onChange} = field;
  const {errors} = useFormState();

  const errorMessage = useMemo(() => {
    return errors[`${name}`]?.message as string;
  }, [errors[`${name}`]?.message, name]);
  return (
    <Box mt="3" maxW="340">
      <Input
        width="full"
        py="3"
        borderColor="tester.600"
        backgroundColor="tester.100"
        size="xl"
        variant="rounded"
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
      {errorMessage && (
        <Text color="danger.600" mx="2.5">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default FormInput;
