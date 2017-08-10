module.exports = {
  route: '/',
  page: '/readme',
  selectedLang: 'Javascript',
  langBoxShowing: false,
  langOptions: [
    'Javascript',
    'NodeJS',
    'PHP',
    'Ruby'
  ],
  contentsMenu: [
    {
      id: 0,
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
