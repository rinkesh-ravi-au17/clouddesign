import { FormControl, FormGroup, InputLabel, Button, Input, makeStyles, Typography } from "@material-ui/core"
import { useState } from "react"
import { addtodo } from "../service/api"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%'
    }
})
const initialValue ={
    productname:'',
    price:'',
    description:''
}


const Addproduct = ()=>{
    const [product, setProduct] =useState(initialValue)
    const {productname, price, description} = product
    const classes = useStyles()
    const history = useHistory()

    const onValueChange = (e)=>{
        console.log(e.target.value)
        setProduct({...product,[e.target.name]:e.target.value})
    }
    const addProductDetail = async()=>{
        
        await addProduct(product)
        history.push('./allp')
    }
    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Product</Typography>
            <FormControl>
                <InputLabel>Productname</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='productname' value={productname}/>
            </FormControl>
            <FormControl>
                <InputLabel>Price</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name='price'value={price}/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input  onChange={(e)=> onValueChange(e)} name='description'value={description}/>
            </FormControl>
            <Button varient ="contained"onClick={()=> addProductDetail()} color="primary">Add Product</Button>
        </FormGroup>
    )
}

export default Addproduct