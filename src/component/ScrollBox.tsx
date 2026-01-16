import styles from '../styles/ScrollBox.module.css';
import { List, ListItem, Box } from '@mui/material';

import item1 from '../assets/scroll_right/item1.jpg';
import item2 from '../assets/scroll_right/item2.jpg';
import item3 from '../assets/scroll_right/item3.jpg';
import item4 from '../assets/scroll_right/item4.jpg';

import item5 from '../assets/scroll_left/item1.jpg';
import item6 from '../assets/scroll_left/item2.jpg';
import item7 from '../assets/scroll_left/item3.jpg';
import item8 from '../assets/scroll_left/item4.jpg';

const images1 = [item1, item2, item3, item4];
const images2 = [item5, item6, item7, item8];


export const ScrollBox1 = () => {
    // 無限ループ用に同じ画像配列を2つ繋げる
    const doubleImages = [...images1, ...images1, ...images1, ...images1];

    return (
        <Box className={styles.container}>
            <List className={styles.list_box_right} disablePadding>
                {doubleImages.map((img, i) => (
                    <ListItem key={i} className={styles.list_item} disablePadding disableGutters>
                        <img src={img} alt={`画像${i + 1}`} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export const ScrollBox2 = () => {
    // 無限ループ用に同じ画像配列を2つ繋げる
    const doubleImages = [...images2, ...images2,...images2, ...images2];

    return (
        <Box className={styles.container}>
            <List className={styles.list_box_left} disablePadding>
                {doubleImages.map((img, i) => (
                    <ListItem key={i} className={styles.list_item} disablePadding disableGutters>
                        <img src={img} alt={`画像${i + 1}`} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};