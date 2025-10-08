import { useState } from "react";
import Toggle from "./Toggle";

function Header({ onThemeChange, darkTheme, onFilter }) {
  const [toggle, settoggle] = useState(false);
  const [display, setDisplay] = useState(true);

  const [filters, setFilters] = useState({
    role: "",
    type: "",
    location: "",
    experience: ""
  });

  const handleOpen = () => {
    settoggle(prev => !prev);
    setDisplay(prev => !prev);
  };

  const toggleClick = () => {
    onThemeChange();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    onFilter(filters);
  };

  return (
    <section className="stickyPos">
      <div className="container">
        <header>
          <div>
            <h1>JobPortal</h1>
            {display && <input onClick={handleOpen} placeholder="Search Here.." />}
          </div>
          <Toggle onClick={toggleClick} isDark={darkTheme} />
        </header>

        {toggle && (
          <section className="filters">
            <select name="role" onChange={handleChange}>
              <option value="">Job Role</option>
              <option value="Frontend Developer">Frontend</option>
              <option value="Backend Developer">Backend</option>
              <option value="UI/UX Designer">UI/UX</option>
              <option value="Full Stack Developer">Full Stack</option>
            </select>

            <select name="type" onChange={handleChange}>
              <option value="">Job Type</option>
              <option value="Internship">Internship</option>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>

            <select name="location" onChange={handleChange}>
              <option value="">Location</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Noida">Noida</option>
              <option value="Kolkata">Kolkata</option>
            </select>

            <select name="experience" onChange={handleChange}>
              <option value="">Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="1 Year">1 Year</option>
              <option value="2 Years">2 Years</option>
              <option value="3 Years">3 Years</option>
              <option value="4 Years">4 Years</option>
              <option value="5 Years">5 Years</option>
            </select>

            <button onClick={handleSearch}>Search</button>
          </section>
        )}
      </div>
    </section>
  );
}

export default Header;
