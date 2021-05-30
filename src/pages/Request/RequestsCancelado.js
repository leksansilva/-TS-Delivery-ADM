import React,{ Component } from 'react';
import RequestTemplate from './RequestTemplate';
import OrderList from '../../components/OrderList'
import api from '../../services/api';


export default class RequestScreenCancelado extends Component{

  state ={
    Orders:[]
  }
  

  async componentDidMount(){
    const response = await api.get('/api/Orders')

   
    
    this.setState({Orders: response.data})
  }

  render(){
    const {Orders} = this.state;

 
  return(
    <RequestTemplate
      content={()=><OrderList count={Orders} button1="Ver avaliações" button2="Bloquear"/>}
    
    />
  )}
}