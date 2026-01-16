import {AppBar, Toolbar, Typography, Button, Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import {mediaQuery,useMediaQuery} from "../hooks/useMediaQuery.tsx";

export const Navbar = ({onMenuClick}:{onMenuClick:()=>void}) => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return (
        <AppBar position="fixed" elevation={3} sx={{backgroundColor: 'rgba(10,10,10,0.5)'}}>
            <Toolbar sx={{gap: 6}}>
                <Box sx={{maxHeight:'4em', display:'flex', alignItems: 'center', gap:1}}>
                    <Button onClick={()=>{navigate('/'); window.scrollTo(0, 0);}} sx={{textTransform:'none'}} >
                        {isMobile ? (
                            <Typography variant="h6" noWrap component="div" color="white" sx={{fontFamily:"'Shippori Mincho', serif"}}>
                                <span style={{ fontFamily: "'Tangerine', cursive", fontSize: '1.5em' }}>Vivace</span> 〜44代卒業公演〜
                            </Typography>
                        ) : (
                            <Typography variant="h6" noWrap component="div" color="white" sx={{fontFamily:"'Shippori Mincho', serif"}}>
                                <span style={{ fontFamily: "'Tangerine', cursive", fontSize: '1.5em' }}>Vivace</span> 〜44代卒業公演〜
                            </Typography>
                        )}
                    </Button>
                </Box>

                <Box sx={{flexGrow: 1}}/>
                {!isMobile && (
                    <Button onClick={()=>navigate('/ticket')} sx={{bgcolor: 'rgba(255,255,255,0.2)', color:'white', minWidth:'120px', transition:'0.3s','&:hover':{transform:'scale(1.1)'}}}>チケットを購入</Button>
                )}
                <Box sx={{display: 'flex', gap: 2}}>
                    <IconButton onClick={onMenuClick} sx={{ transition:'0.3s','&:hover':{transform:'scale(1.2)'}}} >
                        <MenuIcon sx={{color: 'white', fontSize: '1.5em'}}/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
};