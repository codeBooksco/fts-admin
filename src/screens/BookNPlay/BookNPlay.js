import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import editimg from '../../assets/icons/edit2.png';
import viewimg from '../../assets/icons/icon_view.png';
import deleteimg from '../../assets/icons/cross_delete.png';

class BookNPlay extends Component {
    
    constructor() {
        super();

        this.state = {
            cityName: ""
        }
    }

    render() {
        return (
            <div>

                <div class="rightcontentarea_section addofferpage">
                    <div class="right_inner_content">

                        <div class="row eventfirstdiv text-center">

                            <ul class="EventButtons">
                                <li>
                                    <a href="#" class="view_all_event">View all Arenas</a>
                                </li>
                                <li>
                                    <Link to="/addarena" class="create_an_evemnt">Create an Arena</Link>
                                </li>
                            </ul>


                        </div>

                    </div>

                    <div class="container">
                        <div class="row">
                            <ul class="formsection citydetailsform customshort">
                                <li class="offers_firstli"><span class="orange_text">Sort by:</span></li>
                                <li class="offers_otherli">
                                    <select class="selectboxcustom">
                                        <option>Select Category</option>
                                        <option>Date</option>
                                        <option>City</option>
                                        <option>Coupon</option>
                                        <option>Sport</option>
                                        <option>Offer</option>
                                    </select>
                                </li>
                                <li class="offers_otherli">
                                    <select class="selectboxcustom">
                                        <option>Select Sub Category</option>
                                        <option>Dehli</option>
                                        <option>Mumbai</option>
                                        <option>Nagpur</option>
                                        <option>Moscow</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="listingsection_citydetails">
                        <div class="table-responsive">
                            <table class="table listtable_city bannerpagelist">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Arena Name</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Sport</th>
                                        <th scope="col">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Name of the Arena</td>
                                        <td>Mumbai</td>
                                        <td>Football</td>

                                        <td align="center">
                                            <a href="javascript:void(0)" class="EditButton btn-confirm-edit"><img src={editimg} /></a>
                                            <a href="javascript:void(0)" class="ViewButton btn-confirm-view"><img src={viewimg} /></a>
                                            <a href="javascript:void(0)" class="CloseButton btn-confirm"><img src={deleteimg} /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Name of the Arena</td>
                                        <td>Mumbai</td>
                                        <td>Football</td>

                                        <td align="center">
                                            <a href="javascript:void(0)" class="EditButton btn-confirm-edit"><img src={editimg} /></a>
                                            <a href="javascript:void(0)" class="ViewButton btn-confirm-view"><img src={viewimg} /></a>
                                            <a href="javascript:void(0)" class="CloseButton btn-confirm"><img src={deleteimg} /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Name of the Arena</td>
                                        <td>Mumbai</td>
                                        <td>Football</td>

                                        <td align="center">
                                            <a href="javascript:void(0)" class="EditButton btn-confirm-edit"><img src={editimg} /></a>
                                            <a href="javascript:void(0)" class="ViewButton btn-confirm-view"><img src={viewimg} /></a>
                                            <a href="javascript:void(0)" class="CloseButton btn-confirm"><img src={deleteimg} /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Name of the Arena</td>
                                        <td>Mumbai</td>
                                        <td>Football</td>

                                        <td align="center">
                                            <a href="javascript:void(0)" class="EditButton btn-confirm-edit"><img src={editimg} /></a>
                                            <a href="javascript:void(0)" class="ViewButton btn-confirm-view"><img src={viewimg} /></a>
                                            <a href="javascript:void(0)" class="CloseButton btn-confirm"><img src={deleteimg} /></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default BookNPlay;
