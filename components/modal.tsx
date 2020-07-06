import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      //   border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: 0,
    },
  }),
)

export default function TransitionsModal(props: any) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={`${utilStyles.center}`}>
      <p className={`${styles.appDescriptionText}`}>{props.description}</p>
      <a href="#" onClick={handleOpen}>
        <img
          src={props.src}
          className={`${styles.appIconImage} ${utilStyles.borderAppIcon}`}
          alt={props.alt}
        />
      </a>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={`${classes.paper} ${utilStyles.lightText}`}>
            <h2 id="transition-modal-title">{props.appTitle}</h2>
            <div>
              <p>使用技術</p>
              <ul>
                {props.useTechnology &&
                  props.useTechnology.map((word: string, index: string) => (
                    <li key={index}>{word}</li>
                  ))}
              </ul>
            </div>
            <p id="transition-modal-description">{props.appDescription}</p>
            <div className={`${styles.appButtonAlign}`}>
              {props.iosUrl && (
                <a
                  className={`${styles.iosButton}`}
                  href={props.iosUrl}
                  target="_blank"
                ></a>
              )}
              {props.androidUrl && (
                <a href={props.androidUrl} target="_blank">
                  <img
                    alt="Google Play で手に入れよう"
                    src="https://play.google.com/intl/ja_jp/badges/static/images/badges/ja_badge_web_generic.png"
                    className={`${styles.androidButton}`}
                  />
                </a>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
