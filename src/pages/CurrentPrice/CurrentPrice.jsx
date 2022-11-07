import { Container, Grid, Paper } from "@mui/material";
import TablePrice from "../../component/Table/TablePrice";


const CurrentPrice = () => {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${"../../assets/images/backgroundPrice.png"})`
        }
    };

    return ( 
        <Paper style={styles.paperContainer}>
            <Container>
                <TablePrice/>
            </Container>
        </Paper>
     );
}
 
export default CurrentPrice;