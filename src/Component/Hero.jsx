import './hero.css'
import { MdAddLink } from "react-icons/md";

export const Hero = () => {
  return (
   <div className="container">
   <div className="nav_section">
    <nav>
        <div><h1>BOS_DOWNLOADER</h1></div>
        <div><p>contact_us</p></div>
    </nav>
   </div>

   <div className="content_section">
    <header>
       
        <h2>online video</h2>
        <h1>Downloader</h1>
        <p>Do not look below! explore  our BOS-DOWNLOADER video downloader,
             A freee solution to quickly download videos or music with just one click</p>
    </header>
 <section className="input_section">
   <form action="">
    <div className='input_div'><MdAddLink  className='link_icon'/>  <input type="text" placeholder='Insert your youtube video link here...'/>
        </div>   
   <button>download</button>
   </form>
   </section>
 </div>


 <section className="guide_section">
    <div className='mock_image'><img src="https://img.freepik.com/free-photo/girl-blue-uniform-beret-holding-cloud-shape-thinkboard_144627-69892.jpg?t=st=1720399552~exp=1720403152~hmac=eaf7b9f2f23a42512b6e7855628245038a3987637ff3c0e3ea9b866fb0ead4eb&w=996" alt="mock up image " /></div>
    <div className="guide_lists_section">
        <h1>How to use youtube downloader</h1>
        <div>
            <div className="guide_content">
                <h3>find video</h3>
                <p>Find The Video You Want From Among The Videos Available On YouTube And Copy Its Link</p>
            </div>
            <div className="guide_content">
                <h3>paste video</h3>
                <p>Paste The Copied Link In The Desired Box And Then Wait For The System To Display The Desired Video Download Links In Different Formats And Sizes.</p>
            </div>
            <div className="guide_content">
                <h3>download video</h3>
                <p>And In The Last Step, Click On Download From The Displayed List And Download The Desired Video And Save It On Your Device.</p>
            </div>
        </div>
    </div>
 </section>

<section className="service_section">
   <h1>Why To Choose VideoMax Downloader</h1>

   <div  className="">
      <div className="service_content">
        <h3>High Quality</h3>
        <p>You Can Download All The Videos In The YouTube Library Without Losing Quality And In A Short Time.
             All Videos Can Be Downloaded In Mp4 And Even Mp3 Formats.</p>
      </div>
      <div className="service_content">
        <h3>Fast Downloading</h3>
        <p>Using X YouTube Downloader, Quickly Download Your Desired Videos From YouTube With Just
             A Few Simple Clicks Without Wasting Any Time Or Paying Extra Fees.</p>
      </div>
      <div className="service_content">
        <h3>Unlimited Download</h3>
        <p>Through This Platform, You Can Download The Videos You Want At Any Time And Without Limiting The Number Of Downloads.
             Transfer Speed Is Up To 1GB/S.</p>
      </div>
      <div className="service_content">
        <h3>Support All Devices</h3>
        <p>YouTube Downloader X Is A Website-Based And Online Platform That You Can Use Any Operating System,
             Including Windows, Linux, iPhone, And Android.</p>
      </div>

   </div>

</section>
   </div>
  )
}
