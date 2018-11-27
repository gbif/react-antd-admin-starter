import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Form, Input, Select, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class DatasetForm extends React.Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="title" defaultMessage="Title" />}
          >
            {getFieldDecorator('title', {
              initialValue: 'my initial value',
              rules: [{
                required: true, message: 'Please provide a title',
              }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="datasetType" defaultMessage="Dataset type" />}
          >
            {getFieldDecorator('datasetType', {
              rules: [
                { required: true, message: 'Please select a dataset type!' },
              ],
            })(
              <Select placeholder="None selected">
                <Option value="OCCURRENCE">Occurrence</Option>
                <Option value="CHECKLIST">Checklist</Option>
                <Option value="SAMPLIG_EVENT">Sampling event</Option>
                <Option value="META_DATA">Meta data</Option>
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="doi" defaultMessage="DOI" />}
          >
            {getFieldDecorator('doi', {
              rules: [{
                required: true, message: 'Please specify a DOI',
              }],
            })(
              <Input />
            )}
          </FormItem>
          
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Update</Button>
          </FormItem>
        </Form>
      </React.Fragment>
    );
  }
}

const WrappedDatasetForm = Form.create()(DatasetForm);
export default WrappedDatasetForm
