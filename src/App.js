import Header from "./components/Header";
import Cards from "./components/Cards";
import "./styles/main.scss";
import { useState } from "react";
import { jobsData } from "./data/jobsData";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const onThemeChange = () => {
    setDarkTheme(prev => !prev);
  };

  // Function to filter jobs based on criteria from Header
  const handleFilter = (filters) => {
    const { role, type, location, experience } = filters;

    const filtered = jobsData.filter(job => {
      return (
        (role === "" || job.role.includes(role)) &&
        (type === "" || job.type === type) &&
        (location === "" || job.location === location) &&
        (experience === "" || job.experience === experience)
      );
    });

    setFilteredJobs(filtered);
  };

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <Header
        onThemeChange={onThemeChange}
        darkTheme={darkTheme}
        onFilter={handleFilter}
      />
      <div>
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <Cards key={job.id} {...job} />
          ))
        ) : (
          <p style={{display:'flex',alignItems:'center',justifyContent:'center',height:'calc(100dvh - 195px)',fontSize: '32px',padding: '0 24px',textAlign: 'center'}}>
            No jobs found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
