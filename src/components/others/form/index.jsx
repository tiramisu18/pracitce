import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Radio } from 'antd'
import './style/index.css'

const FormItem = Form.Item
const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    }
const RadioGroup = Radio.Group
const { TextArea } = Input

class Formtable extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem className='formItem' {...formItemLayout} label='你的大名'>     
          {getFieldDecorator('Name', {
            rules: [{required: true, message: '你的名字一定很好听!',
            }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Name" />
          )}
        </FormItem>
        <FormItem className='formItem' {...formItemLayout} label='Girl / Boy'>
          {getFieldDecorator('sex', {
            rules: [{ required: true, message: '眨巴眨巴眼! 选一个呗' }],
          })(
            <RadioGroup>
              <Radio value="boy"><img src={require('./images/boots.png')} /></Radio>
              <Radio value="girl" ><img src={require('./images/shoes.png')} /></Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem className='formItem' {...formItemLayout} label='联系方式'>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '你不告诉我你的电话储大大该如何通知你!' }],
          })(
            <Input prefix={<Icon type="phone" style={{ fontSize: 13 }} />} type="phone" placeholder="phone" />
          )}
        </FormItem>
        <FormItem className='formItem' {...formItemLayout} label='活动建议'>
          {getFieldDecorator('suggest')(
            <TextArea rows={4} size='large' />
          )}
        </FormItem>
        <FormItem className='formItem' >
          <Button type="primary" htmlType="submit" className="login-form-button">
            我要来我要来我要来
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedForm = Form.create()(Formtable)

export default WrappedForm

