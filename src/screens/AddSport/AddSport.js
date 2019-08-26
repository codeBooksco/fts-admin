import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import * as firebase from 'firebase';

class AddSport extends Component {

    constructor() {
        super();

        this.state = {
            sportName: "",
            category: "",
            categories: []
        }
    }

    componentWillMount() {
        this.onLoad()
    }

    onLoad() {
        const db = firebase.firestore();

        db.collection('categories').get().then(res => {
            if (res.docs.length) {
                res.docs.forEach(category => {
                    this.setState({
                        categories: [...this.state.categories, category.data().name]
                    })
                })
            }
        })

    }

    onSubmit() {
        const { sportName, category } = this.state;
        const db = firebase.firestore();
        const storageRef = firebase.storage().ref();
        let img = document.getElementById('image').files[0];


        var fileName = 'images/sport_' + Math.random().toString().substring(2, 6) + '.jpg'
        var ImageRef = storageRef.child(fileName);
        let t = this;

        if (sportName && img && category) {

            ImageRef.put(img).then(function (snap) {
                ImageRef.getDownloadURL().then(function (url) {

                    db.collection('sports').add({
                        name: sportName.toLowerCase(),
                        img: url,
                        category
                    }).then(() => {
                        swal("Added succesfully", "", "success");
                        t.setState({
                            sportName: ""
                        })
                    }).catch(err => {
                        swal(err.message, "", "error");
                    })

                }).catch(err => {
                    swal(err.message, "", "error");
                });

            });

        } else {
            swal("Fill all the fields", "", "error");
        }



    }

    render() {
        return (
            <div>

                <div class="rightcontentarea_section">
                    <div class="row page_innermenu removemargin ">
                        <div class="toptab_section">
                            <ul class="innerpagemenu">
                                <li><Link to="/addcity">Add City</Link></li>
                                <li><Link to="/addcategory">Add Category</Link></li>
                                <li className="selectedmenu"><Link to="/addsport">Add Sport</Link></li>
                                <li><Link to="/viewcity">View All</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="right_inner_content">
                        <div class="row">
                            <div class="mastertitle">
                                Add Sport
                              </div>
                        </div>
                        <div class="row removemargin">
                            <form class="form-inline">
                                <ul class="formsection">
                                    <li>
                                        <input type="text" placeholder="Sport Name" class="textboxcustom" value={this.state.sportName} onChange={(e) => this.setState({ sportName: e.target.value })} />
                                    </li>
                                    <li>
                                        <select class="selectboxcustom" onChange={e => this.setState({ category: e.target.value })}>
                                            <option value="">Select Category</option>
                                            {this.state.categories.length && this.state.categories.map(cat =>
                                                <option>{cat}</option>
                                            )}
                                        </select>
                                    </li>
                                    <li>
                                        <input type="file" placeholder="Sport Name" class="fileboxcustom " id="image" />
                                    </li>
                                    <li>
                                        <input type="button" value="Add New Sport" class="btn_orange" onClick={() => this.onSubmit()} />
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div class="row ">
                            <ul class="categorydata">
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
                                 <li>All Sport <img src="icons/cross.png"></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default AddSport;
