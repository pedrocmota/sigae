import React, {useState, useRef, useCallback} from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import Loading from '../../components/Loading'
import PinInput from '../../components/PinInput'
import PrimaryButton from '../../components/PrimaryButton'
import Link from '../../components/Link'
import Footer from '../../components/Footer'
import {Spinner} from '../../components/icons'
import {showPolicy} from '../../popups/Policy'
import {showHowGet} from '../../popups/HowGet'
import {Container, Top, Main, InputContainer} from '../../styles/pages/register/Code'
import {useRouter} from 'next/router'
import {useToasts} from 'react-toast-notifications'
import {useAPI} from '../../providers/APIContext'
import sigaeIcon from '../../../public/sigae.svg'

const RegisterForm: React.FunctionComponent = () => {
  const [code, setCode] = useState('')
  const [sending, setSending] = useState(false)
  const button = useRef<HTMLButtonElement>(null)

  const {push} = useRouter()
  const {sendGet} = useAPI()
  const {addToast} = useToasts()

  const checkCode = useCallback(() => {
    setSending(true)
    sendGet(`/registration/${code}/check`, {}, false, () => {
      setSending(false)
      push(`/registro/${code}`)
    }, (response, status) => {
      setSending(false)
      if (status === 406) {
        addToast('Esse código é inválido', {appearance: 'error'})
      } else {
        addToast('Erro desconhecido', {appearance: 'error'})
      }
    })
  }, [code])

  return (
    <Container>
      <Head>
        <title>SiGAÊ - Registro</title>
      </Head>
      <Loading />
      <Top>
        <NextLink href="/">
          <a>
            <img src={sigaeIcon} alt="Logo do SiGAÊ" />
          </a>
        </NextLink>
        <h1>Digite o código de inscrição</h1>
      </Top>
      <Main>
        <InputContainer>
          <PinInput type='text' fields={8} inputMode="latin" name="code"
            onChange={(v) => setCode(v)}
          />
          <PrimaryButton type="submit" variant="contained" margin_top={10} disabled={code.length < 8}
            height={'40px'} onClick={checkCode} ref={button}>
            {!sending && (
              <>Usar código</>
            )}
            {sending && (
              <Spinner />
            )}
          </PrimaryButton>
          <div className="links">
            <Link className="l1" onClick={showHowGet}>
              Como consigo um código?
            </Link>
            <Link className="l2" onClick={showPolicy}>
              Política do SiGAÊ
            </Link>
          </div>
        </InputContainer>
      </Main>
      <Footer />
    </Container>
  )
}

export default RegisterForm