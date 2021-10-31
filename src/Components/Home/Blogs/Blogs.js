// this component will show all blogs one by one
import './Blogs.css';
import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import icon from '../../../img/writing1.png'
const Blogs = (props) => {
    const data = props.data;
    // console.log(data);
    return (
        <>
            <Col className="gx-5 mb-5">
                <CardGroup>
                    <Card className="blogs-container shadow-sm">
                        <div className="">
                            <Card.Img variant="top" src={data.url} className="w-100 " />
                        </div>
                        {/* parent div for author icon and name  */}
                        <div className="author-container d-lg-flex align-items-center justify-content-start w-100 ">
                            {/* author name */}
                            <div className="px-2">
                                <h6 className="">{data.author}</h6>
                            </div>

                            {/* author  icon here  */}
                            <div className=" d-lg-flex align-items-center justify-content-center">
                                <img src={icon} className="author-icon" alt="icon"></img>
                            </div>

                        </div>

                        <div className=" ps-lg-3 pt-lg-3">
                            <Card.Title className="h1"><u>{data.title}</u></Card.Title>
                        </div>


                    </Card>
                </CardGroup>
            </Col>
        </>
    );
};

export default Blogs;