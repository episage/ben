import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";

import BaseComponent from "BaseComponent";

import SongListItem from "SongListItem";

import { Table, TableHead, TableRow, TableCell } from "react-toolbox/lib/table";
import { Button, IconButton } from "react-toolbox/lib/button";
// const SongEntryModel = {
//   id: { type: Number },
//   username: { type: String },
//   songName: { type: String }
// };

export default class Component extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          username: "dupa",
          songName: "candyfloss"
        },
        {
          id: 2,
          username: "kupa",
          songName: "candyman"
        }
      ]
    };
  }

  render() {
    return (
      <Table selectable={false}>
        {this.state.data.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.username}</TableCell>
            <TableCell>{item.songName}</TableCell>
            <TableCell>
              <Button icon="bookmark" label="Contribute" raised primary />
            </TableCell>
            <TableCell>
              <Button icon="play_arrow" floating accent mini />
            </TableCell>
          </TableRow>
        ))}
      </Table>
    );
  }
}
