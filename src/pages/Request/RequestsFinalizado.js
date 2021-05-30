import React,{ Component } from 'react';
import RequestTemplate from './RequestTemplate';
import OrderList from '../../components/OrderList'
import api from '../../services/api';


export default class RequestScreenFinalizado extends Component{

  state ={
    Orders:[]
  }
  

  async componentDidMount(){
    const response = await api.get('/api/Orders')

   
    
    this.setState({Orders: response.data})
  }

  render(){
    const {Orders} = this.state;

    console.log(Orders)
  return(
    <RequestTemplate
      content={()=><OrderList requests = {Orders}  ability={false} button1="Ver avaliações" button2="Excluir da lista"/>}
    
    />
  )}
}