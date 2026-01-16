import {Box,Typography, Button} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import {useState} from 'react'
import styles from './styles/App.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

// コンポーネント
import {Navbar} from './component/Navbar.tsx'
import {HomePage} from './component/HomePage'
import {ConceptPage} from "./component/ConceptPage.tsx";
import {HistoryPage} from "./component/HistoryPage"
import {CastPage} from "./component/CastPage"
import {TimeTablePage} from "./component/TimeTablePage.tsx";
import {AccessPage} from "./component/AccessPage";
import {Sidebar} from "./component/Sidebar.tsx";
import {TicketPage} from "./component/TicketPage"
import {NumbersPage} from "./component/NumbersPage"
import {NumberDec} from "./component/NumberDec.tsx";

//Mobileコンポーネント
import {mediaQuery, useMediaQuery} from "./hooks/useMediaQuery.tsx";
import {HistoryPageMobile} from "./component/HistoryPage";
import {ConceptPageMobile} from "./component/ConceptPage";
import {AccessPageMobile} from "./component/AccessPage";
import {NumberDecMobile} from "./component/NumberDec.tsx";
import {TimeTablePageMobile} from "./component/TimeTablePage";

const customTheme = createTheme({
    typography: {
        fontFamily: [
            'Shippori Mincho',
            'serif',
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&:focus': {
                        outline: 'none',
                    },
                    '&:focus-visible': {
                        outline: 'none',
                        boxShadow: 'none',
                    },
                },
            },
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:focus': {
                        outline: 'none',
                    },
                    '&:focus-visible': {
                        outline: 'none',
                        boxShadow: 'none',
                    },
                },
            },
        },
    },
});

const NumberDecWrapper = () => {
    const {id} = useParams();
    return <NumberDec id={Number(id)}/>;
}

const NumberDecMobileWrapper = () => {
    const {id} = useParams();
    return <NumberDecMobile id={Number(id)}/>;
}

function AppContent() {
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return (
            <Box className={styles.mainContent}>
                <Navbar onMenuClick={() => setSidebarOpen(true)}/>

                <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

                <Box component={"main"} sx={{mt: '64px', flexGrow: 1}}>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        {isMobile ? (
                            <>
                                <Route path="/concept" element={<ConceptPageMobile/>} />
                                <Route path="/history" element={<HistoryPageMobile />}/>
                                <Route path="/cast" element={<CastPage />}/>
                                <Route path="/timetable" element={<TimeTablePageMobile />}/>
                                <Route path="/access" element={<AccessPageMobile />}/>
                                <Route path="/ticket" element={<TicketPage/>} />
                                <Route path="/numbers" element={<NumbersPage />} />
                                <Route path="/numbers/:id" element={<NumberDecMobileWrapper />} />
                            </>
                        ) : (
                            <>
                                <Route path="/concept" element={<ConceptPage/>} />
                                <Route path="/history" element={<HistoryPage />}/>
                                <Route path="/cast" element={<CastPage />}/>
                                <Route path="/timetable" element={<TimeTablePage />}/>
                                <Route path="/access" element={<AccessPage />}/>
                                <Route path="/ticket" element={<TicketPage/>} />
                                <Route path="/numbers" element={<NumbersPage />} />
                                <Route path="/numbers/:id" element={<NumberDecWrapper />} />
                            </>
                        )}
                    </Routes>
                </Box>

                <Box sx={{bgcolor: 'rgba(100, 100, 100,0.3)', p: 2, textAlign: 'center', display: 'flex'}}>
                    <Typography sx={{color: "white"}}>© Wish 44代</Typography>
                    <Box sx={{flexGrow: 1}}/>
                    <Button startIcon={< InstagramIcon/>} className={styles.snsButton} href={"https://www.instagram.com/tudcwish/"} target={"_blank"} rel={"noopener"}></Button>
                    <Button startIcon={<YouTubeIcon />} className={styles.snsButton} href={"https://www.youtube.com/@wish8150"} target={"_blank"} rel={"noopener"}></Button>
                </Box>
            </Box>
    )

}

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
