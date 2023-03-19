import {useNavigation} from "@react-navigation/native";
import {Button, Text, VStack} from "native-base";
import React from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import FormInput from "../../components/form-input/FormInput";
import {NavHeader} from "../../components/nav-header/NavHeader";
import RootContainer from "../../components/root-container/RootContainer";
import {EMAIL_VALIDATION_REGEX} from "../../config/config";
import i18n from "../../i18n/i18n";
import {AppNavProp} from "../../navigators/AppNavigator";

type FormData = {
  email: string;
  password: string;
};

const SignUp = () => {
  const {navigate, goBack} = useNavigation<AppNavProp>();
  const {handleSubmit, formState, ...methods} = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {errors} = formState;

  const onBack = () => {
    goBack();
  };

  // const submit = () => {
  //   navigate("Home");
  // };

  const onSignUp = () => {
    navigate("SignUp");
  };

  const onSubmit: SubmitHandler<FormData> = data => console.log({data});

  const onError: SubmitErrorHandler<FormData> = (errors, e) => {
    return console.log(errors);
  };

  return (
    <RootContainer>
      <NavHeader onBack={onBack} transparent />
      <VStack
        justifyContent="center"
        alignItems="center"
        flex="1"
        space="2.5"
        mt="2/3">
        <Text
          fontSize="xl"
          color="tester.700"
          fontWeight="bold"
          alignSelf="flex-start">
          {i18n.t("auth.signUp")}
        </Text>
        <FormProvider
          {...methods}
          handleSubmit={handleSubmit}
          formState={formState}>
          <FormInput
            name="email"
            placeholder={i18n.t("auth.email.placeholder")}
            rules={{
              required: {value: true, message: i18n.t("auth.email.required")},
              pattern: {
                value: EMAIL_VALIDATION_REGEX,
                message: i18n.t("auth.email.invalid"),
              },
            }}
          />
          <FormInput
            name="password"
            placeholder={i18n.t("auth.password.placeholder")}
            type="password"
            rules={{
              required: {
                value: true,
                message: i18n.t("auth.password.required"),
              },
              minLength: {
                value: 4,
                message: i18n.t("auth.password.minLength"),
              },
            }}
          />
          <FormInput
            name="reenter-password"
            placeholder={i18n.t("auth.reenterPassword.placeholder")}
            type="password"
            rules={{
              required: {
                value: true,
                message: i18n.t("auth.reenterPassword.required"),
              },
              minLength: {
                value: 4,
                message: i18n.t("auth.reenterPassword.minLength"),
              },
            }}
          />
        </FormProvider>
        <Button
          size="lg"
          rounded="full"
          mt="3"
          px="5"
          variant="solid"
          colorScheme="tester"
          w="130"
          onPress={handleSubmit(onSubmit, onError)}>
          {i18n.t("auth.signUp")}
        </Button>
      </VStack>
    </RootContainer>
  );
};

export default SignUp;
