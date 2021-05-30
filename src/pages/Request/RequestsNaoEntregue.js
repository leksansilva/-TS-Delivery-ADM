import React,{ Component } from 'react';
import RequestTemplate from './RequestTemplate';
import OrderList from '../../components/OrderList'
import api from '../../services/api';


export default class RequestScreenNãoEntregue extends Component{

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
      content={()=><OrderList requests = {Orders} button1="Tentar Novamente" button2="Cancelar" />}
    
    />
  )}
}