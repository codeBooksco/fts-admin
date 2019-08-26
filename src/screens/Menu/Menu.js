import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import $ from 'jquery';
import ViewCity from '../ViewCity/ViewCity';
import Footer from '../Footer/Footer';
import logoimg from '../../assets/icons/logofts.png';
import meterimg from '../../assets/icons/circle dashboard meter fuel gauge glyph.svg';
import groupimg from '../../assets/icons/Group.png';
import cityimg from '../../assets/icons/citypopup.png';
import bannerimg from '../../assets/icons/banner.png';
import quoteimg from '../../assets/icons/right-quotation-mark.png';
import coupenimg from '../../assets/icons/coupon.png';
import booknplayimg from '../../assets/icons/booknplay.png';
import trophyimg from '../../assets/icons/trophy.png';
import vectorimg from '../../assets/images/Vector.png';
import profileimg from '../../assets/images/profile-picture-circle-png-5.png';

import './Menu.css';
import AddCity from '../AddCity/AddCity';
import AddCategory from '../AddCategory/AddCategory';
import BookNPlay from '../BookNPlay/BookNPlay';
import AddArena from '../AddArena/AddArena';
import AddSport from '../AddSport/AddSport';
// import './f.js';

class Menu extends Component {

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                    <ul className="LeftMenuMobile">
                        <li className="mobilelogo">
                            <img src={logoimg} alt="FTS" />
                        </li>
                        <li>
                            <img alt="" src={meterimg} />
                            <div className="left_text">DASHBOARD</div>
                        </li>
                        <li>
                            <img alt="" src={groupimg} />
                            <div className="left_text">MASTER</div>
                        </li>
                        <li>
                            <img alt="" src={cityimg} />
                            <div className="left_text ">CITY (POP UP)</div>
                        </li>
                        <li>
                            <img alt="" src={bannerimg} />
                            <div className="left_text ">BANNERS</div>
                        </li>
                        <li>
                            <img alt="" src={quoteimg} />
                            <div className="left_text ">QUOTES</div>
                        </li>
                        <li>
                            <img alt="" src={coupenimg} />
                            <div className="left_text ">OFFERS</div>
                        </li>
                        <li>
                            <img alt="" src={booknplayimg} />
                            <div className="left_text ">BOOK N PLAY</div>
                        </li>
                        <li>
                            <img alt="" src={trophyimg} />
                            <div className="left_text ">EVENTS</div>
                        </li>
                    </ul>
                </div>
                <div className="main">
                    <div className="container maincontainer">
                        {/* <!--Top Section Start-->    */}
                        <div className="row">
                            <div className="topbar_section">
                                <div className="col">
                                    <div className="logo_section">
                                        <span onClick={() => this.openNav()} className="baronleft">&#9776;</span>
                                        <img src={logoimg} alt="FTS" className="Logo_Page" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="profile_photo_section">
                                        <img src={profileimg} alt="FTS" />
                                    </div>
                                    <div className="profile_photo_vector_section">
                                        <img src={vectorimg} alt="FTS" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Top Section End--> */}
                        <div className="middlecontainer">
                            {/* <!--Page Title Section Start-->    */}
                            <div className="row removemargin">
                                <div className="col-xl-2">&nbsp;</div>
                                <div className="col-xl-10">
                                    {/* <div className="page_title_section">City Details</div> */}
                                </div>
                            </div>
                            {/* <!--Page Title Section End-->  */}
                            <div className="row">
                                <div className="col-xl-2">
                                    <div className="leftmenu_section">
                                        <ul>
                                            <li className="firstli_leftsection">
                                                <img alt="" src={meterimg} />
                                                <div className="left_text">DASHBOARD</div>
                                            </li>
                                            <li>
                                                <img alt="" src={groupimg} />
                                                <div className="left_text ">MASTER</div>
                                            </li>
                                            <li>
                                                <img alt="" src={cityimg} />
                                                <div className="left_text selectedicontext">CITY (POP UP)</div>
                                            </li>
                                            <li>
                                                <img alt="" src={bannerimg} />
                                                <div className="left_text ">BANNERS</div>
                                            </li>
                                            <li>
                                                <img alt="" src={quoteimg} />
                                                <div className="left_text ">QUOTES</div>
                                            </li>
                                            <li>
                                                <img alt="" src={coupenimg} />
                                                <div className="left_text ">OFFERS</div>
                                            </li>
                                            <li>
                                                <img alt="" src={booknplayimg} />
                                                <div className="left_text ">BOOK N PLAY</div>
                                            </li>
                                            <li>
                                                <img alt="" src={trophyimg} />
                                                <div className="left_text ">EVENTS</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-10">
                                    <Route exact path="/" component={ViewCity} />
                                    <Route exact path="/viewcity" component={ViewCity} />
                                    <Route path="/addcity" component={AddCity} />
                                    <Route exact path="/addcategory" component={AddCategory} />
                                    <Route exact path="/addsport" component={AddSport} />
                                    <Route exact path="/booknplay" component={BookNPlay} />
                                    <Route exact path="/addarena" component={AddArena} />
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
