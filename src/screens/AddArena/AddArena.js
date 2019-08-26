import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import editimg from '../../assets/icons/edit3.png';
import plusimg from '../../assets/icons/plus.png';

class AddArena extends Component {
    render() {

        return (
            <div>

                <div class="rightcontentarea_section addofferpage">
                    <div class="right_inner_content">

                        <form class="">
                            <div class="row removemargin">


                                <ul class="formsection citydetailsform">
                                    <li>
                                        <div class="formlabeltext"> </div>

                                    </li>
                                </ul>

                                <ul class="formsection citydetailsform lisize_2">
                                    <li>
                                        <input type="text" placeholder="Arena name" class="textboxcustom " />
                                    </li>

                                </ul>
                                <ul class="formsection citydetailsform">
                                    <li>
                                        <Link to="/addsport" class="addnewlink"> Add new Sport</Link>
                                    </li>


                                </ul>

                                <ul class="formsection citydetailsform">
                                    <li>
                                        <select class="selectboxcustom">
                                            <option>Add Sport</option>
                                            <option>Fitness</option>
                                        </select>
                                    </li>
                                    <li>
                                        <input type="text" placeholder="Price" class="textboxcustom " />
                                    </li>


                                </ul>
                                <ul class="formsection citydetailsform">
                                    <li>
                                        <label for="1strd" class="bannerpage_chk"> Start date</label>
                                        <input type="date" placeholder="Start date" class="textboxcustom datepickerspan" />

                                    </li>
                                    <li>
                                        <label for="1strd" class="bannerpage_chk"> End date</label>
                                        <input type="date" placeholder="End date" class="textboxcustom datepickerspan" />
                                    </li>
                                </ul>


                                <ul class="formsection citydetailsform lisize_2 margintop">
                                    <li>
                                        <input type="text" placeholder="Counter name 1" class="textboxcustom " />
                                    </li>

                                </ul>

                                <div class="row">
                                    <div class="orange_text">
                                        Select time slot type
                                 </div>
                                </div>
                                <ul class="formsection citydetailsform choose_discount">
                                    <li>
                                        <input type="radio" class="checkbox_size" id="1strd" /> <label for="1strd" class="bannerpage_chk"> Daily</label>
                                    </li>
                                    <li>
                                        <input type="radio" class="checkbox_size" id="2ndrd" /> <label for="2ndrd" class="bannerpage_chk"> Hourly</label>
                                    </li>

                                </ul>

                                <ul class="formsection citydetailsform">
                                    <li>
                                        <input type="time" placeholder="Open time" class="textboxcustom timepickericon2" />
                                    </li>
                                    <li>
                                        <input type="time" placeholder="Close time" class="textboxcustom timepickericon2" />
                                    </li>
                                </ul>


                                <ul class="formsection citydetailsform">
                                    <li>
                                        <select class="selectboxcustom">
                                            <option>Time period</option>
                                            <option>Fitness</option>
                                        </select>
                                    </li>

                                </ul>

                                <ul class="formsection citydetailsform margintop">
                                    <li>
                                        <div class="formlabeltext">Preview</div>

                                    </li>
                                </ul>
                                <div class="table-responsive">


                                    <table class="table booknplaygeneral bannerpagelist aboutbookn">

                                        <tbody>
                                            <tr>
                                                <td> <div class="formlabeltext extrabold"> Court name 1</div></td>
                                                <td align="right"> <div> <img src={editimg} /></div></td>
                                            </tr></tbody>
                                    </table>


                                    <table class="table booknplaygeneral bannerpagelist aboutbookn">

                                        <tbody>
                                            <tr>
                                                <td>
                                                    <ul class="counterclass">
                                                        <li> <span class="colorbox1">&nbsp;</span> <i>Available</i></li>
                                                        <li><span class="colorbox2">&nbsp;</span> <i>Selected</i></li>
                                                        <li><span class="colorbox3">&nbsp;</span> <i>In process</i></li>
                                                        <li><span class="colorbox4">&nbsp;</span>  <i>Booked</i></li>
                                                    </ul>
                                                </td>
                                                <td width="200">

                                                    <ul class="counterul">
                                                        <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                        <li class="boxselect">07:00 am - 08:00 am</li>
                                                        <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                        <li class="boxselect">07:00 am - 08:00 am</li>
                                                        <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                        <li class="boxselect">07:00 am - 08:00 am</li>
                                                        <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                        <li class="boxselect">07:00 am - 08:00 am</li>
                                                    </ul>

                                                </td>

                                                <td width="200"><ul class="counterul">
                                                    <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                    <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                    <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                    <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                    <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                    <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                    <li class="boxnotselect">07:00 am - 08:00 am</li>
                                                    <li class="boxnotselect">07:00 am - 08:00 am</li>

                                                </ul></td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <ul class="formsection socialmeadi">
                                    <li>
                                        <div class="link_color event_link_details">
                                            <img class="closeicon adjustimg" src={plusimg} />
                                            <a href="javascript:void(0)" class="link_orange addsportpopup">Add new court</a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </form>




                        <div class="row removemargin buttoncenter marginb ">
                            <input type="button" value="Save" class="btn_orange marginb20" />
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default AddArena;
