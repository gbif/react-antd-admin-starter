import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Form, Input, Select, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class ItemForm extends React.Component {
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
    const { data: init={} } = this.props;

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
            label={<FormattedMessage id="type" defaultMessage="type" />}
          >
            {getFieldDecorator('type', {
              initialValue: init.type,
              rules: [
                { required: true, message: 'Please select a type!' },
              ],
            })(
              <Select placeholder="None selected">
                <Option value="URL">URL</Option>
                <Option value="LSID">LSID</Option>
                <Option value="DOI">DOI</Option>
              </Select>
            )}
          </FormItem>
          
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="identifier" defaultMessage="Identifier" />}
          >
            {getFieldDecorator('identifier', {
              initialValue: init.identifier,
              rules: [{
                required: true, message: 'Please provide an identifier',
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

const WrappedForm = Form.create()(ItemForm);
export default WrappedForm
