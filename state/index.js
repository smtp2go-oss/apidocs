module.exports = {
  route: '/',
  page: '/readme',
  selectedLang: 'Javascript',
  langBoxShowing: false,
  sideBarMobile: true,
  htmlDisplay: null,
  toggleBoxes: {
    statistics: {
      'stats/email_bounces': {
        parameters: 'schema',
        response200: 'schema',
        response400: 'schema',
        response429: 'schema'
      },
      'stats/email_cycle': {
        parameters: 'schema',
        response200: 'schema',
        response400: 'schema',
        response429: 'schema'
      },
      'stats/email_history': {
        parameters: 'schema',
        response200: 'schema',
        response400: 'schema',
        response429: 'schema'
      },
      'stats/email_spam': {
        parameters: 'schema',
        response200: 'schema',
        response400: 'schema',
        response429: 'schema'
      },
      'stats/email_summary': {
        parameters: 'schema',
        response200: 'schema',
        response400: 'schema',
        response429: 'schema'
      },
      'stats/email_unsubs': {
        parameters: 'schema',
        response200: 'schema',
        response400: 'schema',
        response429: 'schema'
      }
    }
  },
  langOptions: [
    'Javascript',
    'NodeJS',
    'PHP',
    'Ruby'
  ],
  langBoxStyles: {
    selected: null,
    backgroundColor: null
  },
  readmeButton: {
    backgroundColor: '#29e'
  },
  subheaderStyles: {
    selected: null,
    backgroundColor: null
  },
  contentsMenu: [
    {
      id: 0,
      page: '/statistics',
      header: 'Statistics',
      subheaders: [
        '/stats/email_bounces',
        '/stats/email_cycle',
        '/stats/email_history',
        '/stats/email_spam',
        '/stats/email_summary',
        '/stats/email_unsubs'
      ],
      expanded: false,
      backgroundColor: null,
      expandIcon: '+'
    },
    {
      id: 1,
      page: '/emails',
      header: 'Emails',
      subheaders: [
        '/email/mime',
        '/email/search',
        '/email/send'
      ],
      expanded: false,
      backgroundColor: null,
      expandIcon: '+'
    },
    {
      id: 2,
      page: '/emailBlocklist',
      header: 'Email Blocklist',
      subheaders: [
        '/blocklist/add',
        '/blocklist/remove',
        '/blocklist/view'
      ],
      expanded: false,
      backgroundColor: null,
      expandIcon: '+'
    },
    {
      id: 3,
      page: '/smtpUsers',
      header: 'SMTP Users',
      subheaders: [
        '/users/smtp/add',
        '/users/smtp/edit',
        '/users/smtp/remove',
        '/users/smtp/view'
      ],
      expanded: false,
      backgroundColor: null,
      expandIcon: '+'
    }
  ],
  searchInput: ''
}
