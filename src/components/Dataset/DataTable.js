import React from 'react'
import { FormattedMessage, FormattedRelative } from 'react-intl'
import { Link } from 'react-router-dom'
import { Input, Table } from 'antd';

const Search = Input.Search;

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

class DataTable extends React.Component {
  componentWillMount() {
    this.props.updateSearch({})
  }

  render() {
    const { searchable, updateSearch, result, q, loading } = this.props;
    const Header = <FormattedMessage id="nResults"
        defaultMessage={`{resultCount, number} {resultCount, plural,
          one {results}
          other {results}
        }
      `}
      values={{ resultCount: result.count, q }}
    />;
    return (
      <div style={{ background: 'white', padding: 16 }}>
        {searchable && <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          defaultValue={q}
          onSearch={q => updateSearch({ q })}
          style={{marginBottom: '16px'}}
        />
        }
        <Table
          columns={columns}
          dataSource={result.results}
          bordered
          title={() => Header}
          pagination={{
            total: result.count,
            current: 1 + result.offset / result.limit,
            pageSize: result.limit,
            onChange: page => updateSearch({ q: q, offset: (page - 1) * result.limit })
          }}
          loading={loading}
        />
      </div>
    )
  }
}

export default DataTable