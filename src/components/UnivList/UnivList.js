import React, { Component } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import Univ from './Univ';
const univDataUrl = 'https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv';

class UnivList extends Component {
    state = {
      univData: null,
      showUniv: false,
      searchString: ''
    }

    componentDidMount() {
        axios.get(univDataUrl)
        .then(res => {
            var parsedUnivData = Papa.parse(res.data);
            parsedUnivData.data.shift();
            this.setState({
                univData: parsedUnivData.data,
                showUniv: true
            })
        });
    }

    render() {
        var univs = null;
        if(this.state.showUniv) {
            univs = (
                <div className = 'univ-list'>
                  {this.state.univData.filter((univ) => {
                      if(this.state.searchString === '') {
                          return univ;
                      } else if(univ[1].toLowerCase().includes(this.state.searchString.toLowerCase())) {
                        return univ;
                      }
                  }).map((univ) => {
                    return <Univ 
                            instnm = {univ[1]} 
                            city = {univ[2]} 
                            stabbr = {univ[3]}
                            insturl = {univ[4]}
                            key = {univ[0]} />
                  })}
                </div>
            )
        } else {
            univs = <div className = 'univ-list'><p>No Universities Found</p></div>
        }
        return (
            <div>
                <div className = 'search'>
                    <input type = 'text' placeholder = 'Search...' onChange = {(event) => this.setState({searchString: event.target.value})}/>
                </div>
                {univs}
            </div>
        );
    }
  }
  export default UnivList;