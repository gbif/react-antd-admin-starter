import React, { Component } from "react"
import { FormattedMessage } from 'react-intl'
import IdentifierDetails from '../Identifier'
import PresentationItem from '../../PresentationItem'

class DatasetPresentation extends Component {
  render() {
    const { dataset } = this.props;
    return (
      <div>
        {/* <IdentifierDetails editable deletable data={{
          "key": 121894,
          "type": "URL",
          "identifier": "https://ipt.gbif.org/resource?r=rainbio",
          "createdBy": "crawler.gbif.org",
          "created": "2018-10-26T12:43:27.419+0000"
        }}/> */}
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

export default DatasetPresentation