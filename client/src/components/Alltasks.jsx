import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from "@material-ui/core"
import { useEffect, useState } from "react"
import { getProducts } from "../Service/Api"
import { Link } from "react-router-dom"

const useStyle = makeStyles({
    table :{
        width:'90%',
        margin:'50px 0 0 50px',
    },
    thead:{
        '& > *':{
            background :'#000000',
            color:'#FFFFFF',
            fontsize:20
        }
    },
    row:{
        '& > *':{
            fontsize:20
        }
    }
})
const AllProducts = ()=>{

    const [products, setProducts] = useState([])
    const classes = useStyle()

    useEffect(()=>{
        getAllProducts()
    },[])

    const getAllProducts = async()=>{
        const response = await getProducts()
        console.log(response.data);
        setProducts(response.data)
}
    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Productname</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    products.map(product =>(
                        <TableRow  className={classes.row}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.productname}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell>
                                <Button varient="contained" color="primary"component = {Link} to={`/edit/${product.id}`}>edit</Button>
                                <Button varient ="contained"color ="secondary">delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllProducts