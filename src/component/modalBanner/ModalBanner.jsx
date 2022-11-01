import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton, List } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import ModalItem from './ModalItem/ModalItem';

const ModalBanner = ({open,setOpen}) => {
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
       // width: 400,
        width: '100%',
        maxWidth: 520,
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 24,
        height: 680,
        maxHeight:'90%',
        p: 4,
      };
    return ( 
    <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box  sx={style}>
            <Grid container  >
              <Grid item conatainer display={'flex'} alignItems={'center'} justifyContent={'space-between'} xs={12} marginBottom={1}>
                <Grid item>
                  <Typography variant='h2' >{"قیمت ارز"}</Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={handleClose} >
                    <CloseIcon sx={{ color: 'black' }}/>
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item  sx={{border:'1px solid #727272 ',borderRadius:'10px'}} xs={12}>
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
             <SearchIcon />
             </IconButton>
              <InputBase sx={{ ml: 1, flex: 1 }}
               placeholder="جستجو"
               inputProps={{ 'aria-label': 'search google maps' }}
                 />
              </Grid>
              
              <Grid item xs={12} marginTop={2}>
                <Grid sx={{maxHeight:'400px',height:'100%',overflowY:'auto'}}>
                  <List>
                    {
                      [1,2,3,4,5,6,7,8].map(i=>(
                        <>
                        <ModalItem/>
                        <Divider variant="middle" />
                        </>
                        
                      ))
                    }
                  </List>

                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
     );
}
 
export default ModalBanner;
