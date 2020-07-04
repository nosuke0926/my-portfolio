// import React from 'react'
// import { makeStyles, Theme } from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
// import Typography from '@material-ui/core/Typography'
// import Box from '@material-ui/core/Box'

import Link from 'next/link'

// interface TabPanelProps {
//   children?: React.ReactNode
//   index: any
//   value: any
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   )
// }

// function a11yProps(index: any) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   }
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }))

// export default function SimpleTabs() {
//   const classes = useStyles()
//   const [value, setValue] = React.useState(0)

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue)
//   }

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="simple tabs example"
//         >
//           <Link href="/home">
//             <Tab label="home" {...a11yProps(0)} />
//           </Link>
//           <Link href="/works">
//             <Tab label="Works" {...a11yProps(1)} />
//           </Link>
//           <Link href="/contact">
//             <Tab label="Contact" {...a11yProps(2)} />
//           </Link>
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         home
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </div>
//   )
// }

import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// import Typography from '@material-ui/core/Typography'
// import Box from '@material-ui/core/Box'

// interface TabPanelProps {
//   children?: React.ReactNode
//   index: any
//   value: any
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`nav-tabpanel-${index}`}
//       aria-labelledby={`nav-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   )
// }

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  }
}

interface LinkTabProps {
  label?: string
  href?: string
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function NavTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Link href="/home">
            <LinkTab label="Home" href="/home" {...a11yProps(0)} />
          </Link>
          <Link href="/works">
            <LinkTab label="Works" href="/works" {...a11yProps(1)} />
          </Link>
          <Link href="/contact">
            <LinkTab label="Contact" href="/contact" {...a11yProps(2)} />
          </Link>
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        Page One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel> */}
    </div>
  )
}
