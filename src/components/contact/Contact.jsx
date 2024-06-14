import React from 'react'
import Title from '../title/title'

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c39378bd-376f-4cee-9266-854cf67bd73c");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Message send Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div className="contact px-8 mt-8 max-md:px-5">
        <Title title="Contact" heading="Let's Make Somthing Awesome Together!" />
        <form onSubmit={onSubmit} className='flex flex-col'>
            <div className="name flex gap-6 mt-10 max-sm:flex-col max-sm:">
                <input type="text" name="name" className='w-[50%] max-sm:w-full font-[orish] font-thin outline-none bg-transparent py-3 border-b' id="" placeholder='Your Name*' required/>
                <input type="text" name="companyName" className='w-[50%] max-sm:w-full font-[orish] font-normal outline-none bg-transparent py-3 border-b' id="" placeholder='Company Name'/>
            </div>
            <div className="contact flex gap-6 mt-4 max-sm:flex-col">
                <input type="text" name="email" className='w-[50%] max-sm:w-full font-[orish] font-normal outline-none bg-transparent py-3 border-b' id="" placeholder='Email Address*' required/>
                <input type="number" name="phone" className='w-[50%] max-sm:w-full font-[orish] font-normal outline-none bg-transparent py-3 border-b' id="" placeholder='Phone Number*' required/>
            </div>
            <div className="message mt-4">
                <label htmlFor="message" className='text-zinc-300'>Your Few Words*</label>
                <textarea name="" className='bg-transparent border-b w-full resize-none outline-none mt-2 font-normal' id="message" rows="3" required></textarea>
            </div>
            <div className="btn flex items-center w-fit justify-center cursor-pointer mt-4 relative">
                <input type="submit" value="Send Message" className='pe-9 ps-3 py-2  cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 relative rounded-[20px]' />
                <i className="ri-send-plane-fill mt-1 ms-1 absolute right-3"></i>
            </div>
        </form>
        <span className='mt-2 pb-3'>{result}</span>
    </div>
  )
}

export default Contact