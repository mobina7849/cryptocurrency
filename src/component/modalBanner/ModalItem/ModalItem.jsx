import { Grid, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useCallback } from 'react';
const ModalItem = ({coin,setInputCoin,setOpen}) => {
   const price=Math.ceil((coin?.price)*34000)
    const handleListItem=useCallback((coin)=>{
        setInputCoin({name:coin.name,icon:coin.iconUrl,price:price,number:1})
        setOpen(false)
    },[coin])
 
    return ( 
    <ListItem   component="div" disablePadding sx={{padding:1}}>
        <ListItemButton onClick={()=>handleListItem(coin)}>
           <ListItemText sx={{textAlign:'right'}} >
           <Grid container justifyContent={'space-between'} paddingLeft={5}>
            <Grid item display={'flex'}>
                <Grid item><img width={'40px'} height={'40px'} src={coin?.iconUrl}/></Grid>
                <Grid item>
                    <Typography variant='subtitle1' marginBottom={1}>{coin?.name}</Typography>
                    <Typography variant='subtitle1' color={'rgba(0, 0, 0, 0.6)'}>{coin?.symbol}</Typography>
                </Grid>
            </Grid>
            <Grid item>
                  <Typography variant='subtitle1' marginBottom={1}>{'قیمت خرید'}</Typography>
                  <Grid display={'flex'}>
                  <Typography variant='subtitle1'>{price}</Typography>
                  <Typography variant='subtitle1' color={'rgba(0, 0, 0, 0.6)'} px={1 }>{'تومان'}</Typography>

                  </Grid>
            </Grid>
           </Grid>
           </ListItemText>
       </ListItemButton>
    </ListItem>
     );
}
 
export default ModalItem;