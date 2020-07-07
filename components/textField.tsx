import React from 'react'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import IconLabelButtons from '../components/button'
import utilStyles from '../styles/utils.module.css'

type FormData = {
  email: string
  content: string
}

// const defaultValues = {
//   email: '',
//   content: '',
// }

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

  const handleOnSubmit = (data: FormData) => {
    console.log(data.content)
    reset()
  }

  return (
    <form
      className={`${classes.root} ${utilStyles.center}`}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
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
          id="outlined-content"
          label="お問い合わせ内容"
          multiline
          inputRef={register({
            required: 'お問い合わせ内容を入力してください。',
          })}
          name="content"
          rows={10}
          variant="outlined"
          className={errors.content && 'error'}
          helperText={errors.content && errors.content.message}
        />
      </div>

      {IconLabelButtons()}
    </form>
  )
}
