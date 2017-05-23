// @flow

import { connect } from 'react-redux'

import MessageAsync from '../component/message'
import { getMessageAsync } from '../../client/configureStore'

const mapStateToProps = state => ({
  message: getMessageAsync(state),
})

export default connect(mapStateToProps)(MessageAsync)
