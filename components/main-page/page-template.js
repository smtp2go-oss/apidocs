const React = require('react')
import { PulseLoader } from 'react-spinners';
import Media from 'react-responsive'


const initialState = require('../../state')
const { endpoint, endpointsIndex } = require('../../services/endpoints')
const constructExample = require('./operations/construct-example')
const constructSchemaBox = require('./operations/construct-schema-box-alt')

class PageTemplate extends React.Component {

  componentDidMount () {

    const dispatch = this.props.dispatch
    const state = this.props.state || initialState
    const { page } = state

    endpoint('test1.delete', (err, res) => {
      if(err){
        console.error(err)
      }else{
        dispatch({type: 'SET_PAGE_CONTENT', payload: {
          page: page,
          content: res.body
        }})
      }
    })

  }

  render () {

    const state = this.props.state || initialState
    const { page, pageContent, sideBarMobile } = state
    let display = (
        <div
          className='loader'
        >
          <PulseLoader
            color={'#1892e6'}
          />
        </div>
    )
    if (sideBarMobile) {
      display = (
        <Media query='(min-width: 1000px)'>
          <div
            className='loader'
          >
            <PulseLoader
              color={'#1892e6'}
            />
          </div>
        </Media>
      )
    }

    if (pageContent[page]) {
      const primaryDescription = pageContent[page]['primary-description']
      const secondaryDescription = pageContent[page]['secondary-description']
      const { examples, input, req_limit, req_period } = pageContent[page]
      let limit = `${req_limit} requests`
      if (req_limit === 1){
        limit = `${req_limit} request`
      }
      display = (
        <div>
          <h2
          className='sectionHeader'
          >
          <span style={{color: 'green'}}>POST </span>
          <span>{page}</span>
          </h2>
          <h4>{primaryDescription}</h4>
          <p>{secondaryDescription}</p>
          <p>Rate limited to {limit} per {convertSeconds(req_period)}</p>
          {examples.map(constructExample)}
        </div>
      )
    }

    console.log(display);
    return (
      <div>
        {display}
      </div>

    )
  }
}

function convertSeconds (req_period) {
  const time = Number(req_period)
  if (time === 1) {
    return '1 second'
  }
  else if (time < 60) {
    return `${time} seconds`
  }
  else if (time === 60) {
    return '1 minute'
  }
  else if (time < 3600) {
    return `${time/60} minutes`
  }
  else if (time === 3600) {
    return '1 hour'
  }
  else {
    return `${time/3600} hours`
  }
}

module.exports = PageTemplate
