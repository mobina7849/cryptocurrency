import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
const ModalItem = () => {
    return ( 
    <ListItem   component="div" disablePadding sx={{padding:1}}>
        <ListItemButton>
           <ListItemText sx={{textAlign:'right'}}>{"بیت کوین"}</ListItemText>
       </ListItemButton>
    </ListItem>
     );
}
 
export default ModalItem;