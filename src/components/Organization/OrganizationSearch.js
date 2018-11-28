import React from 'react'
import { FormattedMessage, FormattedRelative } from 'react-intl'
import { Link } from 'react-router-dom'
import DataTable from '../DataTable'
import DataQuery from '../DataQuery'
import { searchOrganizations, searchDeletedOrganizations } from '../../api/organizationSearch'

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

export const OrganizationSearch = ({initQuery={q:'', limit: 25, offset: 0}}) => {
  return <DataQuery 
    api={searchOrganizations} 
    initQuery={initQuery} 
    render={props => <DataTable {...props} columns={columns} searchable/>} />
}

export const OrganizationDeleted = ({initQuery={q:'', limit: 25, offset: 0}}) => {
  return <DataQuery 
    api={searchDeletedOrganizations} 
    initQuery={initQuery} 
    render={props => <DataTable {...props} columns={columns} />} />
}