import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
class Flat extends Component {
  MyData = [
    {
      id: 1,
      name: "A Lorem ipsum",
      bg: "#4f9",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 2,
      name: "B Lorem ipsum",
      bg: "#e83",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 3,
      name: "C Lorem ipsum",
      bg: "#4f9",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 4,
      name: "D Lorem ipsum",
      bg: "#e83",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 5,
      name: "E Lorem ipsum",
      bg: "#4f9",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 6,
      name: "F Lorem ipsum",
      bg: "#e83",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 7,
      name: "G Lorem ipsum",
      bg: "#4f9",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 8,
      name: "H Lorem ipsum",
      bg: "#e83",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 9,
      name: "I Lorem ipsum",
      bg: "#4f9",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 10,
      name: "J Lorem ipsum",
      bg: "#e83",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 11,
      name: "K Lorem ipsum",
      bg: "#4f9",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    }, {
      id: 12,
      name: "L Lorem ipsum",
      bg: "#e83",
      p: "Modi qui porro repellendus corrupti expedita est hic rem."
    },
  ]
  render() {
    return (
      <FlatList data={this.MyData}  renderItem={(item) => <Item key={item?.id} name={item.name}  />} />
    );
  }
}

export default Flat;