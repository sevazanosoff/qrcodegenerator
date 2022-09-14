import React from 'react'

import styles from './MyInput.module.scss'

const MyInput = ({ inputValue, setInputValue, inputClass }) => {
    return (
        <input
            value={inputValue}
            onChange={(e) => setInputValue(e)}
            type='url'
            className={styles[`${inputClass}`]}
            placeholder='Введите ссылку что-бы сгенерировать QRCode'
        />
    )
}

export default MyInput
