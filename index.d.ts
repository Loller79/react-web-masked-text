/**
 * Type Definition.
 *
 * Using with Typescript development.
 *
 * Definitions by: Italo Izaac <https://github.com/iiandrade>
 */

import * as React from 'react'

// Type prop of TextInputMask.
export type TextInputMaskTypeProp =
    | 'credit-card'
    | 'cpf'
    | 'cnpj'
    | 'zip-code'
    | 'only-numbers'
    | 'money'
    | 'cel-phone'
    | 'datetime'
    | 'custom'

// Option prop of TextInputMask.
export interface TextInputMaskOptionProp {
    // Money type.
    precision?: number
    separator?: string
    delimiter?: string
    unit?: string
    suffixUnit?: string
    zeroCents?: boolean

    // Phone type.
    withDDD?: boolean
    dddMask?: string
    maskType?: 'BRL' | 'INTERNATIONAL'

    // Datetime type.
    format?: string

    // Credit card type.
    obfuscated?: boolean
    issuer?: 'visa-or-mastercard' | 'diners' | 'amex'

    // Custom type.
    mask?: string
    validator?: (value: string, settings: TextInputMaskOptionProp) => boolean
    getRawValue?: (value: string, settings: TextInputMaskOptionProp) => any
    translation?: { [s: string]: (val: string) => string | null | undefined }

    // Options
    includeRawValueInChangeText?: boolean
}

// TextInputMask Props
export interface TextInputMaskProps {
    kind: TextInputMaskTypeProp
    options?: TextInputMaskOptionProp
    checkText?: (previous: string, next: string) => boolean
    onChange?: (text: string, rawText?: string) => void
    refInput?: (ref: any) => void
    customTextInput?: any
    customTextInputProps?: Object
}

// TextInputMask Component
export class TextInputMask extends React.Component<TextInputMaskProps> {}

// TextMask
export class TextMask extends React.Component<TextInputMaskProps> {}

// MaskService
export namespace MaskService {
    function toMask(
        kind: string,
        value: string,
        options?: TextInputMaskOptionProp
    ): string
    function toRawValue(
        kind: string,
        maskedValue: string,
        options?: TextInputMaskOptionProp
    ): string
    function isValid(
        kind: string,
        value: string,
        options?: TextInputMaskOptionProp
    ): boolean
}

// TextInputMaskMethods
export class TextInputMaskMethods {
    getRawValue(): string
    isValid(): boolean
}

// TextInputMasked
export type TextInputMasked = TextInputMaskMethods | null

// TextMaskMethods
export class TextMaskMethods {
}

// TextMaskInstance
export type TextMaskInstance = TextMaskMethods | null
