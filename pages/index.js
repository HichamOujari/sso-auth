import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'

import React, { Component } from 'react';

class Home extends Component {

  state = {
    urls:[]
  }

  async getAllApps(){
    const {data} = await axios.get('/api/get-apps');
    this.setState({urls:data});
  }

  componentDidMount(){
    this.getAllApps();
  }

  render() {
    return (
      <div>

        <div className="container listar-hero-categories-design-marker">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="">
                <div className="bg-color-blend"></div>
                <div className="s-img-con">
                </div>

                <div className="listar-header-centralizer">
                  <div className="listar-content-centralized">
                    <div className="listar-hero-container">
                      <div className="listar-hero-section-title">
                        <h1 style={{ opacity: 1 }}><span>Welcome to SSO-Auth</span></h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listar-search-categories listar-categories-fixed-bottom">
                  <div className="listar-listing-categories">
                    {this.state.urls.map(url => (<a href={url.hostname}>
                      <div>
                        <div className="listar-category-icon-wrapper">
                          <div className="listar-category-icon-box" style={{ backgroundColor: 'gray'}}></div>
                          <span className="far fa-moon">
                          </span>
                        </div>
                        <div className="listar-header-category-name">
                          {url.hostname.replace('http://','').replace('https://','')} </div>
                      </div>
                    </a>))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
