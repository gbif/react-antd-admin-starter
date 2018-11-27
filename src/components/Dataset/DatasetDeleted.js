import { connect } from 'react-redux'
import { updateDatasetSearch } from '../../actions/datasetDeleted'
import DataTable from './DataTable';

const mapStateToProps = state => ({
  loading: state.datasetDeleted.loading,
  result: state.datasetDeleted.result,
  searchable: false
})

const mapDispatchToProps = {
  updateSearch: updateDatasetSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)