import React from "react";

import { Form, Input, Button, Checkbox, Layout, Divider, Menu, Breadcrumb, theme } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavLogo from "../assets/logo-new.svg";
import FacebokLogo from "../assets/facebook.png";
import InstagramLogo from "../assets/instagram.png";

import { login } from "@/redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/redux/auth/actions";
import { selectAuth } from "@/redux/auth/selectors";
const { Header, Content, Footer } = Layout;
const LoginPage = () => {
  // const [error, setError] = useState();

  // const { setAdminData } = useContext(AdminContext);
  // const history = useHistory();
  const { loading: isLoading } = useSelector(selectAuth);
  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setInputs((inputs) => ({ ...inputs, [name]: value }));
  // }
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(login(values));
  };
  return (
    <>
      {/* <Navbar style={{ backgroundColor: "#fff" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={NavLogo}
              className="d-inline-block align-top fluid"
              alt="Logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <Layout className="layout">
        <Row>
          <Col span={12} offset={6}>
            <Content
              style={{
                padding: "150px 0 180px",
                maxWidth: "360px",
                margin: "0 auto",
              }}>
              <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Admin Panel</h2>
              <br />
              <div className="site-layout-content">
                {" "}
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}>
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="admin@flutterguide.com"
                      // defaultValue="admin@desichowrastha.com"
                      autoComplete="off"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}>
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      // defaultValue="12345678"
                      placeholder="12345678"
                      autoComplete="off"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading={isLoading}>
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Content>
          </Col>
        </Row>
      </Layout>
      {/* <footer style={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        backgroundColor: "#fff",
      }}>
        <Container>
          <Row>
            <Col>
              <p style={{
                color: "#9AA1A9",
                marginTop: "18px"
              }}>
                Follow Us&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#" target="_blank">
                  <img
                    src={FacebokLogo}
                    className="d-inline-block align-top fluid"
                    alt="Social Links"
                    style={{marginTop: "-3px"}}
                    width={30}

                />
                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com/desichowrastha.nashua/" target="_blank">
                  <img
                    src={InstagramLogo}
                    className="d-inline-block align-top fluid"
                    alt="Social Links"
                    style={{marginTop: "-3px"}}
                    width={30}

                />
                </a>
                <span
                  style={{ float: "right" }}>
                  © 2023 TechMind Software Solutions
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </footer> */}
    </>
  );
};

export default LoginPage;
