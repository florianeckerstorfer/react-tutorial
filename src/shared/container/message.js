// @flow

import { connect } from 'react-redux'

import Message from '../component/message'
import { getMessage } from '../../client/configureStore'

const mapStateToProps = state => ({
  message: getMessage(state),
})

export default connect(mapStateToProps)(Message)
