import type { ProductDisplayProps } from "../../types";

export const ProductDisplay = (props: ProductDisplayProps) => {
    return ( // In stock? asks if the stock info is available, then shows it if available
        <>
            <div>Product: {props.product.name}</div> {/*This is a comment inside the html fragment*/}
            <div>Price: ${props.product.price}</div>
            <div>Description: {props.showDescription? props.product.description: 'Product description not available'}</div> 
            <div>Availability: {props.showStockStatus? (props.product.inStock?'In stock':'Not in stock'): 'Stock status not available'}</div>
        </>
    )
}

