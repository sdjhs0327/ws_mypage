import { useState } from 'react';
import emailjs from 'emailjs-com';
import React from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};
export const Contact = (props) => {
  const [{ name, email, phone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);

    {
      /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
    }

    emailjs.sendForm('service_kt2ij5x', 'template_qgvd5gn', e.target, 'J2V0Cvf8S5QtpgWyU').then(
      (result) => {
        console.log(result.text);
        alert("전송 완료!");
        clearState();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>CONTACT</h2>
                <p>
                  전화번호를 남겨주시면 48시간 내로 회신드리겠습니다.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name (예:홍길동)"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email (예:ninebros@naver.com)"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Phone (예: 010-1234-5678)"
                    pattern="^01[0-9]-\d{3,4}-\d{4}$"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message (예: 안녕하세요! 워크시트 요청합니다.)"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  보내기
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'} target="_blank">
                      <i className="fa fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li> */}
                  <li>
                    <a href={props.data ? props.data.blog : '/'} target="_blank">
                      <i className="fa fa-solid fa-blog"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Ninebros. Design by{' '}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
