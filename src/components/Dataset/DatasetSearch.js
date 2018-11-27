import { connect } from 'react-redux'
import { updateDatasetSearch } from '../../actions/datasetSearch'
import DataTable from './DataTable';

const mapStateToProps = state => ({
  loading: state.datasetSearch.loading,
  result: state.datasetSearch.result,
  q: state.datasetSearch.q,
  error: state.error,
  searchable: true
})

const mapDispatchToProps = {
  updateSearch: updateDatasetSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)