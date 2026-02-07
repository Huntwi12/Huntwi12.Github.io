// Portfolio data
const portfolioData = {
  name: 'William J. Hunt',
  jobTitle: 'Aluminizer',
  jobDescription: 'Living Life 8 Hours At A Time',
  jobs: [
    {
      title: 'Union Production/Alumize Production ',
      company: 'Cleveland-Cliffs Middletown Works',
      dates: 'May 2024 - Present',
      description: 'Production Crew Member specializing in aluminizing processes. Responsible for operating Custom Machinery (Safety & Effectively), Performing Continuous tasks, and adapting to various production needs in a unionized environment.',
      icon: 'mdi-account-hard-hat',
      responsibilities: [
        'Operating purpose made stations(On and Off a Buzzer")',
        'Filling in for other positions as needed for Callouts',
        'Held a high standard of work quality and efficiency',
        'Work rotating southern swing shifts (7-day rotation)',
        'Follow union guidelines and safety protocols',
        'Held To The Highest Accountability Standards I Have Ever Experienced',
        'Almost Met Personal Standards for Attendance (as of January 2026 99.983% Attendance Rate)'
        
      ],
      isCurrent: true
    },
    {
      title: 'Union Production/Service Crew',
      company: 'Graphic Packaging International - Middletown Mill',
      dates: 'September 2023 - May 2024',
      description: 'Production and service crew member with varied duties based on operational demands. Working rotating southern swing shifts in a union environment.',
      icon: 'mdi-account-hard-hat',
      responsibilities: [
        'Operate fork trucks and bobcats for material handling',
        'Perform basic maintenance on industrial machinery',
        'Labor reserve duties as assigned based on production needs',
        'Work rotating southern swing shifts (7-day rotation)',
        'Follow union guidelines and safety protocols',
        'Adapt to varying task assignments based on production demands'
      ],
      isCurrent: false
    },
    {
      title: 'Entry Level Industrial Maintenance Technician/Porduction Crew Member',
      company: 'EVERTZ Technologies USA',
      dates: 'May 2021 - September 2023',
      description: 'Designed, troubleshooted and operated custom tailored equipment. Worked various scheduled shifts to meet product deadlines while conducting preventive maintenance and repairs.',
      icon: 'mdi-tools',
      responsibilities: [
        'Designed, troubleshooted and operated custom tailored equipment',
        'Worked various scheduled shifts to meet product deadlines',
        'Operated fork trucks, bobcat, front loader and mobile railcar mover',
        'Conducted preventive maintenance and repairs on industrial equipment',
        'Read and interpreted technical documentation for diagnosis and repair',
        'Utilized PPE, rigging equipment, power tools and specialized tools'
      ],
      isCurrent: false
    },
    {
      title: 'Low Voltage Technician',
      company: 'VERCOM',
      dates: 'March 2021 - June 2021',
      description: 'Installed and terminated category 6 cable, switches, patch panels, and server racks. Operated scissor lifts up to 50ft for installation work.',
      icon: 'mdi-cable-data',
      responsibilities: [
        'Install and terminate category 6 cable',
        'Install switches, patch panels, and server racks',
        'Install IP phones, paging devices and servers',
        'Operated scissor lifts daily up to 50ft in height',
        'Worked in West Carrollton City, OH location'
      ],
      isCurrent: false
    },
    {
      title: 'Wireman',
      company: 'Schneider Electric - Fairfield, OH',
      dates: 'December 2018 - September 2020',
      description: 'Designed, built and installed wiring harnesses on switchgear equipment. Worked with quality assurance on repairs and conducted inspections.',
      icon: 'mdi-wiring',
      responsibilities: [
        'Designed, built and installed wiring harnesses on switchgear equipment',
        'Reviewed point-to-point schematics for detailed specifications',
        'Worked with quality assurance on timely repairs',
        'Assembled and installed component panels to schematic specifications',
        'Conducted incoming and outgoing inspections for company records',
        'Wore PPE for safety around energized and non-energized equipment',
        'Assisted multiple departments and worked various schedules to meet deadlines'
      ],
      isCurrent: false
    },
    {
      title: 'Kitchen Supervisor',
      company: "Lee's Famous Recipe Chicken - Trenton, OH",
      dates: 'August 2016 - December 2018',
      description: 'Managed kitchen staff team, oversaw food production, and maintained quality standards in a fast-paced restaurant environment.',
      icon: 'mdi-chef-hat',
      responsibilities: [
        'Managed kitchen staff team and assigned tasks for food production',
        'Monitored kitchen area and maintained proper food handling techniques',
        'Oversaw food preparation, production and presentation to quality standards',
        'Delegated tasks and developed staff teams for efficient operations',
        'Cleaned and sanitized kitchen equipment, utensils and work stations',
        'Completed opening, closing and shift change functions',
        'Managed inventory and supply needs',
        'Used proper cleaning supplies and methods for food safety'
      ],
      isCurrent: false
    }
  ],
  skills: [
    {
      name: 'Adept Learner',
      description: 'Quickly Grasp New Concepts and Technologies'
    },
    {
      name: 'Mechanically Inclined',
      description: '2 Years of Millwright Experience'
    },
    {
      name: 'Cognitive Adaptability',
      description: 'Thrives in Dynamic and Changing Environments'
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
      name: 'Detail Oriented',
      description: 'Focus on precision and accuracy in technical tasks'
    }
  ],
  works: [
    {
      name: 'Favorite PS1 Games',
      link: '1st Project/Index.HTML',
      description: 'Website I made with HTML & CSS took me about 4 hours.',
      time: '4 hours'
    },
    {
      name: 'WIP',
      link: '2nd Website/index.html',
      description: 'Work In Progress',
      time: 'Ongoing'
    },
  ],
  hobbies: [
    {
      name: 'Fly Fishing',
      description: 'Steep Learning Curve. Fully Recommend.Can Be Very Relaxing. Can Be Frustrating At Times.'
    },
    {
      name: 'Welding',
      description: 'Used AC Stick/Mig. Prefer AC stick More Than Mig. 80% Of Welding Is Preping The Weldsite.'
    },
    {
      name: 'Hueristically Random Topics',
      description: 'Always Find Joy In Researching Diffrent Material, Topics or Theories/Concepts. '
    }
  ],
  topics: [
    {
      name: 'Financial Markets',
      description: 'The easiest and one of the largest amount of data we can get our hands on is Market Data. Its intresting being able to Retrieve, Organize, Analyze and Percieve the data to make informed decisions. Theres a billion indicators out there and all of it runs on mathmatical equations.',
      subtopics: ['Stocks', 'Forex', 'Crypto', 'Options','Technical Analysis', 'Fundamental Analysis']
    },
    {
      name: 'Industrial Millwrighting',
      description: 'My time at Evertz was a turning point, shaping me into a unskilled millwright. I thrived as the go-to person for maintaining specialized machinery, using logic to solve problems and continuously improving processes for greater efficiency.I hope to continue to build any Millwright knowledge apon this.',
      subtopics: ['Preventive Maintenance', 'Troubleshooting', 'Equipment Operation', 'Safety Protocols']
    },
    {
      name: 'Local History',
      description: 'My Family Started/Founded a chunk of Butler County,Ohio. Theres always new information forming on the internet about the local area.',
      subtopics: ['Madison Township', 'Trenton', 'Woodsdale']
    }
  ],
  contacts: {
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