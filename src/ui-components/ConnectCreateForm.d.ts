/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConnectCreateFormInputValues = {
    name?: string;
    email?: string;
    phoneNumber?: string;
    query?: string;
};
export declare type ConnectCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    query?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConnectCreateFormOverridesProps = {
    ConnectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    query?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConnectCreateFormProps = React.PropsWithChildren<{
    overrides?: ConnectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConnectCreateFormInputValues) => ConnectCreateFormInputValues;
    onSuccess?: (fields: ConnectCreateFormInputValues) => void;
    onError?: (fields: ConnectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConnectCreateFormInputValues) => ConnectCreateFormInputValues;
    onValidate?: ConnectCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConnectCreateForm(props: ConnectCreateFormProps): React.ReactElement;
