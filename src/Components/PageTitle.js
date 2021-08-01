import React from "react";
import {  } from "@material-ui/system";

export default class PageTitle extends React.Component {
    render(){
        return <h1 style={{margin: "15px"}}>{this.props.title}</h1>
    }
}