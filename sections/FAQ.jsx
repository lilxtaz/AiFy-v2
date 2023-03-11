"use client"

import { Fragment, useState } from "react";
import styles from '../styles/styles'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
 
export default function FAQ() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className={`lg:px-[10vw] sm:px-[5vw] pt-32 pb-44 flex flex-wrap lg:flex-row items-center justify-between text-left relative sm:flex-col`}>
      <div className=" lg:w-1/5 sm:w-100 mb-20 sm:text-center lg:text-left flex flex-col">

          <h3 className=" text-true-gray-100 text-xl font-medium mb-6" >FAQs</h3>
          <h1 className=" 2xl:text-6xl lg:text-5xl font-medium text-text-color leading-snug">Frequently Asked Questions</h1>

      </div>
      <div className=" lg:w-3/5 min-h-full sm:w-100">
      <Fragment>
        <Accordion open={open === 1} >
          <AccordionHeader onClick={() => handleOpen(1)}>
            <p className="text-text-color hover:text-black text-2xl opacity-80"> I cannot see 'AiFy' in some applications.</p>
          </AccordionHeader>
          <AccordionBody>
            <p className=" text-text-lighter text-lg leading-relaxed">
              Some apps have disabled custom menu options, so it won't show as an instant option however you can select the text then share it to AiFy, which performs the same action. And for making that thing even quicker, we are also creating floating icons and widgets.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
              <p className="text-text-color hover:text-black text-2xl opacity-80 font-semibold"> Why are there advertisments?</p>
            </AccordionHeader>
            <AccordionBody>
              <p className=" text-text-lighter text-lg leading-relaxed">
                The OpenAI API has a pricing plan and our expanding customer base is making it hard for us to provide our services and keep up with the charges. Hence, we 
                implement advertisements to pay off the pricing plans and continue to provide you our services making them better everyday. You can remove the advertisements 
                by generating your own API key and setting it up in the 'Settings' tab of the application. Or we are currently working on pricing plans
                where you can remove the advertisements and enroll for much more premium services.
              </p>
            </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
              <p className="text-text-color hover:text-black text-2xl opacity-80"> Is there a text-to-speech option?</p>
            </AccordionHeader>
            <AccordionBody>
              <p className=" text-text-lighter text-lg leading-relaxed">
                Absolutely!<br></br> <br></br> AiFy has a TTS model implemented in it, which allows it to intelligently convert the text into a voice over enhancing the User Experience. 
                After generating the response you can tap on the 🔉 icon to let AiFy voice the text.
              </p>
            </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
              <p className="text-text-color hover:text-black text-2xl opacity-80"> Can I use my microphone instead of typing?</p>
            </AccordionHeader>
            <AccordionBody>
              <p className=" text-text-lighter text-lg leading-relaxed">
                Yes!<br></br> <br></br> AiFy can listen to the User through the microphone actively converting speech to text and processing the data.
                The generated text can be used to produce responses for further use.
                <br></br><br></br>
                NOTE: The Speech-to-Text model will be upgraded using the Whisper API in the future updates to give a better User Experience and further polish the generated texts to be more accurate.

              </p>
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)}>
              <p className="text-text-color hover:text-black text-2xl opacity-80"> My microphone is not working.</p>
            </AccordionHeader>
            <AccordionBody>
              <p className=" text-text-lighter text-lg leading-relaxed">
                There can be different reasons for it.
                Some troubleshooting methods are as follows:

                <br></br><br></br>
                
              </p>
              <ul className=" text-text-lighter text-lg leading-relaxed">

                  <li>The microphone might be disabled. You can change it by going into your device settings and allowing microphone access in the 'AiFy' application accessibility settings.</li>
                  <br></br>
                  <li>Check for updates. The TTS model is updated frequently to further reduce bugs. Try updating 'AiFy' in the Play Store.</li>
                  <br></br>
                  <li>Try disconnecting any Bluetooth devices. Due to different factors the application might be using the bluetooth device as audio input. If the bluetooth
                  device does not have a microphone, then no audio input is passed to the application.
                  </li>
              </ul>
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 6}>
          <AccordionHeader onClick={() => handleOpen(6)}>
              <p className="text-text-color hover:text-black text-2xl opacity-80"> Is my search history compromised?</p>
            </AccordionHeader>
            <AccordionBody>
              <p className=" text-text-lighter text-lg leading-relaxed">
                Never.
                <br></br><br></br>

                All the search history is stored on your device's local storage and we have no way to access or manipulate your presonal data. The search history can be deleted by clearing the cache for the 'AiFy' application.
                We have very strict data privacy regulations and we have many safeguards to avoid any collection of sensitive data.

              </p>
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 7}>
          <AccordionHeader onClick={() => handleOpen(7)}>
              <p className="text-text-color hover:text-black text-2xl opacity-80"> Is there anyway to reach out to you?</p>
            </AccordionHeader>
            <AccordionBody>
              <p className=" text-text-lighter text-lg leading-relaxed">
                
                Absolutely.

                <br></br>
                <br></br>

                You can always leave a review on Google Play Store or you can drop feedbacks @
                <br></br>
                <br></br>

                </p>
                <p className=" text-cyan-900 text-base font-normal">
                <Link href='mailto:info@textaify.com' target='_blank'>
                info@textaify.com
                </Link>
                </p>
                <p className=" text-text-lighter text-lg leading-relaxed">

                <br></br>
                Any kind of feedback or suugestion is much appreciated. Remember all the feedbacks serve as a stimuli for us to work further and make the application better with coming days.
                </p>
   
            </AccordionBody>
        </Accordion>
        
      </Fragment>

      <div className=" flex 2xl:flex-row lg:flex-col sm:flex-col pt-5 ">

        <div className="flex">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#463853" className="w-8 h-8 mr-2 mt-[0.07rem] opacity-70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>

        <h1 className="text-2xl font-semibold text-text-color leading-snug opacity-80">

          Couldn't find an answer to your question?

        </h1>
        </div>


          <Link href='mailto:info@textaify.com' target='_blank'>
            <h1 className="text-2xl font-medium text-text-color leading-snug ml-1 underline opacity-90 md:mt-0 sm:mt-[2vh]">
              Contact Us
            </h1>
          </Link>

      </div>
      </div>
    </div>
  );
}