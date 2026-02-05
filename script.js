// ============================================
// CENTRALIZED COLOR SYSTEM - EASY TO MODIFY
// ============================================

const ColorSystem = {
  // Social Media Brand Colors
  social: {
    'GitHub': '#50514F',
    'Youtube': '#FF0000',
    'LinkedIn': '#0077B5',
    'Twitter': '#1DA1F2',
    'Instagram': '#E4405F',
    'Website': '#70C1B3',
    'Email': '#FFD166'
  },
  
  // Hobby Card Colors
  hobbies: {
    first: '#FF7F50',     // Coral orange (accent)
    second: '#70C1B3',    // Teal (secondary)
    third: '#247BA0'      // Blue (primary)
  },
  
  // Hobby Icon Background Gradients
  hobbyGradients: {
    first: 'linear-gradient(135deg, #FF7F50 0%, #FFA07A 100%)',
    second: 'linear-gradient(135deg, #70C1B3 0%, #9FD9CE 100%)',
    third: 'linear-gradient(135deg, #247BA0 0%, #5DA8D0 100%)'
  },
  
  // Hobby Sayings
  hobbySayings: ['Fully Recommended.', 'Never Ending', 'Always Rewarding'],
  
  // Topic Card Colors
  topicGradients: [
    'linear-gradient(135deg, #247BA0 0%, #5DA8D0 100%)',
    'linear-gradient(135deg, #FF7F50 0%, #FFA07A 100%)',
    'linear-gradient(135deg, #70C1B3 0%, #9FD9CE 100%)'
  ]
};

// ============================================
// MAIN SCRIPT
// ============================================

// Timeline State
let currentJobIndex = 0;
let isDragging = false;

// Safe data access helper
function getSafe(data, path, defaultValue = '') {
  return path.split('.').reduce((obj, key) => 
    obj && obj[key] !== undefined ? obj[key] : defaultValue, data);
}

// Initialize AOS
AOS.init({
  once: true,
  duration: 600,
  easing: 'ease-out-cubic',
  offset: 100
});

// Set current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Search functionality
const projectSearch = document.getElementById('projectSearch');

projectSearch.addEventListener('input', function(e) {
  const value = e.target.value;
  
  // Only search when we have exactly 4 digits
  if (/^\d{4}$/.test(value)) {
    // Visual feedback
    projectSearch.classList.add('searching');
    projectSearch.style.borderColor = '#247BA0'; // primary color
    
    // Construct the path to the project
    const projectPath = `Side projects/${value}.html`;
    
    // Check if file exists first
    fetch(projectPath, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // Add a small delay for visual feedback
          setTimeout(() => {
            window.location.href = projectPath;
          }, 300);
        } else {
          // File not found - show error
          projectSearch.classList.remove('searching');
          projectSearch.classList.add('error');
          projectSearch.style.borderColor = '#FF7F50'; // accent color
          projectSearch.placeholder = `No project found for ${value}`;
          
          setTimeout(() => {
            projectSearch.classList.remove('error');
            projectSearch.style.borderColor = '';
            projectSearch.value = '';
            projectSearch.placeholder = 'Enter 4-digit year (e.g., 2023)';
          }, 2000);
        }
      })
      .catch(() => {
        // Network error or CORS issue - use fallback
        console.log(`Attempting to navigate to: ${projectPath}`);
        setTimeout(() => {
          window.location.href = projectPath;
        }, 300);
      });
  }
});

projectSearch.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const value = e.target.value;
    
    // If less than 4 digits but some digits entered
    if (/^\d{1,3}$/.test(value)) {
      // Clear the input
      e.target.value = '';
    }
  }
});

// Populate the page with data
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Basic info with fallback
    document.getElementById('heroName').textContent = 
      getSafe(portfolioData, 'name', 'William Hunt');
    document.getElementById('jobDescription').textContent = 
      getSafe(portfolioData, 'jobDescription', 'Living Life 8 Hours At A Time');
    
    // Create Timeline
    createTimeline();
    
    // Update job info
    updateJobInfo();
    
    // Projects - Direct links to project folders
    const projectsContainer = document.getElementById('projectsContainer');
    const works = getSafe(portfolioData, 'works', []);
    
    works.forEach((work, index) => {
      const projectDiv = document.createElement('div');
      projectDiv.setAttribute('data-aos', 'fade-up');
      projectDiv.setAttribute('data-aos-delay', (index * 100).toString());
      
      projectDiv.innerHTML = `
        <div class="flat-card project-card">
          <div class="project-content">
            <div class="project-header">
              <div class="project-icon">
                <i class="mdi mdi-code-braces"></i>
              </div>
              <div>
                <h3 class="project-title">${getSafe(work, 'name', 'Project')}</h3>
                <p class="project-description">${getSafe(work, 'description', 'A personal project')}</p>
              </div>
            </div>
            <div class="project-footer">
              <span class="project-link">
                <i class="mdi mdi-arrow-right"></i>
                View Project
              </span>
              <span class="project-time">${getSafe(work, 'time', 'Recently')}</span>
            </div>
          </div>
        </div>
      `;
      
      projectDiv.onclick = () => {
        const link = getSafe(work, 'link', '#');
        if (link && link !== '#') {
          window.location.href = link;
        }
      };
      
      projectsContainer.appendChild(projectDiv);
    });
    
    // Skills - 6 boxes
    const skillsContainer = document.getElementById('skillsContainer');
    const skillIcons = [
      'mdi mdi-brain',
      'mdi mdi-cog',
      'mdi mdi-lightbulb-on',
      'mdi mdi-puzzle',
      'mdi mdi-account-group',
      'mdi mdi-file-document'
    ];
    
    const skills = getSafe(portfolioData, 'skills', []);
    skills.forEach((skill, index) => {
      const skillDiv = document.createElement('div');
      skillDiv.setAttribute('data-aos', 'fade-up');
      skillDiv.setAttribute('data-aos-delay', (index * 100).toString());
      
      skillDiv.innerHTML = `
        <div class="flat-card content-card">
          <div class="card-header">
            <div class="card-icon skill-icon">
              <i class="${skillIcons[index] || 'mdi mdi-check-circle'}"></i>
            </div>
            <h3 class="card-title">${getSafe(skill, 'name', 'Skill')}</h3>
          </div>
          <p class="card-description">${getSafe(skill, 'description', 'Skill description')}</p>
          <div class="card-footer">
            <div class="card-note">
              <i class="mdi mdi-check-circle" style="color: #70C1B3;"></i>
              <span>Practical experience applied</span>
            </div>
          </div>
        </div>
      `;
      
      skillsContainer.appendChild(skillDiv);
    });
    
    // Hobbies - 3 boxes
    const hobbiesContainer = document.getElementById('hobbiesContainer');
    const hobbyIcons = ['mdi mdi-fish', 'mdi mdi-fire', 'mdi mdi-book'];
    
    const hobbies = getSafe(portfolioData, 'hobbies', []);
    hobbies.forEach((hobby, index) => {
      const hobbyDiv = document.createElement('div');
      hobbyDiv.setAttribute('data-aos', 'fade-up');
      hobbyDiv.setAttribute('data-aos-delay', (index * 100).toString());
      
      // Use centralized color system
      const hobbyGradient = ColorSystem.hobbyGradients[['first', 'second', 'third'][index]] || ColorSystem.hobbyGradients.first;
      const hobbySaying = ColorSystem.hobbySayings[index] || 'Amazing Experience';
      
      hobbyDiv.innerHTML = `
        <div class="flat-card content-card">
          <div class="card-header">
            <div class="card-icon hobby-icon" style="background: ${hobbyGradient};">
              <i class="${hobbyIcons[index]}"></i>
            </div>
            <h3 class="card-title">${getSafe(hobby, 'name', 'Hobby')}</h3>
          </div>
          <p class="card-description">${getSafe(hobby, 'description', 'Hobby description')}</p>
          <div class="card-footer">
            <div class="card-note" style="background: rgba(255, 224, 102, 0.15); border-radius: 10px; border: 1px solid rgba(255, 224, 102, 0.3); padding: 16px;">
              <i class="mdi mdi-star" style="color: #FFD166;"></i>
              <span>${hobbySaying}</span>
            </div>
          </div>
        </div>
      `;
      
      hobbiesContainer.appendChild(hobbyDiv);
    });
    
    // Topics - 3 boxes
    const topicsContainer = document.getElementById('topicsContainer');
    const topicIcons = ['mdi mdi-web', 'mdi mdi-robot-industrial', 'mdi mdi-newspaper'];
    
    const topics = getSafe(portfolioData, 'topics', []);
    topics.forEach((topic, index) => {
      const topicDiv = document.createElement('div');
      topicDiv.setAttribute('data-aos', 'fade-up');
      topicDiv.setAttribute('data-aos-delay', (index * 100).toString());
      
      const subtopics = getSafe(topic, 'subtopics', []);
      const subtopicsHTML = subtopics.map(subtopic => 
        `<span class="topic-tag">${subtopic}</span>`
      ).join('');
      
      // Use centralized color system
      const topicGradient = ColorSystem.topicGradients[index] || ColorSystem.topicGradients[0];
      
      topicDiv.innerHTML = `
        <div class="flat-card content-card">
          <div class="card-header">
            <div class="card-icon topic-icon" style="background: ${topicGradient};">
              <i class="${topicIcons[index]}"></i>
            </div>
            <h3 class="card-title">${getSafe(topic, 'name', 'Topic')}</h3>
          </div>
          <p class="card-description">${getSafe(topic, 'description', 'Topic description')}</p>
          <div class="subtopics-container">
            <div class="subtopics-label">Areas of Focus:</div>
            <div class="subtopics-list">
              ${subtopicsHTML}
            </div>
          </div>
          <div class="card-footer">
            <div class="card-note">
              <i class="mdi mdi-progress-clock" style="color: #FFD166;"></i>
              <span>Currently deepening understanding</span>
            </div>
          </div>
        </div>
      `;
      
      topicsContainer.appendChild(topicDiv);
    });
    
    // Footer links only
    const footerLinks = document.getElementById('footerLinks');
    const contacts = getSafe(portfolioData, 'contacts', {});
    
    const links = getSafe(contacts, 'links', []);
    links.forEach((link, index) => {
      // Footer links only
      const footerLink = document.createElement('a');
      footerLink.href = getSafe(link, 'link', '#');
      footerLink.target = '_blank';
      footerLink.rel = 'noopener noreferrer';
      footerLink.className = 'footer-link';
      footerLink.setAttribute('aria-label', `${getSafe(link, 'name', 'Link')} link`);
      
      const linkName = getSafe(link, 'name', 'Link');
      const linkColor = ColorSystem.social[linkName] || '#50514F';
      
      footerLink.innerHTML = `<i class="mdi mdi-${linkName.toLowerCase()}"></i>`;
      
      // Add hover effect with the social brand color
      footerLink.onmouseenter = () => {
        footerLink.style.color = linkColor;
        footerLink.style.background = `${linkColor}20`;
      };
      
      footerLink.onmouseleave = () => {
        footerLink.style.color = 'rgba(255, 255, 255, 0.7)';
        footerLink.style.background = 'rgba(255, 255, 255, 0.1)';
      };
      
      footerLinks.appendChild(footerLink);
    });
    
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    // Show fallback content
    document.getElementById('heroName').textContent = 'William Hunt';
    document.getElementById('jobDescription').textContent = 'Professional Portfolio';
    
    // Show error message to user
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
      <div class="flat-card" style="background: #FF7F50; color: white; padding: 20px; text-align: center;">
        <i class="mdi mdi-alert" style="font-size: 48px; margin-bottom: 16px;"></i>
        <p>Unable to load portfolio data. Please refresh the page or try again later.</p>
      </div>
    `;
    document.querySelector('main').prepend(errorDiv);
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
      });
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Smooth scroll to section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Update active nav link on scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});

// Create Timeline Function
function createTimeline() {
  const timelineTrack = document.querySelector('.timeline-track');
  const timelineElement = document.querySelector('.timeline-wrapper');
  const jobs = getSafe(portfolioData, 'jobs', []);
  
  if (jobs.length === 0) {
    timelineElement.style.display = 'none';
    document.querySelector('.job-info-container').innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <i class="mdi mdi-timeline-clock" style="font-size: 48px; color: #70C1B3; margin-bottom: 16px;"></i>
        <p>No timeline data available.</p>
      </div>
    `;
    return;
  }
  
  // Clear existing content
  timelineTrack.innerHTML = '<div class="timeline-progress" id="timelineProgress"></div>';
  
  // Create timeline points
  jobs.forEach((job, index) => {
    // Calculate position (0% to 100%)
    const position = (index / (jobs.length - 1)) * 100;
    
    // Extract years for display
    const yearMatch = getSafe(job, 'dates', '').match(/\d{4}/g);
    const years = yearMatch ? yearMatch[0] + (yearMatch[1] ? ' - ' + yearMatch[1] : '') : '';
    
    // Create point container
    const pointContainer = document.createElement('div');
    pointContainer.className = 'timeline-point-container';
    pointContainer.style.left = `${position}%`;
    pointContainer.dataset.index = index;
    pointContainer.setAttribute('role', 'button');
    pointContainer.setAttribute('aria-label', `${getSafe(job, 'title', 'Job')} - ${years}`);
    pointContainer.tabIndex = 0;
    
    // Create vertical line
    const pointLine = document.createElement('div');
    pointLine.className = 'timeline-point-line';
    pointContainer.appendChild(pointLine);
    
    // Create timeline point
    const point = document.createElement('div');
    point.className = 'timeline-point';
    pointContainer.appendChild(point);
    
    // Create year indicator
    const yearIndicator = document.createElement('div');
    yearIndicator.className = 'timeline-year';
    yearIndicator.textContent = years;
    pointContainer.appendChild(yearIndicator);
    
    // Create job title label
    const label = document.createElement('div');
    label.className = 'timeline-point-label';
    label.textContent = getSafe(job, 'title', 'Job Title');
    pointContainer.appendChild(label);
    
    // Add click event
    pointContainer.addEventListener('click', (e) => {
      e.stopPropagation();
      selectJob(index);
    });
    
    // Add keyboard support
    pointContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectJob(index);
      }
    });
    
    // Add mouseenter/mouseleave for hover effects
    pointContainer.addEventListener('mouseenter', () => {
      if (!pointContainer.classList.contains('active')) {
        point.style.transform = 'translateY(-50%) translateX(-50%) scale(1.5)';
        point.style.boxShadow = '0 4px 20px rgba(36, 123, 160, 0.4)';
        pointLine.style.height = '60px';
        label.style.opacity = '1';
        label.style.visibility = 'visible';
        label.style.transform = 'translateX(-50%) translateY(-5px)';
        yearIndicator.style.opacity = '1';
        yearIndicator.style.transform = 'translateX(-50%) translateY(2px)';
      }
    });
    
    pointContainer.addEventListener('mouseleave', () => {
      if (!pointContainer.classList.contains('active')) {
        point.style.transform = 'translateY(-50%) translateX(-50%) scale(1)';
        point.style.boxShadow = '0 2px 10px rgba(36, 123, 160, 0.2)';
        pointLine.style.height = '40px';
        label.style.opacity = '0';
        label.style.visibility = 'hidden';
        label.style.transform = 'translateX(-50%)';
        yearIndicator.style.opacity = '0.7';
        yearIndicator.style.transform = 'translateX(-50%)';
      }
    });
    
    timelineTrack.appendChild(pointContainer);
  });
  
  // Set initial active point
  selectJob(currentJobIndex);
  
  // Add drag functionality to the timeline
  let timelineRect = timelineElement.getBoundingClientRect();
  
  const updateTimelineRect = () => {
    timelineRect = timelineElement.getBoundingClientRect();
  };
  
  // Update rect on resize
  window.addEventListener('resize', updateTimelineRect);
  
  // Mouse drag functionality
  timelineElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateTimelineRect();
    handleDrag(e.clientX);
    timelineElement.style.cursor = 'grabbing';
  });
  
  timelineElement.addEventListener('mousemove', (e) => {
    if (isDragging) {
      handleDrag(e.clientX);
    }
  });
  
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      timelineElement.style.cursor = '';
    }
  });
  
  // Touch drag functionality
  timelineElement.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateTimelineRect();
    handleDrag(e.touches[0].clientX);
    e.preventDefault();
  });
  
  timelineElement.addEventListener('touchmove', (e) => {
    if (isDragging) {
      handleDrag(e.touches[0].clientX);
      e.preventDefault();
    }
  });
  
  timelineElement.addEventListener('touchend', () => {
    isDragging = false;
  });
  
  // Handle drag function
  function handleDrag(clientX) {
    const relativeX = clientX - timelineRect.left;
    const percentage = Math.max(0, Math.min(100, (relativeX / timelineRect.width) * 100));
    
    // Find the closest job based on drag position
    let closestIndex = 0;
    let minDistance = 100;
    
    jobs.forEach((job, index) => {
      const jobPosition = (index / (jobs.length - 1)) * 100;
      const distance = Math.abs(percentage - jobPosition);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    // Only update if we're dragging to a different job
    if (closestIndex !== currentJobIndex) {
      selectJob(closestIndex);
    }
  }
}

// Update Progress Bar Function
function updateProgressBar() {
  const progress = document.getElementById('timelineProgress');
  const jobs = getSafe(portfolioData, 'jobs', []);
  const percentage = jobs.length > 1 ? (currentJobIndex / (jobs.length - 1)) * 100 : 0;
  progress.style.width = `${percentage}%`;
}

// Select Job Function - FIXED: Properly manages active states
function selectJob(index) {
  const jobs = getSafe(portfolioData, 'jobs', []);
  
  if (index < 0 || index >= jobs.length) {
    return;
  }
  
  // Remove active class from all timeline points first
  document.querySelectorAll('.timeline-point-container').forEach(container => {
    container.classList.remove('active');
    
    const point = container.querySelector('.timeline-point');
    const line = container.querySelector('.timeline-point-line');
    const label = container.querySelector('.timeline-point-label');
    const year = container.querySelector('.timeline-year');
    
    // Reset all styles to default
    point.classList.remove('active');
    point.style.transform = 'translateY(-50%) translateX(-50%) scale(1)';
    point.style.boxShadow = '0 2px 10px rgba(36, 123, 160, 0.2)';
    point.style.background = 'white';
    point.style.borderColor = '#247BA0';
    
    line.style.height = '40px';
    line.style.background = 'linear-gradient(to top, rgba(36, 123, 160, 0.3) 0%, transparent 100%)';
    
    label.style.opacity = '0';
    label.style.visibility = 'hidden';
    label.style.transform = 'translateX(-50%)';
    label.style.background = 'linear-gradient(135deg, #50514F, #404140)';
    
    year.style.opacity = '0.7';
    year.style.fontWeight = '500';
    year.style.color = '#50514F';
    year.style.background = 'rgba(255, 255, 255, 0.9)';
    year.style.transform = 'translateX(-50%)';
  });
  
  // Set new current job index
  currentJobIndex = index;
  
  // Add active class to selected point
  const activeContainer = document.querySelector(`.timeline-point-container[data-index="${index}"]`);
  if (activeContainer) {
    activeContainer.classList.add('active');
    
    const point = activeContainer.querySelector('.timeline-point');
    const line = activeContainer.querySelector('.timeline-point-line');
    const label = activeContainer.querySelector('.timeline-point-label');
    const year = activeContainer.querySelector('.timeline-year');
    
    // Apply active styles
    point.classList.add('active');
    point.style.transform = 'translateY(-50%) translateX(-50%) scale(1.6)';
    point.style.boxShadow = '0 0 0 6px rgba(36, 123, 160, 0.2), 0 4px 25px rgba(36, 123, 160, 0.4)';
    point.style.background = '#247BA0';
    point.style.borderColor = '#247BA0';
    
    line.style.height = '60px';
    line.style.background = 'linear-gradient(to top, #247BA0 0%, rgba(36, 123, 160, 0.5) 100%)';
    
    label.style.opacity = '1';
    label.style.visibility = 'visible';
    label.style.transform = 'translateX(-50%) translateY(-5px)';
    label.style.background = 'linear-gradient(135deg, #247BA0, #1A5A7A)';
    
    year.style.opacity = '1';
    year.style.fontWeight = '600';
    year.style.color = '#247BA0';
    year.style.background = 'rgba(36, 123, 160, 0.1)';
    year.style.transform = 'translateX(-50%) translateY(2px)';
  }
  
  // Update progress bar
  updateProgressBar();
  
  // Update job info
  updateJobInfo();
}

// Helper function to get job location - UPDATED with Cleveland-Cliffs
function getJobLocation(company) {
  if (!company) return 'Various Locations';
  
  const locations = {
    'Cleveland-Cliffs Middletown Works': 'Middletown, OH',
    'Graphic Packaging International - Middletown Mill': 'Middletown, OH',
    'EVERTZ Technologies USA': 'Middletown, OH',
    'VERCOM': 'West Carrollton City, OH',
    'Schneider Electric - Fairfield, OH': 'Fairfield, OH',
    "Lee's Famous Recipe Chicken - Trenton, OH": 'Trenton, OH'
  };
  
  return locations[company] || 'Various Locations';
}

// Helper function to get work schedule - UPDATED with Cleveland-Cliffs
function getWorkSchedule(job) {
  if (!job) return 'Standard Schedule';
  
  const title = getSafe(job, 'title', '').toLowerCase();
  const company = getSafe(job, 'company', '').toLowerCase();
  
  if (company.includes('cleveland-cliffs') || company.includes('graphic packaging') || title.includes('union')) {
    return 'Rotating Southern Swing Shifts';
  } else if (title.includes('maintenance') || company.includes('evertz')) {
    return 'Various Scheduled Shifts';
  } else if (title.includes('low voltage')) {
    return 'Project-Based Schedule';
  } else if (title.includes('wireman')) {
    return 'Various Schedules to Meet Deadlines';
  } else if (title.includes('kitchen')) {
    return 'Restaurant Hours';
  }
  return 'Standard Schedule';
}

// Update Job Info Function
function updateJobInfo() {
  const jobs = getSafe(portfolioData, 'jobs', []);
  
  if (jobs.length === 0) {
    return;
  }
  
  const job = jobs[currentJobIndex];
  const jobInfo = document.querySelector('.job-info');
  
  // Create responsibilities HTML
  const responsibilities = getSafe(job, 'responsibilities', []);
  const responsibilitiesHTML = responsibilities.map(resp => 
    `<li>${resp}</li>`
  ).join('');
  
  jobInfo.innerHTML = `
    <h3 class="job-title">
      <i class="mdi ${getSafe(job, 'icon', 'mdi-briefcase')} job-title-icon"></i>
      ${getSafe(job, 'title', 'Job Title')}
    </h3>
    <div class="job-dates">
      <i class="mdi mdi-calendar"></i>
      ${getSafe(job, 'dates', '')}
    </div>
    <p class="job-description">${getSafe(job, 'description', '')}</p>
    <div class="job-details">
      <div class="job-detail">
        <div class="detail-label">Company</div>
        <div class="detail-value">${getSafe(job, 'company', '')}</div>
      </div>
      <div class="job-detail">
        <div class="detail-label">Location</div>
        <div class="detail-value">${getJobLocation(getSafe(job, 'company', ''))}</div>
      </div>
      <div class="job-detail">
        <div class="detail-label">Work Schedule</div>
        <div class="detail-value">${getWorkSchedule(job)}</div>
      </div>
    </div>
    <div class="job-detail">
      <div class="detail-label">Key Responsibilities</div>
      <div class="detail-value">
        <ul style="margin-top: 8px; padding-left: 20px;">
          ${responsibilitiesHTML || '<li>No responsibilities listed</li>'}
        </ul>
      </div>
    </div>
  `;
  
  // Trigger animation
  jobInfo.classList.remove('active');
  setTimeout(() => {
    jobInfo.classList.add('active');
  }, 10);
}