const React = require('react')
const renderHTML= require('react-render-html')

const PageTemplate = require('./page-template')

const constructEmailSearch = require('./operations/construct-email-search')

const constructResponses = require('./operations/construct-responses')
const exampleResponses = require('../../exampleApi')

const { getHtml } = require('../../services/get-html')

const intitialState = require('../../state')

class Mainpage extends React.Component {

  componentDidMount(){

    getHtml('index', (err, res) => {
      if(err){
        console.error(err)
      }else{
        const display = JSON.stringify(res.body.html)
        this.props.dispatch({type: 'GET_HTML', payload: display})
      }
    })

  }

  render () {
    const dispatch = this.props.dispatch
    const state = this.props.state || intitialState
    const { page, htmlDisplay, toggleBoxes } = state
    const section = page.split('/')[1]

    let html = null //replace null with spinner
    switch (page) {

      case '/readme':
        html = htmlDisplay
          ? renderHTML(htmlDisplay)
          : null
        break;

      case '/email/search':
        html = <PageTemplate {...this.props}/>
        break;

      default:
        html = constructResponses(exampleResponses, section, page, dispatch, toggleBoxes)
        break;

    }

    return (
      <div className='docContainer'>
        {html}
      </div>
    )
  }
}

module.exports = Mainpage
