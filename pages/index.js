import { Inter } from 'next/font/google'
import React, { Component } from "react";
import axios from "axios";
import styles from '@/styles/Home.module.css'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDataList: [],
    };
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/iman-akbar/repos`).then((res) => {
      const allDataList = res.data.map((obj) => ({
        title: obj.name,
        url: obj.html_url,
      }));
      this.setState({ allDataList });
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        {this.state.allDataList.map((dataList, index) => {
          return (            
            <div key={index} clas>              
              <a className={styles.title} href={dataList.url}>{dataList.title}</a>
              <p className={styles.url}>{dataList.url}</p>
            </div>
          );
        })}
      </div>
    )
  }
}
