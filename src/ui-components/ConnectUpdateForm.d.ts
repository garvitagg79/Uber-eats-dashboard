/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Connect } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConnectUpdateFormInputValues = {
    name?: string;
    email?: string;
    phoneNumber?: string;
    query?: string;
};
export declare type ConnectUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    query?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConnectUpdateFormOverridesProps = {
    ConnectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    query?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConnectUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConnectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    connect?: Connect;
    onSubmit?: (fields: ConnectUpdateFormInputValues) => ConnectUpdateFormInputValues;
    onSuccess?: (fields: ConnectUpdateFormInputValues) => void;
    onError?: (fields: ConnectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConnectUpdateFormInputValues) => ConnectUpdateFormInputValues;
    onValidate?: ConnectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConnectUpdateForm(props: ConnectUpdateFormProps): React.ReactElement;
