"use client"

import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './CustomForm';

const MailchimpFormContainer = props => {

    const postUrl = "https://textaify.us12.list-manage.com/subscribe/post?u=9e972af2cdab80e444e72a34e&id=dd6c029aa5";


    return (
        <div className="mc__form-container">
            <MailchimpSubscribe 

                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}

            />
        </div>
    );
};

export default MailchimpFormContainer;