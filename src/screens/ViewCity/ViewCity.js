import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import cricketimg from '../../assets/images/cricket (1).png';
import bicycleimg from '../../assets/images/bicycle.png';

class ViewCity extends Component {

    constructor() {
        super();

        this.state = {
            cities: []
        }
    }

    componentWillMount() {
        this.getData();
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    getData() {

        const db = firebase.firestore();

        db.collection('cities').get().then(res => {
            if (res.docs.length) {

                res.docs.forEach(city => {

                    console.log(city.data().name)
                    var a = { id: city.id, name: city.data().name }
                    this.setState({
                        cities: [...this.state.cities, a]
                    });

                })

            }
        })

    }


    render() {
        return (
            <div className="rightcontentarea_section">
                <div className="right_inner_content">
                    <div className="row">
                        <div className="mastertitle">
                            City
                              </div>
                    </div>
                    <form className="form-inline">
                        <div className="row removemargin">
                            <ul className="formsection citydetailsform">
                                <li>
                                    <div className="formlabeltext">Select City</div>
                                    <select className="selectboxcustom">
                                        <option>Mumbai</option>
                                    </select>
                                </li>
                                <li>
                                    <Link to="/addcity" className="BoldTextcolor">Add New City</Link>
                                </li>
                            </ul>
                            <ul className="formsection citydetailsform">
                                <li>
                                    <div className="formlabeltext">Select Category</div>
                                    <select className="selectboxcustom">
                                        <option>Fitness</option>
                                    </select>
                                </li>
                                <li>
                                    <Link to="/addcategory" className="BoldTextcolor">Add New Category</Link>
                                </li>
                            </ul>
                            <ul className="formsection citydetailsform">
                                <li>
                                    <div className="formlabeltext">Select Sport</div>
                                </li>
                                <li>
                                    <a href="" className="BoldTextcolor">&nbsp;</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row removemargin">
                            <ul className="citydetails_ul">
                                <li>
                                    <div className="">
                                        <img alt="" src={cricketimg} />
                                        <div className="listtit">Football</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="">
                                        <img alt="" src={cricketimg} />
                                        <div className="listtit">Football</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="">
                                        <img alt="" src={bicycleimg} />
                                        <div className="listtit">Cycle</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="">
                                        <img alt="" src={cricketimg} />
                                        <div className="listtit">Football</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="">
                                        <img alt="" src={bicycleimg} />
                                        <div className="listtit">Cycle</div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="formsection citydetailsform">
                                <li>
                                    <Link to="/addsport" className="BoldTextcolor">Add New Sport</Link>
                                </li>
                                <li>
                                    <a href="" className="BoldTextcolor">&nbsp;</a>
                                </li>
                            </ul>
                            <ul className="formsection citydetailsform">
                                <li>
                                    <div className="row removemargin">
                                        <Link to="/addsport" className="BoldTextcolor"><input type="button" value="Add" className="btn_orange" /></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
                <div className="space_citydetails">
                    &nbsp;
                        </div>
                <div className="listingsection_citydetails">
                    <div className="table-responsive">
                        <table className="table listtable_city">
                            <thead>
                                <tr align="center">
                                    <th scope="col">No</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Sport</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cities.length ? this.state.cities.map((city, index) =>
                                    <tr kry={index}>
                                        <td>{index + 1}</td>
                                        <td>{city.name}</td>
                                        <td>Winter Sports</td>
                                        <td>
                                            <div className="extpadd">
                                                <ul className="citydetailstable_ul">
                                                    <li className="btn-confirm-sport">Youga <img alt="" className="closeicon" src="icons/cross_citydetails.png" /></li>
                                                    <li>Youga </li>
                                                    <li className="btn-confirm-sport">Adventure Sport <img alt="" className="closeicon" src="icons/cross_citydetails.png" /></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td align="center">
                                            <Link to={"/addcity?" + city.id} className="Edit_blank">Edit</Link>
                                        </td>
                                    </tr>
                                )
                                    :
                                    <div>No Cities</div>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* </form> */}
            </div>
        );
    }
}

export default ViewCity;