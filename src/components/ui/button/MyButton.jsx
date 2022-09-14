import React from 'react'

import styles from './MyButton.module.scss'
const MyButton = ({ onSubmitInputValue }) => {
    return (
        <div>
            <button
                className={styles['qrcode__button']}
                onClick={onSubmitInputValue}
            >
                Создать QRCode
            </button>
        </div>
    )
}

export default MyButton
