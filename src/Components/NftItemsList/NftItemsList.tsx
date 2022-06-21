import React from "react";
import classes from './nft_items_list.module.scss'
import { nft_items } from "../../config/nft_items";
import { NftItem } from "../NftItem";
import {useSelector} from "react-redux";

function NftItemsList(){
    let nfts = useSelector((state:any) => state.itemsListReducer.nftItems)
    return (        
        <div className={classes.NftItemsList}>
            {
                typeof nfts !== 'undefined' ?    
                nfts.slice(4).map((elem:any, index:number)=>{
                    return <div className={ index + 1 % 4 === 0 ? ` ${classes.nftItemList} ${classes.margin}` : `${classes.nftItemList}`}>
                        <NftItem img={elem.img} title={elem.title} text={elem.text} span_text={elem.span_text} likes_amount={elem.likes_amount} itemId={index}/>
                    </div> 
                })
                : null
            }
        </div>
    )
}

export default NftItemsList