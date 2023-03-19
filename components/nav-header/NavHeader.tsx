
import { Box, Flex, Heading, IconButton, ThreeDotsIcon } from "native-base";
import {NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { BackIcon } from "../../theme/tester-icons";

interface StackNavHeaderProps extends Partial<NativeStackHeaderProps> {
    transparent?: boolean;
    subtitle?: React.ReactNode;
}

interface NavHeaderProps {
    transparent?: boolean;
    subtitle?: React.ReactNode;
    title?: string;
    navigation?: NativeStackHeaderProps["navigation"];
    onBack?: () => any;
    onOptions?: () => any;
    showOptions?: boolean;
}

/**
 * Navbar to be used when set by react navigation
 */
export const StackNavHeader: React.FC<StackNavHeaderProps> = ({ options, ...rest }) => {
    return <NavHeader title={options?.title} {...rest} />;
};

/**
 * Navbar to be used directly in a component.
 */
export const NavHeader: React.FC<NavHeaderProps> = ({
    title,
    navigation,
    transparent,
    subtitle: Subtitle,
    onBack,
    onOptions,
    showOptions,
}) => {
    return (
        <Flex
            w="full"
            h={Subtitle ? "92px" : "80px"}
            bg={transparent ? undefined : "tester.400"}
            direction={"row"}
            justify="space-between"
            alignItems="center"
            align="flex-end">
            {!!onBack || navigation?.canGoBack() ? (
                <IconButton
                    icon={<BackIcon color={"tester.700"} />}
                    onPress={onBack || navigation!.goBack}
                    w={10}
                    _pressed={{ bg: null }}
                />
            ) : (
                <Box w={10} />
            )}

            {title ? (
                <Flex alignItems={"center"}>
                    <Heading color={"tester.700"} fontWeight="semibold" fontSize={"xl"} pb={Subtitle ? 0 : 1}>
                        {title}
                    </Heading>
                    {Subtitle}
                </Flex>
            ) : (
                <Box />
            )}
            {!!onOptions && showOptions ? (
                <IconButton
                    rounded={"full"}
                    p={1.5}
                    mt={1}
                    mr={2}
                    bg="muted.100"
                    icon={<ThreeDotsIcon size="18px" color="tester.700" />}
                    onPress={onOptions}
                />
            ) : (
                <Box w={10} />
            )}
        </Flex>
    );
};
