import React, { Component } from "react"
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { FormattedMessage } from 'react-intl'

import IdentifierDetails from '../Identifier'
import PresentationItem from '../../../PresentationItem'

const styles = theme => ({

})

class DatasetPresentation extends Component {
  render() {
    const { dataset } = this.props;
    return (
      <div>
        <IdentifierDetails editable deletable data={{
          "key": 121894,
          "type": "URL",
          "identifier": "https://ipt.gbif.org/resource?r=rainbio",
          "createdBy": "crawler.gbif.org",
          "created": "2018-10-26T12:43:27.419+0000"
        }}/>
        {dataset &&
          <dl>
            <PresentationItem label={<FormattedMessage id="title" defaultMessage="Title" />} >
              {dataset.title}
            </PresentationItem>
            <PresentationItem label={<FormattedMessage id="datasetType" defaultMessage="Dataset type" />} >
              {dataset.type}
            </PresentationItem>
            <PresentationItem label={<FormattedMessage id="doi" defaultMessage="DOI" />} >
              {dataset.doi}
            </PresentationItem>
          </dl>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.dataset.loading,
  dataset: state.dataset.dataset,
  error: state.dataset.error,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(DatasetPresentation))