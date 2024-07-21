import { LuCopyPlus } from 'react-icons/lu';
import { RiFileDownloadLine } from 'react-icons/ri';
import { AiOutlineFileDone } from 'react-icons/ai';
import './guide.css'

export const Guide = () => {
  return (
    <section className="guide_section">
    <h1>How it works</h1>
    <div className="guide_icon_div">
      <LuCopyPlus className="addIcon" />
      <hr />
      <RiFileDownloadLine className="downloadIcon" />
      <hr />
      <AiOutlineFileDone className="saveIcon" />
    </div>

    <div className="guide_text_div">
      <div className="guide_text_content">
        <h3>Copy</h3>
        <p>
          To get the link for a YouTube video, select the Share option beneath the video and copy the video link.
        </p>
      </div>
      <div className="guide_text_content">
        <h3>Paste & Download</h3>
        <p>
          Click or tap the paste button to insert the YouTube video link that you copied in the previous step. Then, click or tap the Download button below.
        </p>
      </div>
      <div className="guide_text_content">
        <h3>Save Video in MP4 Format</h3>
        <p>
          Choose your desired format and resolution from the options provided, then save the YouTube video in MP4 format to your device.
        </p>
      </div>
    </div>
  </section>

  )
}
