import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Input, Table } from 'antd';

const Search = Input.Search;

const DataTable = (props) => {
  const { searchable, updateQuery, fetchData, data, query, loading, columns } = props;
  const { q } = query
  const Header = <FormattedMessage id="nResults"
    defaultMessage={`{resultCount, number} {resultCount, plural,
        one {results}
        other {results}
      }
    `}
    values={{ resultCount: data.count, q }}
  />;
  return (
    <React.Fragment>
      <div style={{ background: 'white', padding: 16 }}>
        {searchable && <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onChange={(e) => updateQuery({ q: e.target.value })}
          value={q}
          onSearch={val => fetchData({q: val})}
          style={{ marginBottom: '16px' }}
        />
        }
        <Table
          columns={columns}
          dataSource={data.results}
          bordered
          title={() => Header}
          pagination={{
            total: data.count,
            current: 1 + data.offset / data.limit,
            pageSize: data.limit,
            onChange: page => fetchData({ q: q, offset: (page - 1) * data.limit })
          }}
          loading={loading}
        />
      </div>
    </React.Fragment>
  )
}

export default DataTable

