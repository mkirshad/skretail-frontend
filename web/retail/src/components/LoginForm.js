import React from 'react';
import { Button, Form, Input } from 'antd';
import { getUserPermissionsCodeNamesDataList } from '../API/readings';
//import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import {get_is_logged_in} from '../API/onDemandReading';

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        //console.log( this.props.form.getFieldValue('userName'));//waoww done great
        //this.getuserpermissionsapi(values.userName);   //no need to call it 
        this.props.onAuth(values.userName, values.password);
      }
    });
  };


  getuserpermissionsapi = async (email) => {
    ////////neww /////////
    const res = await getUserPermissionsCodeNamesDataList(email, '');
    if (res.fail) {
      console.log(' getUserPermissionsCodeNamesDataList Cant fetch group demand reading -> ', res);

    } else {
      console.log(res.user_permissions);
      console.log(res.user_is_superuser);
      console.log(res.user_meter_devices);
      console.log(res.user_permissions_extra_data_with_ids);
      //console.log(window.location.pathname.split('/')[1]);

      /* new version new funtionality */
      localStorage.setItem('user_group_meter_devices', res.user_meter_devices);  //setting res.user_meter_devices  to local storage
      localStorage.setItem('user_superuser_chk', res.user_is_superuser);  //setting res.user_meter_devices  to local storage
      /* new version new funtionality */

    }

    //////////////////

  }

  componentDidMount() {

    document.title = "SK ERP";//woww graet works easily

  }

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (<p>{this.props.error.message}</p>);
    } else if (this.props.token !== null && get_is_logged_in() === true) {
      localStorage.setItem('username', this.props.form.getFieldValue('userName'));  // vvvimpp setting useremail to local storage
      localStorage.setItem('token',this.props.token);
      //console.log( this.props.form.getFieldValue('userName'));//waoww done great

      window.location = '/pos';
    }

    document.body.classList.add('page-membership');

    const { getFieldDecorator } = this.props.form;
    var dt = new Date();
    const year = dt.getYear() + 1900;
    return (
      <div>
        <div className="wrapper">
          <div className="member-container">
            <div className="app-logo">
              <p>SK ERP - Login</p>
            </div>

            <div className="member-container-inside">
              {errorMessage}
              <Form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <Form.Item>
                    {getFieldDecorator('userName', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <Input className="form-control" placeholder="Username" />
                    )}
                  </Form.Item>
                </div>

                <div className="form-group">
                  <Form.Item>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                      <Input type="password" className="form-control" placeholder="Password" />
                    )}
                  </Form.Item>
                </div>

                <div className="form-group"><p><a href="#">Forgot Password?</a></p></div>

                <div className="form-group">
                  <Button type="primary" className="btn btn-success btn-block" htmlType="submit">Login</Button>
                </div>
              </Form>
            </div>

            <p><small>Copyright &copy; {year} SK Strategic Soft.</small></p>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    token: state.token
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
