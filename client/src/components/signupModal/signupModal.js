import React from "react";
import "./signupModal.css";

export const SignupModal = props => (
    <div {...props} className="modal fade" id="signUpModal" tabIndex= "-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                {props.children}
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">Cancel</span>
                </button>
            </div>
        </div>
    </div>
);

export const SignupBtn = props => (
    <button {...props}type="button" className="btn btn-primary" data-toggle="modal" data-target="#signUpModal">
        Sign Up
    </button>

)