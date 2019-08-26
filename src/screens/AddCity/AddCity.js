import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import * as firebase from 'firebase';

class AddCity extends Component {

    constructor() {
        super();

        this.state = {
            cityName: "",
            param: ""
        }
    }

    componentWillMount() {
        // debugger
        // let a = this.props.location.search;
        // console.log(a.slice(1))
        this.getData()
    }

    getData() {

        const db = firebase.firestore();
        let param = this.props.location.search.slice(1);

        if (param) {
            db.collection('cities').doc(param).get().then(res => {

                if (res.exists) {

                    this.setState({
                        cityName: res.data().name,
                        param: param
                    });

                }
            })
        }

    }

    onSubmit() {
        const { cityName } = this.state;
        const db = firebase.firestore();

        db.collection('cities').add({
            name: cityName
        }).then(() => {
            swal("added succesfully", "", "success");
            this.setState({
                cityName: ""
            })
        }).catch(err => {
            swal(err.message, "", "error");
        })

    }

    onUpdate() {

        const { cityName, param } = this.state;
        const db = firebase.firestore();

        db.collection('cities').doc(param).update({
            name: cityName
        }).then(() => {
            swal("Updated succesfully", "", "success");
        }).catch(err => {
            swal(err.message, "", "error");
        })

    }

    render() {
        return (
            <div className="rightcontentarea_section">
                <div className="row page_innermenu removemargin ">
                    <div className="toptab_section">
                        <ul className="innerpagemenu">
                            <li className="selectedmenu"><Link to="/addcity">Add City</Link></li>
                            <li><Link to="/addcategory">Add Category</Link></li>
                            <li><Link to="/addsport">Add Sport</Link></li>
                            <li><Link to="/viewcity">View All</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="right_inner_content">
                    <div className="row">
                        <div className="mastertitle">
                            Add City
                              </div>
                    </div>
                    <div className="row removemargin">
                        <form className="form-inline">
                            <ul className="formsection">
                                <li>
                                    <input type="text" placeholder="City Name" className="textboxcustom" value={this.state.cityName} onChange={(e) => this.setState({ cityName: e.target.value })} />
                                </li>
                                <li>
                                    {this.state.param ?
                                        <input type="button" value="Update City" className="btn_orange" onClick={() => this.onUpdate()} />
                                    :
                                        <input type="button" value="Add New City" className="btn_orange" onClick={() => this.onSubmit()} />
                                    }
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className="row ">
                        <ul className="categorydata">
                            {/* <li>All Sports <img src="icons/cross.png"></li>
                                 <li>Fitness <img src="icons/cross.png"></li>
                                 <li>Adventure Sport <img src="icons/cross.png"></li>
                                 <li>All Sport <img src="icons/cross.png"></li>
                                 <li>All Sports <img src="icons/cross.png"></li>
                                 <li>Fitness <img src="icons/cross.png"></li>
                                 <li>Adventure Sport <img src="icons/cross.png"></li>
                                 <li>All Sport <img src="icons/cross.png"></li>
                                 <li>All Sports <img src="icons/cross.png"></li>
                                 <li>Fitness <img src="icons/cross.png"></li>
                                 <li>Adventure Sport <img src="icons/cross.png"></li>
                                 <li>All Sport <img src="icons/cross.png"></li>
                                 <li>All Sports <img src="icons/cross.png"></li>
                                 <li>Fitness <img src="icons/cross.png"></li>
                                 <li>Adventure Sport <img src="icons/cross.png"></li>
                                 <li>All Sport <img src="icons/cross.png"></li>
                                 <li>All Sports <img src="icons/cross.png"></li>
                                 <li>Fitness <img src="icons/cross.png"></li>
                                 <li>Adventure Sport <img src="icons/cross.png"></li>
                                 <li>All Sport <img src="icons/cross.png"></li>
                                 <li>All Sports <img src="icons/cross.png"></li>
                                 <li>Fitness <img src="icons/cross.png"></li>
                                 <li>Adventure Sport <img src="icons/cross.png"></li>
                                 <li>All Sport <img src="icons/cross.png"></li> */}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddCity;