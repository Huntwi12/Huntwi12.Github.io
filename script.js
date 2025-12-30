// Timeline State
let currentJobIndex = 0;
let isDragging = false;

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
    // Construct the path to the project
    const projectPath = `Side projects/${value}.html`;
    
    // Try to navigate to the project
    window.location.href = projectPath;
    
    // If navigation fails, show alert
    setTimeout(() => {
      // This is a fallback - if the file doesn't exist, the browser will show its own error
      console.log(`Searching for: ${projectPath}`);
    }, 100);
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
  // Basic info
  document.getElementById('heroName').textContent = portfolioData.name;
  document.getElementById('jobDescription').textContent = portfolioData.jobDescription;
  
  // Create Timeline
  createTimeline();
  
  // Update job info
  updateJobInfo();
  
  // Projects - Direct links to project folders
  const projectsContainer = document.getElementById('projectsContainer');
  portfolioData.works.forEach((work, index) => {
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
              <h3 class="project-title">${work.name}</h3>
              <p class="project-description">${work.description}</p>
            </div>
          </div>
          <div class="project-footer">
            <span class="project-link">
              <i class="mdi mdi-arrow-right"></i>
              View Project
            </span>
            <span class="project-time">${work.time}</span>
          </div>
        </div>
      </div>
    `;
    
    projectDiv.onclick = () => {
      window.location.href = work.link;
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
  
  portfolioData.skills.forEach((skill, index) => {
    const skillDiv = document.createElement('div');
    skillDiv.setAttribute('data-aos', 'fade-up');
    skillDiv.setAttribute('data-aos-delay', (index * 100).toString());
    
    skillDiv.innerHTML = `
      <div class="flat-card content-card">
        <div class="card-header">
          <div class="card-icon skill-icon">
            <i class="${skillIcons[index]}"></i>
          </div>
          <h3 class="card-title">${skill.name}</h3>
        </div>
        <p class="card-description">${skill.description}</p>
        <div class="card-footer">
          <div class="card-note">
            <i class="mdi mdi-check-circle" style="color: var(--secondary);"></i>
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
  const hobbyColors = ['var(--accent)', 'var(--secondary)', 'var(--primary)'];
  
  portfolioData.hobbies.forEach((hobby, index) => {
    const hobbyDiv = document.createElement('div');
    hobbyDiv.setAttribute('data-aos', 'fade-up');
    hobbyDiv.setAttribute('data-aos-delay', (index * 100).toString());
    
    hobbyDiv.innerHTML = `
      <div class="flat-card content-card">
        <div class="card-header">
          <div class="card-icon hobby-icon" style="background: linear-gradient(135deg, ${hobbyColors[index]} 0%, ${index === 0 ? '#f47a78' : index === 1 ? '#8ad3c7' : '#3498db'} 100%);">
            <i class="${hobbyIcons[index]}"></i>
          </div>
          <h3 class="card-title">${hobby.name}</h3>
        </div>
        <p class="card-description">${hobby.description}</p>
        <div class="card-footer">
          <div class="card-note" style="background: rgba(255, 224, 102, 0.15); border-radius: 10px; border: 1px solid rgba(255, 224, 102, 0.3); padding: 16px;">
            <i class="mdi mdi-star" style="color: var(--highlight);"></i>
            <span>${index === 0 ? 'Fully Recommended.' : 'Painful But Rewarding ability'}</span>
          </div>
        </div>
      </div>
    `;
    
    hobbiesContainer.appendChild(hobbyDiv);
  });
  
  // Topics - 3 boxes
  const topicsContainer = document.getElementById('topicsContainer');
  const topicIcons = ['mdi mdi-web', 'mdi mdi-robot-industrial', 'mdi mdi-newspaper'];
  const topicColors = [
    'linear-gradient(135deg, #247BA0 0%, #3498db 100%)',
    'linear-gradient(135deg, #F25F5C 0%, #f47a78 100%)',
    'linear-gradient(135deg, #70C1B3 0%, #8ad3c7 100%)'
  ];
  
  portfolioData.topics.forEach((topic, index) => {
    const topicDiv = document.createElement('div');
    topicDiv.setAttribute('data-aos', 'fade-up');
    topicDiv.setAttribute('data-aos-delay', (index * 100).toString());
    
    const subtopicsHTML = topic.subtopics.map(subtopic => 
      `<span class="topic-tag">${subtopic}</span>`
    ).join('');
    
    topicDiv.innerHTML = `
      <div class="flat-card content-card">
        <div class="card-header">
          <div class="card-icon topic-icon" style="background: ${topicColors[index]};">
            <i class="${topicIcons[index]}"></i>
          </div>
          <h3 class="card-title">${topic.name}</h3>
        </div>
        <p class="card-description">${topic.description}</p>
        <div class="subtopics-container">
          <div class="subtopics-label">Areas of Focus:</div>
          <div class="subtopics-list">
            ${subtopicsHTML}
          </div>
        </div>
        <div class="card-footer">
          <div class="card-note">
            <i class="mdi mdi-progress-clock" style="color: var(--highlight);"></i>
            <span>Currently deepening understanding</span>
          </div>
        </div>
      </div>
    `;
    
    topicsContainer.appendChild(topicDiv);
  });
  
  // Contact info
  const contactInfo = document.getElementById('contactInfo');
  const contactFields = [
    { label: 'EMAIL', value: portfolioData.contacts.email, icon: 'mdi-email' },
    { label: 'MOBILE', value: portfolioData.contacts.mobileNo, icon: 'mdi-cellphone' },
    { label: 'PHONE', value: portfolioData.contacts.phoneNo, icon: 'mdi-phone' }
  ];
  
  contactFields.forEach((field, index) => {
    if (field.value) {
      const fieldDiv = document.createElement('div');
      fieldDiv.setAttribute('data-aos', 'fade-up');
      fieldDiv.setAttribute('data-aos-delay', ((index + 1) * 50).toString());
      
      fieldDiv.innerHTML = `
        <div class="contact-field">
          <div class="contact-label">${field.label}</div>
          <div class="contact-value">
            <i class="mdi ${field.icon} contact-icon"></i>
            ${field.value}
          </div>
        </div>
      `;
      
      contactInfo.appendChild(fieldDiv);
    }
  });
  
  // Contact links
  const contactLinks = document.getElementById('contactLinks');
  const footerLinks = document.getElementById('footerLinks');
  const colorMap = {
    'GitHub': '#50514F',
    'Youtube': '#F25F5C',
    'LinkedIn': '#247BA0',
    'Twitter': '#1DA1F2',
    'Instagram': '#E4405F',
    'Website': '#70C1B3',
    'Email': '#FFE066'
  };
  
  portfolioData.contacts.links.forEach((link, index) => {
    // Main contact links
    const linkElement = document.createElement('a');
    linkElement.href = link.link;
    linkElement.target = '_blank';
    linkElement.className = 'social-link';
    linkElement.innerHTML = `
      <i class="mdi mdi-${link.name.toLowerCase()}" style="color: ${colorMap[link.name] || '#50514F'}; font-size: 20px;"></i>
      <span>${link.name}</span>
    `;
    
    linkElement.onmouseenter = () => {
      linkElement.style.background = colorMap[link.name] + '10' || 'rgba(80, 81, 79, 0.1)';
      linkElement.style.borderColor = colorMap[link.name] + '40' || 'rgba(80, 81, 79, 0.4)';
    };
    
    linkElement.onmouseleave = () => {
      linkElement.style.background = 'white';
      linkElement.style.borderColor = 'rgba(80, 81, 79, 0.2)';
    };
    
    contactLinks.appendChild(linkElement);
    
    // Footer links
    const footerLink = document.createElement('a');
    footerLink.href = link.link;
    footerLink.target = '_blank';
    footerLink.className = 'footer-link';
    footerLink.innerHTML = `<i class="mdi mdi-${link.name.toLowerCase()}"></i>`;
    footerLinks.appendChild(footerLink);
  });
  
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
  
  // Clear existing content
  timelineTrack.innerHTML = '<div class="timeline-progress" id="timelineProgress"></div>';
  
  // Create timeline points
  portfolioData.jobs.forEach((job, index) => {
    // Calculate position (0% to 100%)
    const position = (index / (portfolioData.jobs.length - 1)) * 100;
    
    // Extract years for display
    const yearMatch = job.dates.match(/\d{4}/g);
    const years = yearMatch ? yearMatch[0] + (yearMatch[1] ? ' - ' + yearMatch[1] : '') : '';
    
    // Create point container
    const pointContainer = document.createElement('div');
    pointContainer.className = `timeline-point-container ${index === currentJobIndex ? 'active' : ''}`;
    pointContainer.style.left = `${position}%`;
    pointContainer.dataset.index = index;
    
    // Create vertical line
    const pointLine = document.createElement('div');
    pointLine.className = 'timeline-point-line';
    pointContainer.appendChild(pointLine);
    
    // Create timeline point
    const point = document.createElement('div');
    point.className = `timeline-point ${index === currentJobIndex ? 'active' : ''}`;
    pointContainer.appendChild(point);
    
    // Create year indicator
    const yearIndicator = document.createElement('div');
    yearIndicator.className = 'timeline-year';
    yearIndicator.textContent = years;
    pointContainer.appendChild(yearIndicator);
    
    // Create job title label
    const label = document.createElement('div');
    label.className = 'timeline-point-label';
    label.textContent = job.title;
    pointContainer.appendChild(label);
    
    // Add click event
    pointContainer.addEventListener('click', (e) => {
      e.stopPropagation();
      selectJob(index);
    });
    
    timelineTrack.appendChild(pointContainer);
  });
  
  // Update progress bar
  updateProgressBar();
  
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
    
    portfolioData.jobs.forEach((job, index) => {
      const jobPosition = (index / (portfolioData.jobs.length - 1)) * 100;
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
  const percentage = (currentJobIndex / (portfolioData.jobs.length - 1)) * 100;
  progress.style.width = `${percentage}%`;
}

// Select Job Function
function selectJob(index) {
  currentJobIndex = index;
  
  // Update timeline points with animation
  document.querySelectorAll('.timeline-point-container').forEach((container, i) => {
    const point = container.querySelector('.timeline-point');
    const line = container.querySelector('.timeline-point-line');
    
    container.classList.remove('active');
    if (i === index) {
      container.classList.add('active');
      
      // Animate the active point
      point.classList.add('active');
      
      // Animate the line
      line.style.height = '60px';
      
      // Briefly highlight the label
      const label = container.querySelector('.timeline-point-label');
      label.style.opacity = '1';
      label.style.visibility = 'visible';
      label.style.transform = 'translateX(-50%) translateY(-8px)';
      
      setTimeout(() => {
        if (i !== currentJobIndex) return; // Check if still active
        label.style.transform = 'translateX(-50%) translateY(-5px)';
      }, 300);
    } else {
      point.classList.remove('active');
      line.style.height = '40px';
    }
  });
  
  // Update progress bar
  updateProgressBar();
  
  // Update job info
  updateJobInfo();
}

// Update Job Info Function
function updateJobInfo() {
  const job = portfolioData.jobs[currentJobIndex];
  const jobInfo = document.querySelector('.job-info');
  
  // Create responsibilities HTML
  const responsibilitiesHTML = job.responsibilities.map(resp => 
    `<li>${resp}</li>`
  ).join('');
  
  jobInfo.innerHTML = `
    <h3 class="job-title">
      <i class="mdi ${job.icon} job-title-icon"></i>
      ${job.title}
    </h3>
    <div class="job-dates">
      <i class="mdi mdi-calendar"></i>
      ${job.dates}
    </div>
    <p class="job-description">${job.description}</p>
    <div class="job-details">
      <div class="job-detail">
        <div class="detail-label">Company</div>
        <div class="detail-value">${job.company}</div>
      </div>
      <div class="job-detail">
        <div class="detail-label">Location</div>
        <div class="detail-value">${getJobLocation(job.company)}</div>
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
          ${responsibilitiesHTML}
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

// Helper function to get job location
function getJobLocation(company) {
  const locations = {
    'Graphic Packaging International - Middletown Mill': 'Middletown, OH',
    'EVERTZ Technologies USA': 'USA',
    'VERCOM': 'West Carrollton City, OH',
    'Schneider Electric - Fairfield, OH': 'Fairfield, OH',
    "Lee's Famous Recipe Chicken - Trenton, OH": 'Trenton, OH'
  };
  return locations[company] || 'Various Locations';
}

// Helper function to get work schedule
function getWorkSchedule(job) {
  if (job.title.includes('Union') || job.company.includes('Graphic Packaging')) {
    return 'Rotating Southern Swing Shifts';
  } else if (job.title.includes('Maintenance') || job.company.includes('EVERTZ')) {
    return 'Various Scheduled Shifts';
  } else if (job.title.includes('Low Voltage')) {
    return 'Project-Based Schedule';
  } else if (job.title.includes('Wireman')) {
    return 'Various Schedules to Meet Deadlines';
  } else if (job.title.includes('Kitchen')) {
    return 'Restaurant Hours';
  }
  return 'Standard Schedule';
}