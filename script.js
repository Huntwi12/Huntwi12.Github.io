// Your data with expanded skills, hobbies, and new topics
const portfolioData = {
    name: 'William Hunt',
    jobTitle: 'Aluminizer',
    jobDescription: 'Living Life 8 Hours At A Time',
    skills: [
        {
            name: 'Adept Learner',
            description: 'Provided I can grasp the concepts'
        },
        {
            name: 'Mechanically Inclined',
            description: '2 Years of Millwright Experience'
        },
        {
            name: 'Cognitive Adaptability',
            description: 'Safely Process Information In Response To Changing Circumstances'
        },
        {
            name: 'Problem Solver',
            description: 'Analytical thinking for complex industrial challenges'
        },
        {
            name: 'Team Collaboration',
            description: 'Experience working in diverse industrial teams'
        },
        {
            name: 'Technical Documentation',
            description: 'Creating and following detailed procedures and manuals'
        }
    ],
    works: [
        {
            name: 'Favorite PS1 Games',
            link: '1st Project/index.html',
            description: 'Website I made with HTML & CSS took me about 4 hours.',
            time: '4 hours'
        },
        {
            name: 'WIP',
            link: '2nd Example/index.html',
            description: 'Work In Progress',
            time: 'Ongoing'
        },
    ],
    hobbies: [
        {
            name: 'Fly Fishing',
            description: 'Steep Learning Curve. Fully Recommend'
        },
        {
            name: 'Outdoor Exploration',
            description: 'Hiking and discovering new trails and nature spots'
        },
        {
            name: 'DIY Projects',
            description: 'Building and fixing things around the house and workshop'
        }
    ],
    topics: [
        {
            name: 'Web Development',
            description: 'Deepening my knowledge of modern web technologies, frameworks, and best practices for building responsive and accessible websites.',
            subtopics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React/Vue.js', 'Responsive Design', 'Web Performance']
        },
        {
            name: 'Industrial Automation',
            description: 'Exploring the integration of software and hardware in industrial settings, focusing on PLC programming, robotics, and process optimization.',
            subtopics: ['PLC Programming', 'Industrial Robotics', 'Process Control', 'SCADA Systems', 'IoT Integration']
        },
        {
            name: 'Digital Fabrication',
            description: 'Learning about modern manufacturing techniques including 3D printing, CNC machining, and laser cutting for prototyping and production.',
            subtopics: ['3D Printing', 'CNC Machining', 'CAD/CAM Software', 'Materials Science', 'Rapid Prototyping']
        }
    ],
    contacts: {
        email: '',
        mobileNo: '',
        phoneNo: '',
        links: [
            {
                name: 'GitHub',
                link: 'https://github.com/Huntwi12'
            },
            {
                name: 'Youtube',
                link: 'https://youtube.com/@Will-fo3sf'
            },
        ]
    }
};

// Initialize AOS
AOS.init({
    once: true,
    duration: 600,
    easing: 'ease-out-cubic',
    offset: 100
});

// Set current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Populate the page with data
document.addEventListener('DOMContentLoaded', function() {
    // Basic info
    document.getElementById('heroName').textContent = portfolioData.name;
    document.getElementById('jobTitle').textContent = portfolioData.jobTitle;
    document.getElementById('jobDescription').textContent = portfolioData.jobDescription;

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
    const hobbyIcons = ['mdi mdi-fish', 'mdi mdi-hiking', 'mdi mdi-hammer-wrench'];
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
            <span>${index === 0 ? 'Steep learning curve. Fully recommended.' : 'Enjoyable and rewarding activity'}</span>
          </div>
        </div>
      </div>
    `;

        hobbiesContainer.appendChild(hobbyDiv);
    });

    // Topics - 3 boxes
    const topicsContainer = document.getElementById('topicsContainer');
    const topicIcons = ['mdi mdi-web', 'mdi mdi-robot-industrial', 'mdi mdi-printer-3d'];
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