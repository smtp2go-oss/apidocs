const React = require('react')

const { getHtml } = require('../../services/get-html')
const initialState = require('../../state')

class Readme extends React.Component {

  componentDidMount(){
    console.log('hello', this.props)

    const dispatch = this.props.dispatch

    getHtml('index', (err, res) => {
      if(err){
        console.error(err)
      }else{
        // dispatch({type: 'GET_HTML', payload: res.body.html})
      }
    })

  }

  render () {

    const state = this.props.state || initialState
    const { htmlDisplay } = state

    return (
      <div>
        {htmlDisplay}
      </div>
    )
  }
}

module.exports = Readme
