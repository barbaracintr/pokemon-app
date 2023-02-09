import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { GlobalStyle } from "./components/styles/global"
import { ToastContainer } from 'react-toastify';

export const App: React.FC = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Form />
      <ToastContainer />
    </>
  )
}
