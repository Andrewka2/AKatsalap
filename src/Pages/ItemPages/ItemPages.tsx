import React from "react"
import classes from './item_pages.module.scss'
//import { HeaderNavBar } from "../../components/HeaderNavBar"
import { Footer } from "../../Components/Footer"
import img_item from '../../assets/images/itemPages/img_item.png'
import { Dots } from "../../UI/Svg"
import { FullHeart } from "../../UI/Svg"
import icon_1 from '../../assets/images/itemPages/icon_1.png'
import icon_2 from '../../assets/images/itemPages/icon_2.png'
import icon_3 from '../../assets/images/itemPages/icon_3.png'
//import { Button } from "../../components/Button"
//import { NftItemBtn } from "../../components/NftItemBtn"
import { useSelector } from "react-redux"
import { Exit } from "../../UI/Svg"
import {useParams} from "react-router-dom"

function ItemPages() {
    let nfts = useSelector((state:any) => state.itemsListReducer.nftItems)
    let {id} = useParams()
    let item =  nfts.slice(4).find((elem:any, index:number) => index === Number(id) )
    console.log(item)
    return (
        <div className={classes.ItemPages}>
            <div className={classes.container}>
                <div className={classes.header_container}>
                    <div className={classes.navbar}>
                       { /*<HeaderNavBar withBtn={true} />*/}
                    </div>
                </div>
                <div className={classes.content}>
                    <div className={classes.item_page_img_wrapper}>
                        <div className={classes.item_page_img_block}>
                            <div className={classes.item_page_img_container}>
                                <img src={require(`../../assets/images/nftItemsImgs/${item.img}.png`)} alt="img_item" />
                            </div>
                        </div>
                        <div className={classes.learn_more_btn}>
                            <div className={classes.learn_more_btn_container}>
                                <div className={classes.learn_more_text}>
                                    <p>We use </p>
                                </div>
                                <div className={classes.coockie}>
                                    🍪
                                </div>
                                <div className={classes.learn_more_text}>
                                   <p><span className={classes.learn}> Learn more</span></p>
                                </div>
                                <div className={classes.exit_btn}>
                                    <Exit/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.item_page_info_block}>
                        <div className={classes.item_page_info_block_header}>
                            <div className={classes.header_title}>
                                <p>{item.title}</p>
                            </div>
                            <div className={classes.header_btns}>
                                <div className={classes.heart}>
                                    <p><FullHeart /></p>

                                </div>
                                <div className={classes.dots}>
                                    <p><Dots /></p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.subtitle}>
                            <p>
                                Auction · Highest bid <span>0.003 wETH</span>
                            </p>
                        </div>
                        <div className={classes.text}>
                            <p>
                                After purchase owner will be eligible for purchasing unique physical skateboard.
                            </p>
                        </div>
                        <div className={classes.content_items}>
                            <div className={classes.content_item}>
                                <div className={classes.content_item_img}>
                                    <img src={icon_1} alt="icon_1" />
                                </div>
                                <div className={classes.content_item_text}>
                                    <div className={classes.content_item_text_title}>
                                        <p>Creator <span>20% royalties</span></p>
                                    </div>
                                    <div className={classes.content_item_text_subtitle}>
                                        <p>SOTA</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${classes.content_item} ${classes.content_item_second}`}>
                                <div className={classes.content_item_img}>
                                    <img src={icon_2} alt="icon_2" />
                                </div>
                                <div className={classes.content_item_text}>
                                    <div className={classes.content_item_text_title}>
                                        <p>Collection</p>
                                    </div>
                                    <div className={classes.content_item_text_subtitle}>
                                        <p>SOTA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.search_items}>
                            <div className={classes.search_item}>
                                <label htmlFor="details">
                                    <input defaultChecked={true} id="details" name="choise_list" type="radio" />
                                    <p>Details</p>
                                </label>
                            </div>
                            <div className={classes.search_item}>
                                <label htmlFor="bids">
                                    <input id="bids" name="choise_list" type="radio" />
                                    <p>Bids</p>
                                </label>
                            </div>
                            <div className={classes.search_item}>
                                <label htmlFor="history">
                                    <input id="history" name="choise_list" type="radio" />
                                    <p>History</p>
                                </label>
                            </div>
                        </div>
                        <div className={classes.content_items}>
                            <div className={classes.content_item}>
                                <div className={classes.content_item_img}>
                                    <img src={icon_1} alt="icon_1" />
                                </div>
                                <div className={classes.content_item_text}>
                                    <div className={classes.content_item_text_title}>
                                        <p>Creator</p>
                                    </div>
                                    <div className={classes.content_item_text_subtitle}>
                                        <p>SOTA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.content_items}>
                            <div className={`${classes.content_item} ${classes.content_item_width}`}>
                                <div className={classes.content_item_img}>
                                    <img src={icon_3} alt="icon_3" />
                                </div>
                                <div className={classes.content_item_text}>
                                    <div className={classes.content_item_text_title}>
                                        <p><span>Highest bid by</span> Filmbyfred</p>
                                    </div>
                                    <div className={classes.content_item_text_subtitle}>
                                        <p>0.003 WETH <span>$10 for 1 edition</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.btns_cont}>
                            <div className={classes.place_bit}>
                              {/*<Button text={"Place a bid"} />*/ }  
                            </div>
                            <div className={classes.share_btn}>
                                {/*<NftItemBtn text={"Share"} />*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.footer}>
                    <Footer />
                </div>
            </div>
            <div className={classes.footer_bg}>

            </div>
        </div>
    )
}

export default ItemPages