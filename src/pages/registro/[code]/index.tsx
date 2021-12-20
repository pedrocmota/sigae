import React, {useState} from 'react'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import Loading from '../../../components/Loading'
import PrimaryInput from '../../../components/PrimaryInput'
import Select from '../../../components/Select'
import PrimaryButton from '../../../components/PrimaryButton'
import Footer from '../../../components/Footer'
import Banner from '../../../components/RegisterBanner'
import ShowPassword from '../../../components/ShowPassword'
import PasswordPopup from '../../../components/PasswordPopup'
import {Spinner} from '../../../components/icons'
import {parsePreferredName} from '../../../../utils/parse'
import {validateEmail, passwordStrength} from '../../../../utils/validation'
import {Person, School, ImportContacts, AlternateEmail, VpnKey, Create} from '@mui/icons-material'
import {
  Container,
  Top,
  Main,
  FormContainer,
  Info,
  Form,
  Row,
  InputContainer,
  PasswordPopupContainer
} from '../../../styles/pages/register/Form'
import {showConfirmPolicy} from '../../../popups/ConfirmPolicy'
import {useToasts} from 'react-toast-notifications'
import {useAPI} from '../../../providers/APIContext'
import {useRouter} from 'next/router'
import sigaeIcon from '../../../../public/sigae.svg'
import {getRegistrationInfos} from '../../../../server/models/Register'

interface IRegister {
  code: string,
  name: string,
  userNumber: string,
  type: string,
  campus: string,
  courses: string[],
  classeCodes: {
    [name: string]: {
      [name: string]: string[]
    }
  },
  subjects: string[]
}

interface IRegistrationParams {
  preferredName: string,
  email: string,
  password: string,
  course?: string,
  class?: string,
  subjects?: string[]
}

interface IRegistrationError {
  error:
  'UNKNOWN_CODE' |
  'USER_ALREADY_REGISTERED' |
  'INVALID_PREFERRED_NAME' |
  'INVALID_EMAIL' |
  'EMAIL_ALREADY_USED' |
  'INVALID_PASSWORD' |
  'INVALID_COURSE_OR_CLASS' |
  'EMPTY_SUBJECTS_LIST' |
  'INVALID_SUBJECTS_LIST'
}

const Register: React.FunctionComponent<IRegister> = (props) => {
  const [sending, setSending] = useState(false)
  const [classes, setClasses] = useState<string[]>([])

  const [preferredName, setPreferredName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')
  const [classCode, setClassCode] = useState('')
  const [subjects, setSubjects] = useState([])
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [password1Error, setPassword1Error] = useState(false)
  const [password2Error, setPassword2Error] = useState(false)

  const [passwordPopup, setPasswordPopup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {addToast} = useToasts()
  const {sendPost} = useAPI()
  const {push} = useRouter()

  const validate = () => {
    const validName = preferredName.length > 0
    const validCourse = course.length > 0
    const validClass = classCode.length > 0 && classes.includes(classCode)
    const validSubjects = subjects.length > 0
    const validEmail = validateEmail(email)
    const validPassword1 = passwordStrength(password1).valid
    const validPassword2 = password1 === password2
    const valid = validName && validEmail && validPassword1 && validPassword2
    const validStudent = valid && validCourse && validClass
    const validoTeacher = valid && validSubjects
    if (props.type === 'STUDENT') return validStudent
    if (props.type === 'TEACHER') return validoTeacher
    return valid
  }

  const confirm = () => {
    showConfirmPolicy((confirmed) => {
      if (confirmed) {
        setSending(true)
        sendPost<IRegistrationParams, any, IRegistrationError>(`/registration/${props.code}/register`, {
          preferredName: preferredName,
          email: email,
          password: password1,
          ...props.type === 'STUDENT' && {
            course: course,
            class: classCode
          },
          ...props.type === 'TEACHER' && {
            subjects: subjects
          }
        }, () => {
          push(`/registro/${props.code}/validar`)
        }, (response, status) => {
          setSending(false)
          if (status === 404 || status === 406) {
            if (response.error === 'UNKNOWN_CODE') {
              addToast('Código inválido', {appearance: 'error'})
            }
            if (response.error === 'USER_ALREADY_REGISTERED') {
              addToast('Usuário já registrado', {appearance: 'error'})
            }
            if (response.error === 'INVALID_PREFERRED_NAME') {
              addToast('Nome preferêncial inválido', {appearance: 'error'})
            }
            if (response.error === 'INVALID_EMAIL') {
              addToast('E-mail inválido', {appearance: 'error'})
            }
            if (response.error === 'EMAIL_ALREADY_USED') {
              addToast('Esse e-email já está em uso', {appearance: 'error'})
            }
            if (response.error === 'INVALID_PASSWORD') {
              addToast('Senha inválida', {appearance: 'error'})
            }
            if (response.error === 'INVALID_COURSE_OR_CLASS') {
              addToast('Curso ou turma inválido(s)', {appearance: 'error'})
            }
            if (response.error === 'INVALID_SUBJECTS_LIST') {
              addToast('Lista de disciplinas inválida', {appearance: 'error'})
            }
          } else {
            addToast('Erro desconhecido', {appearance: 'error'})
          }
        })
      }
    })
  }

  return (
    <Container>
      <Head>
        <title>SiGAÊ - Formulário de registro</title>
      </Head>
      <Loading />
      <Top>
        <NextLink href="/">
          <a>
            <img src={sigaeIcon} alt="Logo do SiGAÊ" />
          </a>
        </NextLink>
        <h1>Formulário de inscrição</h1>
      </Top>
      <Main>
        <FormContainer>
          <Info>
            <div className="name">
              {props.name}
            </div>
            <div className="matricula">
              Matrícula: <b>{props.userNumber}</b>
            </div>
            <div className="campus">
              Campus: <b>{props.campus}</b>
            </div>
          </Info>
          <Form name="register" method="POST">
            <Row>
              <Banner icon={<Person />}
                title="Abreviação do nome"
                body={
                  `Essa configuração define a abreviação do seu nome.
                 Seu nome aparecerá com essa abreviação na maioria das vezes.`
                }>
              </Banner>
              <Select placeholder="Escolha seu nome" options={parsePreferredName(props.name)}
                margin_top={12} onChange={(v) => setPreferredName(v)}
              />
            </Row>
            <Row>
              <Banner icon={<AlternateEmail />}
                title="Seu Email"
                body={
                  `O SiGAÊ enviará e-mails para a conta, informando a situação dos atendimentos, essa opção pode ser desativada posteriormente.
                   O e-mail também servirá para recuperar a conta caso haja perda de senha.`
                }>
              </Banner>
              <PrimaryInput id="email" type="email" placeholder="Digite seu Email" margin_top={12}
                error={emailError} onChange={(e) => {
                  setEmail(e.currentTarget.value)
                  setEmailError(e.currentTarget.value.length > 0 && !validateEmail(e.currentTarget.value))
                }} />
            </Row>
            {(props.type === 'STUDENT') && (
              <>
                <Row>
                  <Banner icon={<School />}
                    title="Seu curso"
                    body={
                      `Escolha o curso que você cursa atualmente.
                     Esta opção pode ser alterada posteriormente.`
                    }>
                  </Banner>
                  <Select placeholder="Escolha seu curso" options={props.courses}
                    margin_top={12} onChange={(v) => {
                      setCourse(v)
                      setClasses(v ? props.classeCodes[props.campus][v] : [])
                      setClassCode('')
                    }} />
                </Row>
                <Row>
                  <Banner icon={<ImportContacts />}
                    title="Sua turma"
                    body={
                      `Escolha a turma na qual você faz parte atualmente.
                       Esta opção pode ser alterada posteriormente.`
                    }>
                  </Banner>
                  <Select key={course} placeholder="Escolha sua turma" options={classes}
                    disabled={classes.length == 0} margin_top={12}
                    onChange={(v) => setClassCode(v)}
                  />
                </Row>
              </>
            )}
            {(props.type === 'TEACHER') && (
              <Row>
                <Banner icon={<Create />}
                  title="Suas disciplinas"
                  body={
                    `Selecione as disciplinas que você ministra.
                   Esta opção pode ser alterada posteriormente.`
                  }>
                </Banner>
                <Select placeholder="Escolha as disciplinas que você ministra"
                  options={props.subjects!} multiple margin_top={12}
                  onChange={(v) => setSubjects(v)}
                />
              </Row>
            )}
            <Row>
              <Banner icon={<VpnKey />}
                title="Sua senha"
                body={
                  `Digite uma senha que siga as seguintes regras:
                    • Entre 6 e 500 caracteres.
                    • Pelo menos uma letra maiúscula.
                    • Pelo menos um número.
                    • Pelo menos um caractere especial.
                  `
                }>
              </Banner>
              <InputContainer>
                <PrimaryInput id="password1" type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha" error={password1Error} onChange={(e) => {
                    setPassword1(e.currentTarget.value)
                    setPassword1Error(
                      e.currentTarget.value.length > 1 &&
                      !passwordStrength(e.currentTarget.value).valid
                    )
                  }} onFocus={() => {
                    setPasswordPopup(true)
                  }} onBlur={() => {
                    setPasswordPopup(false)
                  }} />
                <ShowPassword selected={showPassword} onClick={() => {
                  setShowPassword(!showPassword)
                }} />
                <PasswordPopupContainer>
                  <PasswordPopup visible={passwordPopup} password={password1} />
                </PasswordPopupContainer>
              </InputContainer>
              <InputContainer>
                <PrimaryInput id="password2" type={showPassword ? 'text' : 'password'}
                  placeholder="Repita sua senha" error={password2Error} onChange={(e) => {
                    setPassword2(e.currentTarget.value)
                    setPassword2Error(
                      e.currentTarget.value.length > 1 &&
                      password1 != e.currentTarget.value
                    )
                  }} />
                <ShowPassword selected={showPassword} onClick={() => {
                  setShowPassword(!showPassword)
                }} />
              </InputContainer>
            </Row>
            <PrimaryButton type="submit" height={'45px'} disabled={!validate() || sending} onClick={confirm}
              margin_top={10} margin_bottom={30}>
              {(!sending) && (
                'Finalizar inscrição'
              )}
              {(sending) && (
                <Spinner />
              )}
            </PrimaryButton>
          </Form>
        </FormContainer>
      </Main>
      <Footer />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context.query.code as string
  const infos = await getRegistrationInfos(code)
  return {
    props: {
      ...infos?.status === 'UNREGISTERED' && {
        code: code,
        ...infos
      }
    },
    ...infos === null && {
      redirect: {
        destination: '/registro'
      }
    },
    ...infos?.status === 'UNCONFIRMED' && {
      redirect: {
        destination: `/registro/${code}/validar`
      }
    }
  }
}

export default Register