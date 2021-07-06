import React from 'react';
import { link } from 'react-router-dom'


class List extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]

        };
    }

    fetchData(){
        fetch('http://localhost:8081/api/client/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data)
        });
    }

    componentDidMount(){
        this.fetchData();
    }
    render(){
        const clientData=this.state.data;
        const rows=clientData.map((client)=>
            <tr key={client.id}>
                <td>{client.Address}</td>
                <td>{client.Contact}</td>
                <td>{client.Email}</td>
                <td>{client.Plans}</td>
                <td>{client.Status}</td>

            </tr>
        );

        return(
            <div className='auth'>
            <table className="">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Plans</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </div>
        );
    }
}

export default List;