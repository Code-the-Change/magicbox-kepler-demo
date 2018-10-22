// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import React, {Component} from 'react';
import {CurrentCountryList} from '../components/load-data-modal/current-country-list'


export default class CustomDataModal extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentCountry: '',
      currentAdminSelection: ''
    }
  }

  handleChange = (event) => {
    const countryName = event.target.name
    const adminSelection = event.target.value
    // console.log("question id", questionID, "question response", questionResponse)
    this.setState({
      currentCountry: countryName,
      currentAdminSelection: adminSelection
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
     console.log("submitting", countryName, adminSelection)
    //fetch will go here
    }

  render(){
    return(
      <div>
        <h2>Select Datasets from Magic Box</h2>
          <h4>Pick the country and administrative level for your map</h4>
          <CurrentCountryList />
        </div>
    )
    }
  }
