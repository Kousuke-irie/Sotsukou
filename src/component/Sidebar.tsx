import styles from '../styles/Sidebar.module.css';
import {Drawer, Box, IconButton, List, ListItem, ListItemButton, ListItemText, Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {Link, useNavigate} from 'react-router-dom';

interface Props {
    open: boolean;
    onClose: () => void;
}

export const Sidebar = ({ open, onClose }: Props) => {
    const navigate = useNavigate();

    return (
        <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx:{width:'400px', backgroundColor:'black', color:'white', display:'flex',  justifyContent:'flex-start'} }}>
            <Box className={styles.closeButtonBox}>
                <IconButton onClick={onClose} className={styles.closeButton}>
                    <CloseIcon sx={{color: 'white', fontSize: '1.5em'}} />
                </IconButton>
            </Box>
            <List className={styles.list}>
                {[
                    { text:'Home', path:'/'},
                    { text:'Concept', path:'/concept'},
                    { text:'History', path:'/history'},
                    { text:'Cast', path:'/cast'},
                    { text:'Numbers', path:'/numbers'},
                    { text:'Time Table', path:'/timetable'},
                    { text:'Access', path:'/access'}
                ].map((item)=>(
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton component={Link} to={item.path} onClick={onClose} className={styles.button} >
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box className={styles.ticketBox}>
                <Button className={styles.ticketButton} onClick={()=>{navigate('/ticket'); onClose();}}>チケットを購入する</Button>
            </Box>
        </Drawer>
    )
};