import React from 'react';

/**
 * @param {String} placeholder
 * @param {Function(String)} onChange
 */
function SingleLineBoxedTextField(placeholder, onChange) {
    return <input type='text' />
}

/**
 * @param {String} placeholder
 * @param {Function(String)} onChange
 */
function MultilineBoxedTextArea(placeholder, onChange) {
    return <textarea />
}

/**
 * @param {Boolean} props.isSingleLine
 * @param {String} props.placeholder
 * @param {Function(String)} props.onChange
 */
export default function BoxedTextField(props) {
    return props.isSingleLine ? SingleLineBoxedTextField(props.placeholder, props.onChange)
        : MultilineBoxedTextArea(props.placeholder, props.onChange);
}