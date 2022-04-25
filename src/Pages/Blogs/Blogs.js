import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div>
                <h2 className='text-center text-success mt-5'>Qurstion Answer</h2>
            </div>
            <div className='d-grid container p-10'>
                <MDBCard className='mr-20' style={{ maxWidth: '22rem' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Q: What Is The Difference Between Authorization And Authentication</MDBCardTitle>
                        <MDBCardText><span className='text-2xl'>Ans: </span>
                            Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Q: What other services does firebase provide other than authentication?</MDBCardTitle>
                        <MDBCardText>
                            <span className='text-2xl'>Ans: </span>
                            Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become a key component of Google’s mobile strategy. I was a Firebase enthusiastic user in the past, but my concerns about its complexity and cost led me to explore other cloud alternatives.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    );
};

export default Blogs;