import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '@/styles/Home.module.css'


const Home = () => {
  const [allDataList, setAllDataList] = useState([])
  useEffect(() => {
    const loadData = async () => {
     axios.get("https://api.github.com/users/iman-akbar/repos")
       .then(( response ) => {
          console.log(response);
            setAllDataList(response.data)
        })
    }
    loadData();
  }, [])

  
  return (      
      <div>        
      {allDataList.map((item,index) => {
          return (            
            <div key={index}>                
              <a className={styles.title} href={item.html_url}>{item.name}</a>  
              <p className={styles.url}>{item.html_url}</p>
            </div>
          );
        })}
      </div>
    );
  }


export default Home
