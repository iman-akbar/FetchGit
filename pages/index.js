import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '@/styles/Home.module.css'
import { Card, Grid, Text} from "@nextui-org/react";

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
      
      <Grid.Container gap={3}>
      {allDataList.map((item,index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card
            onClick={() => {
              window.open(item.html_url)
            }}
            isPressable >
            <Card.Body css={{ p: 50 }}>              
              <Text css={{textAlign: 'center'}}>{item.name}</Text>
            </Card.Body>
             <Card.Divider />
            <Card.Footer css={{justifyContent:"center"}}>                            
                <Text css={{fontWeight: "$semibold", fontSize: "$sm"}}>
                  {item.html_url}
                </Text>             
            </Card.Footer>
          </Card>
        </Grid>
      ))}
      </Grid.Container>           
      </div>
    );
  }


export default Home
