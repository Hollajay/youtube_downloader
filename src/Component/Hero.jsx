import './hero.css';
import { MdAddLink } from 'react-icons/md';
import { FaRegCopyright } from 'react-icons/fa';
import { Toggle } from './toggle/Toggle';
import { useState, useEffect } from 'react';
import { Guide } from './guide/Guide';
import { OurService } from './ourSevices/OurService';
import axios from 'axios';

export const Hero = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [videoLink, setVideoLink] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [format, setFormat] = useState('audioandvideo');
  const [quality, setQuality] = useState('lowest');
 const Api_url=  import.meta.env.VITE_API_URL;
 const Backend_url = import.meta.env.VITE_API_BACKEND
  const handleToggle = () => {
    setIsToggled(!isToggled);
    document.body.classList.toggle('dark-theme', !isToggled);
  };

  const handleInputChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
  };

  const handleQualityChange = (e) => {
    setQuality(e.target.value);
  };

  const extractVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };


  const fetchVideoInfo = async (videoId) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${Api_url}E&part=snippet`);
      setVideoInfo(response.data.items[0].snippet);
      setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
    } catch (error) {
      console.error('Error fetching video info:', error);
    }
  };

  useEffect(() => {
    const videoId = extractVideoId(videoLink);
    if (videoId) {
      fetchVideoInfo(videoId);
    }
  }, [videoLink]);

  const handleDownloadClick = async () => {
    if (videoLink.trim() !== '') {
      try {
        const response = await axios.get(`${Backend_url}/check-download?URL=${encodeURIComponent(videoLink)}`);
        const data = response.data;

        if (data.status === true) {
          document.getElementById(
            'downloading',
          ).innerHTML = `Starting the download of ${data.title} by ${data.author}...`;

          window.location.href = `http://localhost:8000/download?URL=${encodeURIComponent(videoLink)}&downloadFormat=${format}&quality=${quality}&title=${data.title}`;
        }
      } catch (error) {
        console.error('Error downloading the video:', error);
      }
    } else {
      alert('Please enter a valid YouTube link.');
    }
  };

  return (
    <div className="container">
      <section className="navAndInput_section">
        <div className="nav_section">
          <nav>
            <div>
              <h1 className="btn-shine">BOS_DOWNLOADER</h1>
            </div>
            <Toggle onClick={handleToggle} />
          </nav>
        </div>

        <div className="content_section">
          <header>
            <h2>Online Video</h2>
            <h1>Downloader</h1>
            <p>
              Do not look below! Explore our BOS-DOWNLOADER video downloader,
              a free solution to quickly download videos or music with just one click.
            </p>
          </header>
          <section className="input_section">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input_div">
                <MdAddLink className="link_icon" />
                <input type="text" value={videoLink} onChange={handleInputChange} placeholder="Insert your YouTube video link here..." />
              </div>
              <div className="select_div">
                <select value={format} onChange={handleFormatChange}>
                  <option value="audioandvideo">Audio and Video</option>
                  <option value="audio-only">Audio Only</option>
                  <option value="video-only">Video Only</option>
                </select>
                <select value={quality} onChange={handleQualityChange}>
                  <option value="highest">High</option>
                  <option value="lowest">Low</option>
                </select>
              </div>
              <button type="button" className='button' onClick={handleDownloadClick}>Download</button>
            </form>
          </section>
        </div>
      </section>

      {videoInfo && (
        <section className="video_info">
          <h3>{videoInfo.title}</h3>
          <iframe width="560" height="315" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
          <p>{videoInfo.description}</p>
        </section>
      )}

      <div id="downloading"></div>

      <Guide />
      <OurService />

      <footer>
        <p>Copyright <FaRegCopyright /> 2024 Design by Hincas. All Rights Reserved</p>
      </footer>
    </div>
  );
};
