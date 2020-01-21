import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchProps = (dispatch: any, ownProps: any) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchProps
)(Link)

export default FilterLink