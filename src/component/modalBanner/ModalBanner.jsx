import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton, List } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import ModalItem from './ModalItem/ModalItem';
import { CoinContext } from '../../Context/CoinProvider';
import Search from '../Search/Search';

const ModalBanner = ({open,setOpen,setInputCoin,setPrice}) => {
   const {coins}=useContext(CoinContext);
    const handleClose = () => setOpen(false);
    const [search,setSearch] = useState('')
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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
            <Grid container={true} >
              <Grid item  display={'flex'} alignItems={'center'} justifyContent={'space-between'} xs={12} marginBottom={1}>
                <Grid >
                  <Typography variant='h2' >{"قیمت ارز"}</Typography>
                </Grid>
                <Grid >
                  <IconButton onClick={handleClose} >
                    <CloseIcon sx={{ color: 'black' }}/>
                  </IconButton>
                </Grid>
              </Grid>
              <Search setSearch={setSearch} />
              <Grid item xs={12} marginTop={2}>
                <Grid sx={{maxHeight:'400px',height:'100%',overflowY:'auto'}}>
                  <List>
                    {
                      coins?.filter(item=>(item.name.toLowerCase().includes(search))).map((item)=>(
                      <Grid key={item.uuid}>
                        <ModalItem coin={item} setInputCoin={setInputCoin} setOpen={setOpen} setPrice={setPrice} key={item.uuid}/>
                        <Divider variant="middle" />
                      </Grid>
                      ))}
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
