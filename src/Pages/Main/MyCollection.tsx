import React from "react";
import classes from './my_collection.module.scss'
//import { HeaderNavBar } from "../../components/HeaderNavBar"
import bg_img from '../../assets/images/main/explore_bg.png';
import user_img from '../../assets/images/main/user_img.png';
import { ProfileSearchElem } from "../../Components/ProfileSearchElem"
import { NftItemsList } from "../../Components/NftItemsList"
import { Footer } from "../../Components/Footer";

function MyCollection(){
    return (
        <div className={classes.MyCollection}>
            <div className={classes.container}>
                <div className={classes.navbar}>
                    {/*<HeaderNavBar withBtn={false}/>*/}
                </div>
                <div className={classes.profile_bg_cont}>
                    <div className={classes.profile_img_cont}>
                        <img src={bg_img} alt="img" />
                    </div>
                    <div className={classes.user_img_block}>
                        <div className={classes.user_img}>
                            <img src={user_img} alt="user_img" />
                        </div>
                    </div>
                </div>
                <div className={classes.user_profile_info_container}>
                    <div className={classes.user_profile_info_name}>
                        <p>RoachNFT</p>
                    </div>
                    <div className={classes.user_profile_info_wallet}>
                        <p>0xb992...ccc2</p>
                    </div>
                    <div className={classes.user_profile_info_text}>
                        <p>NFT FTW</p>
                    </div>
                    <div className={classes.user_profile_info_text}>
                        <p>Joined September 2021</p>
                    </div>
                </div>
                <div className={classes.search_elem}>
                    <ProfileSearchElem/>
                </div>
                <div className={classes.items_list_container}>
                    <NftItemsList/>
                </div>
                <div className={classes.footer}>
                    <Footer/>
                </div>
            </div>
            <div className={classes.footer_bg}>

            </div>
        </div>
    )
}

export default MyCollection