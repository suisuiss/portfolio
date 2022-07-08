import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
export default function AlertDialog() {
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const project1 = () => {
        setOpen1(true);
    };
    const project2 = () => {
        setOpen2(true);
    };
    const project3 = () => {
        setOpen3(true);
    };
    const project4 = () => {
        setOpen4(true);
    };

    const handleClose = () => {
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
        setOpen4(false);
    };

    return (
        <div>
            <Typography variant="h6" sx={{ display: { xs: "block", sm: "block", fontWeight: "bold" }, paddingBottom: 5 }}>Projects</Typography>
            <Button sx={{ width: 300, height: 300 }} variant="outlined" onClick={project1}>
                E-commerce website for CSC105 Web
                Application Development course (individual project)
            </Button>
            <Button sx={{ width: 300, height: 300 }} variant="outlined" onClick={project2}>
                E-commerce website for CSC290
                Integrated Project I course and being one of team leaders (team project)
            </Button>
            <br />
            <Button sx={{ width: 300, height: 300 }} variant="outlined" onClick={project3}>
                Plastic ecorder mobile application for CSC234/CSC691 User-Centered Mobile Application Development course and
                CSC231 Agile Software Engineering course (team project)
            </Button>
            <Button sx={{ width: 300, height: 300 }} variant="outlined" onClick={project4}>
                job search mobile application for Integrated Project ll course (team project)

            </Button>
            <Dialog
                open={open1}
                onClose={project1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">

                    <Typography>
                        E-commerce website by using ReactJS, Java(Servlet), and MySQL for CSC105 Web
                        Application Development course (individual project)
                        <br />
                        <Link underline="hover" href='https://github.com/suisuiss/csc105-project'>github.com/suisuiss/csc105-project</Link>
                        <br />
                        <Link underline="hover" href='https://github.com/suisuiss/csc105-backend'>github.com/suisuiss/csc105-backend</Link>
                    </Typography>
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>

                </DialogActions>
            </Dialog>

            <Dialog
                open={open2}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">

                    <Typography>
                        Create e-commerce website by using ReactJS, MUI, NestJS, and PostgreSQL for CSC290
                        Integrated Project l course and being one of team leaders (team project)
                        <br />
                        <Link underline="hover" href='https://github.com/CSSIT21/CShop'>ttps://github.com/CSSIT21/CShop</Link>

                    </Typography>
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>

                </DialogActions>
            </Dialog>
            <Dialog
                open={open3}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">

                    <Typography>
                        Create plastic recorder mobile application by using Flutter and Firebase, Design UX/UI, Being
                        Team manager for CSC234/CSC691 User-Centered Mobile Application Development course and
                        CSC231 Agile Software Engineering course (team project)

                        <br />
                        <Link underline="hover" href='https://github.com/suisuiss/Plastic-Recorder'>github.com/suisuiss/Plastic-Recorder</Link>

                    </Typography>
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>

                </DialogActions>
            </Dialog>
            <Dialog
                open={open4}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">

                    <Typography>
                        Create job search mobile application by using Flutter, ExpressJS, and MongoDB, Design UX/UI,
                        Being Team manager for CSC291 Integrated Project ll course (team project)

                        <br />
                        <Link underline="hover" href='https://github.com/suisuiss/jobbee'>github.com/suisuiss/jobbee</Link>

                    </Typography>
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
