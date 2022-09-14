import React from 'react';
import QRCode from "react-qr-code";
import Form from './components/Form';


import styles from './styles/App.module.scss'

function App() {
  const [inputValue, setInputValue] = React.useState('')
  const [checkInput, setCheckInput] = React.useState(true)
  const [showQR, setShowQR] = React.useState(false)

  const onSubmitInputValue = (e) => {
    e.preventDefault()
    if (inputValue === '') {
      setCheckInput(false)
    } else setShowQR(true)
  }
  const onChangeInput = (e) => {
    setInputValue(e.target.value)
    setCheckInput(true)
  }

  React.useEffect(() => {
    if (inputValue === '') setShowQR(false)
  }, [inputValue])

  return (
    <div className={styles['qrcode']}>
      <Form
        checkInput={checkInput}
        inputValue={inputValue}
        onChangeInput={onChangeInput}
        onSubmitInputValue={onSubmitInputValue}
      />
      {showQR &&
        <QRCode value={inputValue} />
      }
    </div>

  );
}

export default App;
