import React from 'react'
import { FormattedMessage, FormattedRelative } from 'react-intl'
import { Link } from 'react-router-dom'
import DataTable from './DataTable'
import DataQuery from '../DataQuery'
import { searchDatasets, searchDeletedDatasets } from '../../api/datasetSearch'

const columns = [
  {
    title: <FormattedMessage id="title" defaultMessage="Title" />,
    dataIndex: 'title',
    render: (text, record) => <Link to={`/dataset/${record.key}`}>{text}</Link>,
  },
  {
    title: <FormattedMessage id="createdDate" defaultMessage="Created" />,
    dataIndex: 'created',
    width: "200px",
    render: text => <FormattedRelative value={text} />
  }
];

export const DatasetSearch = ({initQuery={q:'', limit: 25, offset: 0}}) => {
  return <DataQuery 
    api={searchDatasets} 
    initQuery={initQuery} 
    render={props => <DataTable {...props} columns={columns} searchable/>} />
}

export const DatasetDeleted = ({initQuery={q:'', limit: 25, offset: 0}}) => {
  return <DataQuery 
    api={searchDeletedDatasets} 
    initQuery={initQuery} 
    render={props => <DataTable {...props} columns={columns} searchable/>} />
}