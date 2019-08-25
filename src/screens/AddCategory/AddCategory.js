import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import * as firebase from 'firebase';

class AddCategory extends Component {

    constructor() {
        super();

        this.state = {
            categoryName: ""
        }
    }

    onSubmit() {
        const { categoryName } = this.state;
        const db = firebase.firestore();

        db.collection('categories').add({
            name: categoryName
        }).then(() => {
            swal("added succesfully", "", "success");
            this.setState({
                categoryName: ""
            })
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
                            <li><Link to="/addcity">Add City</Link></li>
                            <li className="selectedmenu"><Link to="/addcategory">Add Category</Link></li>
                            <li><Link to="/addsport">Add Sport</Link></li>
                            <li><Link to="/viewcity">View All</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="right_inner_content">
                    <div className="row">
                        <div className="mastertitle">
                            Add Category
                              </div>
                    </div>
                    <div className="row removemargin">
                        <form className="form-inline">
                            <ul className="formsection">
                                <li>
                                    <input type="text" placeholder="Category Name" className="textboxcustom" onChange={(e) => this.setState({ categoryName: e.target.value })} />
                                </li>
                                <li>
                                    <input type="button" value="Add New Category" className="btn_orange" onClick={() => this.onSubmit()} />
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

export default AddCategory;