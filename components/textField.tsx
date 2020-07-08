import React from 'react'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import IconLabelButtons from '../components/button'
import utilStyles from '../styles/utils.module.css'
import Router from 'next/router'

type FormData = {
  email: string
  message: string
  accessKey: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
)

export default function FormPropsTextFields() {
  const { register, handleSubmit, errors, reset } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  })
  const classes = useStyles()

  const handleOnSubmit = async (data: FormData) => {
    reset()
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })

      const json = await res.json()

      if (json.success) {
        //成功したらホームに遷移する
        console.log('success')
        Router.push('/')
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log('An error occurred', error)
    }
  }

  return (
    <form
      className={`${classes.root} ${utilStyles.center}`}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleOnSubmit)}
      action="https://api.staticforms.xyz/submit"
      method="post"
    >
      <TextField
        type="hidden"
        id="outlined-accessKey"
        autoComplete="current-accessKey"
        variant="outlined"
        name="accessKey"
        inputRef={register({
          required: 'キーを入力してください。',
        })}
        value="edb1473b-e077-484d-a01c-8378dd1d695b"
      />
      <div>
        <TextField
          id="outlined-email"
          label="メールアドレス"
          autoComplete="current-email"
          variant="outlined"
          inputRef={register({
            required: 'メールアドレスを入力してください。',
          })}
          name="email"
          className={errors.email && 'error'}
          helperText={errors.email && errors.email.message}
        />
      </div>
      <div>
        <TextField
          id="outlined-message"
          label="お問い合わせ内容"
          multiline
          inputRef={register({
            required: 'お問い合わせ内容を入力してください。',
          })}
          name="message"
          rows={10}
          variant="outlined"
          className={errors.message && 'error'}
          helperText={errors.message && errors.message.message}
        />
      </div>

      {IconLabelButtons()}
    </form>
  )
}
