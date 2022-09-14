import React from 'react'
import MyButton from './ui/button/MyButton';
import MyInput from './ui/input/MyInput';

import styles from '../styles/Form.module.scss'

const Form = ({ checkInput, inputValue, onChangeInput, onSubmitInputValue }) => {
    return (
        <form className={styles['qrcode__form']}>
            <MyInput
                inputClass={checkInput === true ? 'qrcode__input' : 'qrcode__input-error'}
                inputValue={inputValue}
                setInputValue={onChangeInput}
            />
            {checkInput
                ? ''
                : <span className={styles['input__error']}>Введите ссылку!</span>
            }
            <MyButton onSubmitInputValue={onSubmitInputValue} />
        </form>
    )
}

export default Form
