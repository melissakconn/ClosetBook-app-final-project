import React from 'react';
import { client } from './endpoint/endpoint.js'
import gql from "graphql-tag"



export default class extends React.Component{

    state = { name: this.props.info.name, category: this.props.info.category, description: this.props.info.description, picture: ""}

    render(){
        const data = this.props.info


        const updateItem = async () => {
            let item = await client.mutate({
                mutation: gql`
                mutation{
                    updateItem(
                        where: { id: "${data.id}"}
                        data: { name: "${this.state.name}",
                                category: "${this.state.category}", 
                                description: "${this.state.description}" }
            ){
                id
                name
            }
        }
                `}).then((result) => { return result.data.createItem } )

            await console.log("item Deleted: ", item )
            window.location.reload()
            console.log("hey")
        }



        const deleteById = async () => {
            console.log("Delete by Id: ")

            let temp2 = await client.mutate({
                mutation: gql`                                                   
        mutation{                                                        
            deleteItem(where: { id: "${data.id}" }){           
              id                                                         
              name                                                       
            }                                                            
          }                                                              
        `}).then((result) => { return result.data.createItem } )

            await console.log("User Deleted: ", temp2 )
            // await this.setState({ itemId: '' })
            window.location.reload()
        }




        return(
            <div className="main-template" >
                <div className="picture-container" >
                    <img className="picture-style" src={data.picture} alt="abc"/>
                </div>


                <div className="text-container" >


                        <div><strong>Name: </strong>{}</div>
                        <input onChange={event => this.setState({name: event.target.value})}
                           type="text" defaultValue={data.name}/>

                        <div><strong>Categories: </strong>
                        <input onChange={event => this.setState({category: event.target.value})}
                               type="text" defaultValue={data.category}/></div>

                        <div><strong>Description: </strong>
                        <input onChange={event => this.setState({description: event.target.value})}
                               type="text" defaultValue={data.description}/></div>

                        {/*<div><strong>Edit: </strong></div>*/}
                        {/*<input onChange={event => this.setState({edit: event.target.value})}*/}
                               {/*type="text" defaultValue={data.edit}/>*/}

                        <div><strong>ID: </strong>{data.id}</div>


                        <br/>
                        <button onClick={deleteById} >delete</button>
                        <button onClick={updateItem}>Update</button>

                    </div>
                        </div>
        )
    }



}


//
//
// category
//     :
//     "tops"
// description
//     :
//     "black bomber jacket"
// id
//     :
//     "cjh3vjgp2wc240b81cc0kks70"
// name
//     :
//     "jacket"
// picture
//     :
//     "https://github.com/melissakconn/projectphotos/blob/master/tops/jacket.png"
// Symbol(id)
// :
// "Item:cjh3vjgp2wc240b81cc0kks70"

