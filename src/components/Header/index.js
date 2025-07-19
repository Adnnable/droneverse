// // components/Header.js
// import React, { useState } from 'react';
// import styles from './Header.module.scss';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     Menu,
//     MenuItem,
//     Box,
//     Grid2,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Image from 'next/image';

// const menuItems = ['About us', 'Training', 'Defence', 'Products & services'];

// const Header = () => {
//     const [anchorEls, setAnchorEls] = useState({});

//     const handleMenuClick = (event, key) => {
//         setAnchorEls((prev) => ({ ...prev, [key]: event.currentTarget }));
//     };

//     const handleMenuClose = (key) => {
//         setAnchorEls((prev) => ({ ...prev, [key]: null }));
//     };

//     return (
//         <AppBar position="sticky" className={styles.header}>
//             <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
//                 {/* Logo */}
//                 <Grid2 container spacing={2} sx={{ width: '100%' }}>
//                     <Grid2 size={3}>
//                         <Box display="flex" alignItems="center" gap={3} sx={{ height: '100%' }}>
//                             <Image className={styles.logo} src={'/assets/logo/black-logo.svg'} alt='Droneverse Logo' width={0} height={0} />
//                         </Box>
//                     </Grid2>
//                     <Grid2 size={9}>
//                         {/* Navigation Menu */}
//                         <Box display="flex" alignItems="center" justifyContent={"flex-end"} gap={2} sx={{ height: '100%' }}>
//                             {menuItems.map((item) => (
//                                 <Box key={item}>
//                                     <Button
//                                         onClick={(e) => handleMenuClick(e, item)}
//                                         endIcon={<ExpandMoreIcon />}
//                                         className={styles.menuItem}
//                                     >
//                                         {item}
//                                     </Button>
//                                     <Menu
//                                         anchorEl={anchorEls[item]}
//                                         open={Boolean(anchorEls[item])}
//                                         onClose={() => handleMenuClose(item)}
//                                     >
//                                         <MenuItem onClick={() => handleMenuClose(item)}>Option 1</MenuItem>
//                                         <MenuItem onClick={() => handleMenuClose(item)}>Option 2</MenuItem>
//                                     </Menu>
//                                 </Box>
//                             ))}
//                             <Button
//                                 className={styles.menuItem}
//                             >
//                                 Career
//                             </Button>
//                             <Button
//                                 className={styles.menuItem}
//                             >
//                                 Contact us
//                             </Button>
//                             {/* Enroll Button */}
//                             <Button
//                                 variant="contained"
//                                 sx={{
//                                     backgroundColor: '#FFC107',
//                                     color: '#000',
//                                     fontWeight: 600,
//                                     textTransform: 'none',
//                                     '&:hover': {
//                                         backgroundColor: '#ffb300',
//                                     },
//                                 }}
//                             >
//                                 Enroll now
//                             </Button>
//                         </Box>
//                     </Grid2>
//                 </Grid2>



//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Header;



import React, { useState } from 'react';
import styles from './Header.module.scss'; // SCSS compiled to CSS Module
import Image from 'next/image'; // Assuming Next.js
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const menuItems = ['About us', 'Training', 'Defence', 'Products & services']; // example
  const [anchorEls, setAnchorEls] = useState({});

  const handleMenuClick = (e, item) => {
    setAnchorEls((prev) => ({ ...prev, [item]: e.currentTarget }));
  };

  const handleMenuClose = (item) => {
    setAnchorEls((prev) => ({ ...prev, [item]: null }));
  };

  return (
    <header className={styles.header}>
      <div className={styles.toolbar}>
        <div className={styles.left}>
          <Image
            className={styles.logo}
            src="/assets/logo/black-logo.svg"
            alt="Droneverse Logo"
            width={120}
            height={40}
          />
        </div>
        <div className={styles.right}>
          {menuItems.map((item) => (
            <div key={item} className={styles.menuBox}>
              <button onClick={(e) => handleMenuClick(e, item)} className={styles.menuItem}>
                {item} <span className={styles.expandIcon}><IoIosArrowDown size={15}/></span>
              </button>
              {anchorEls[item] && (
                <div className={styles.dropdown}>
                  <div onClick={() => handleMenuClose(item)} className={styles.menuOption}>Option 1</div>
                  <div onClick={() => handleMenuClose(item)} className={styles.menuOption}>Option 2</div>
                </div>
              )}
            </div>
          ))}
          <button className={styles.menuItem}>Career</button>
          <button className={styles.menuItem}>Contact us</button>
          <button className={styles.enrollButton}>Enroll now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
