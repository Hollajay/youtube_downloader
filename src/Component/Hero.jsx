import './hero.css';
import { MdAddLink } from 'react-icons/md';
import { FaRegCopyright } from 'react-icons/fa';

import { Toggle } from './toggle/Toggle';
import { useState } from 'react';
import { Guide } from './guide/Guide';
import { OurService } from './ourSevices/OurService';

export const Hero = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    document.body.classList.toggle('dark-theme', !isToggled);
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
            <h2>online video</h2>
            <h1>Downloader</h1>
            <p >
              Do not look below! Explore our BOS-DOWNLOADER video downloader,
              a free solution to quickly download videos or music with just one click.
            </p>
          </header>
          <section className="input_section">
            <form>
              <div className="input_div">
                <MdAddLink className="link_icon" />
                <input type="text" placeholder="Insert your YouTube video link here..." />
              </div>
              <button type="button" className='button'>Download</button>
            </form>
          </section>
        </div>
      </section>
<Guide/>
<OurService/>
      
    

      <footer>
        <p>Copyright <FaRegCopyright /> 2024 Design by Hincas. All Rights Reserved</p>
      </footer>
    </div>
  );
};
